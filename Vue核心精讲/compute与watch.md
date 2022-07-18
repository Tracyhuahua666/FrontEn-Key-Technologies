## compute: 用于计算（例如过滤列表）

```
<div class="main-list complete">
    <van-swipe-cell
        :before-close="beforeClose(item.id)"
        class="swipe-cell"
        v-for="item in completeList"
        :key="item.id"
    >
<script>
export default {
  data() {
    return {};
  },
  computed: {
    completeList() {
      let list = [];
      this.allList.forEach((item) => {
        if (item.isComplete) {
          list.push(item);
        }
      });
      return list;
    }
  },
  methods: {},
};

```
## watch 监察对象属性的变化，然后做出回调

watch的应用场景：监控到搜索框文字改变，然后发异步请求加载联想搜索列表
```
<template>
    <div class="searchsuggestion-container">
        <van-cell-group>
            <van-cell v-for="suggestion,index in searchSuggestList" :key="index" icon="search" @click="search(suggestion)">
                <div slot="title" v-html="hightlight(suggestion)"></div>
            </van-cell>
        </van-cell-group>
    </div>
</template>

<script>
    import {
        getSuggestion
    } from '@/api/search';
    import {
        debounce
    } from 'lodash'
    export default {
        name: 'searchSuggestion',
        props: ['searchText'],
        methods: {
            hightlight(suggestion){
                if(suggestion){
                    const reg=new RegExp(this.searchText,'gi');
                return suggestion.replace(reg,`<span style="color:red;">${this.searchText}</span>`)
                }else{
                    return suggestion;
                }
            },
            search(suggestion){
                this.$emit('search',suggestion)
            }
        },
        data() {
            return {
                searchSuggestList: []
            }
        },
        watch: {
            searchText: {
                immediate: true,
                handler: debounce(async function () {
                    const {
                        data
                    } = await getSuggestion(this.searchText);
                    this.searchSuggestList = data.data.options;
                }, 300)
            }
        }
    }
</script>

<style scoped lang="less">

</style>
```