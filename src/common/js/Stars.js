export const starDraw = () => {
  let canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d'),
    width = window.innerWidth,
    height = 800,
    //实例化月亮和星星。流星是随机时间生成，所以只初始化数组
    moon = new Moon(ctx, width, height),
    stars = new Star(ctx, width, height, 200),
    meteors = [],
    count = 0
  canvas.width = width;
  canvas.height = height;
  const meteorGenerator = () => {
    //x位置偏移，以免经过月亮
    let x = Math.random() * width + 800
    meteors.push(new Meteor(ctx, x, height))
    //每隔随机时间，生成新流星
    setTimeout(() => {
      meteorGenerator()
    }, Math.random() * 2000)
  }
  const frame = () => {
    count++
    count % 10 == 0 && stars.blink()
    moon.draw()
    stars.draw()
    meteors.forEach((meteor, index, arr) => {
      //如果流星离开视野之内，销毁流星实例，回收内存
      if (meteor.flow()) {
        meteor.draw()
      } else {
        arr.splice(index, 1)
      }
    })
    requestAnimationFrame(frame)
  }
  meteorGenerator()
  frame()
}

class Moon {
  constructor(ctx, width, height) {
    this.ctx = ctx
    this.width = width
    this.height = height
  }

  draw () {
    let ctx = this.ctx,
    gradient = ctx.createLinearGradient(800, 0, 0, window.innerWidth)
    //月亮
    // gradient.addColorStop(0, 'rgba(255,255,255,0.5)')
    // gradient.addColorStop(0.01, 'rgb(70,70,80)')
    gradient.addColorStop(0, '#0b152e')
    gradient.addColorStop(1, '#58aec4')
    ctx.save()
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, this.width, this.height)
    ctx.restore()
  }
}

class Star {
  constructor(ctx, width, height, amount) {
    this.ctx = ctx
    this.width = width
    this.height = height
    this.stars = this.getStars(amount)
  }

  //返回一堆的小星星
  getStars (amount) {
    let stars = []
    while (amount--) {
      // console.log(amount)
      // 创建一个星星的坐标及大小数据描述JSON对象，添加到stars数组
      stars.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        r: Math.random() + 0.2
      })
    }
    return stars
  }

  //画满天星
  draw () {
    let ctx = this.ctx
    ctx.save()   //保存canvas当前绘制，一般新绘制前调用
    ctx.fillStyle = 'white'
    //star 是从stars里的一颗star 这里是function的参数
    this.stars.forEach(star => {
      ctx.beginPath()  //开始绘制
      ctx.arc(star.x, star.y, star.r, 0, 2 * Math.PI)  //画椭圆
      ctx.fill()  //填充色
    })
    ctx.restore() //再次保存
  }

  //星星没隔10帧闪一下
  blink () {
    //map方法 找到合适的星星放进新数组 匹配
    this.stars = this.stars.map(star => {
      let sign = Math.random() > 0.5 ? 1 : -1
      star.r += sign * 0.2
      if (star.r < 0) {
        star.r = -star.r
      } else if (star.r > 1) {
        star.r -= 0.2
        // console.log(star.r)

      }
      return star
    })
  }
}

class Meteor {
  constructor(ctx, x, h) {
    this.ctx = ctx
    this.x = x
    this.y = 0
    this.h = h
    this.vx = -(4 + Math.random() * 4)
    this.vy = -this.vx
    this.len = Math.random() * 300 + 500
  }

  flow () {
    //判定流星出界
    if (this.x < -this.len || this.y > this.h + this.len) {
      return false
    }
    this.x += this.vx
    this.y += this.vy
    return true
  }

  draw () {
    let ctx = this.ctx,
      //径向渐变，从流星头尾圆心，半径越大，透明度越高
      gra = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.len)

    const PI = Math.PI
    gra.addColorStop(0, 'rgba(255,255,255,1)')
    gra.addColorStop(1, 'rgba(0,0,0,0)')
    ctx.save()
    ctx.fillStyle = gra
    ctx.beginPath()
    //流星头，二分之一圆
    ctx.arc(this.x, this.y, 1, PI / 4, 5 * PI / 4)
    //绘制流星尾，三角形
    ctx.lineTo(this.x + this.len, this.y - this.len)
    ctx.closePath()
    ctx.fill()
    ctx.restore()
  }
}