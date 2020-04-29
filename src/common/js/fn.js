/**
 * 
 * @param {obj} Object 传入需要判断是否非空的对象
 */
export const isEmptyObj = obj => {
      if(obj && Object.keys(obj).length > 0){
            return true
      } else {
            return false
      }
}

/**
 *
 * @param {obj} Object 传入需要判断是否非空的对象
 * 利用Object.prototype.hasOwnProperty去重
 * obj.hasOwnProperty('keys'), true与false表示当前对象中是否存在此key值
 */
export const arrRemoval = arr => {
      let obj = {}
      let tplArr = arr.filter((item, index, arr) => {
            /* Array.prototype.filter过滤, item为遍历到当前的元素, index为指针, arr为当前元素所属数组对象 */
            /* true为返回当前元素, false为过滤掉当前元素 */
            /* hasOwnProperty判断[item类型]+item(JSON.stringify将数组与对象JSON化作为字符串判断)是否为已存在的key, 若存在则返回false */
            return obj.hasOwnProperty(typeof item + JSON.stringify(item)) ? false : (obj[typeof item + JSON.stringify(item)] = true)
      })
      return tplArr
}


/**
 *
 * @param {ArrAy} arr         需要筛选的数组
 * @param {String} str        筛选的内容
 * @param {String} node       对象节点
 * @memberof ArrFilter
 * @export
 * @class ArrFilter
 */
export class ArrFilter {
      constructor(arr, str, ...node) {
            if (arr && arr.length > 0) {
                  this.arr = arr
                  this.str = str
                  this.node = ''
                  node.forEach(item => this.node += `['${item}']`)
            }
      }
      
      /* 过滤函数 */
      filters() {
            this.result = this.arr.filter(item => {
                  switch (typeof item) {
                        case 'object':
                              /* eval(String) 将字符串作为JS代码执行 */
                              if (eval(`item${this.node}`) && eval(`item${this.node}`).indexOf(this.str) > -1) return item
                              break
                        case 'string':
                              if (item.indexOf(this.str) > -1) return item
                              break
                        case 'number':
                              if ((item + '').indexOf(this.str) > -1) return item
                              break
                        default:
                              break
                  }
            })
            return this.result
      }
}

/**
 * 过滤符号, 加上\
 * @param {String} value 需要过滤的字符串
 */
export const EscapeRegexpString = (value = '') => String(value).replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
