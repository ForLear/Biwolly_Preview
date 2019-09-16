/* 基本二叉树数据结构 */
/* nested object 变成 array of objects 的过程称为数据扁平化 */

/* 叶子节点数据结构 */
class LEAF {
  constructor(id = '', value = '') {
    this.ids = id ? [id] : []
    this.value = value
    this.children = {}
  }

  /* 用于向该叶子节点添加多个相同的匹配的id */
  share (id) {
    this.ids.push(id)
  }
}

/**
 * 字典树
 * @param {Array} arr 需要生成树的数组, [{}, {}]
 * @param {String} Key 生成树的对象的key值
 */
const CREATETRIE = (arr, Key) => {
  /* 用于储存所有遍历的子节点 */
  const root = new LEAF()
  arr.forEach(item => {
    const val = item[Key]
    console.log(val)
    /* Object.values将对象种所有的value放进一个数组 */
    Object.values(item).forEach(subItem => {
      // 注意这里会把 Number 和 Boolean 类型也字符串化
      const strVal = String(subItem)
      /* const root 为只读, 新定义一个变量指向root的地址 */
      let tplRoot = root
      /* 将字符串拆分放进数组, 效果等同于arrofObj = strVal.split('') */
      const arrofObj = Array.from(strVal)
      // const arrofObj = Array.from(item[Key])
      arrofObj.forEach((strItem, strIndex) => {
        const reachEnd = strIndex === arrofObj.length - 1
        /* 判断是否已存在strItem节点 */
        if (!tplRoot.children[strItem]) {
          /* 不存在则直接生成此节点 */
          tplRoot.children[strItem] = new LEAF(
            /* 判断是否已到最后一个字符 */
            reachEnd ? val : '',
            strItem
          )
          tplRoot = tplRoot.children[strItem]
        } else {
          if (reachEnd) {
            tplRoot.children[strItem].share(strVal)
            console.log('???', tplRoot.children[strItem])
          }
          tplRoot = tplRoot.children[strItem]
        }
      })
    })
  })
  return root
}

export const Leaf = CREATETRIE