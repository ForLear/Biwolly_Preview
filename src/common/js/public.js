class Fn {
  constructor(two) {
    this.two = two
  }

  static one() {
    console.log('第一个静态方法')
  }

  static two(two) {
    console.log('two :', two, 'this.two :', this.two)
  }
}

export default Fn