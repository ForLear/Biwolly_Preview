<!-- 字典树 -->
<template>
  <div class="trie">
    <el-input v-model.lazy="inputVal.val" @change="search" list="sel"></el-input>
    <span> - {{ inputVal.result }} - </span>
    <br />
    <el-select v-model="val" filterable>
    <!-- <el-select v-model="val"> -->
      <el-option v-for="(item, index) in arr" :label="item.phone" :value="item.phone" :key="index"></el-option>
    </el-select>
  </div>
</template>

<script>
  import { Trie } from '@Mixins/Mixins'
  import { Leaf } from './data'
  export default {
    name: 'tire',

    mixins: [Trie],

    props: {},

    data() {
      return {
        val: '',
        inputVal: {
          val: '',
          result: '',
        },
      }
    },

    computed: {
    },

    mounted() {
    },

    methods: {
      /* 模拟数据请求源:  */
      getData() {
        fetch("https://randomuser.me/api/?results=5000&inc=gender,email,phone,cell,nat").then(response => {
          return response.json()
        }).then(res => {
          localStorage.setItem('dataArr', JSON.stringify(res.results))
          this.arr = this.dataArr = res.results
        })
      },

      search(val) {
        this.arr = this.arrFil(val)
        this.inputVal.result = val
      },
    },
  }
</script>

<style>
  .trie {
    margin-top: 42px;
    text-align: center;
  }
</style>