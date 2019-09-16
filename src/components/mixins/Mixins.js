import { isEmptyObj, arrRemoval, ArrFilter } from '@Fn/fn'

export const Trie = {
  data() {
    return {
      dataArr: JSON.parse(localStorage.getItem('dataArr')),
      arr: [],
    }
  },
  computed: {
    inVal: {
      set (val) {
        this.inVal.val = val
        console.log(val)
      },
      get () {
        return ''
      }
    },
  },
  created() {
    if(!this.dataArr) {
      this.getData()
    } else {
      this.arr = this.dataArr
    }
  },
  methods: {
    arrFil (val) {
      return new ArrFilter(this.dataArr, val, 'phone').filters()
    },
  },
}