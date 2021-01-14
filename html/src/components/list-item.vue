<template>
  <div class="list-item" :class="imgThreeClss">
    <div class="item-tit-txt">{{tit}}</div>
    <div class="item-img">
      <div v-for="item in imgUrls" :key="item">
        <img :src="item">
      </div>
    </div>
    <div class="item-mate">{{tag}}</div>
  </div>
</template>
<script>
/*
文章列表
文章标题，简介，图片和标签
图片展示 两种情况，一张图和 三张图片，
有三张图片的时候，不展示简介

**/
export default {
  name:'ListItem',
  props:{
     tit:{
       type:String,
       default:''
     },
     imgUrls:{
       type:[String,Array],
       default:''
     },
     tag:{
       type:String,
       default:''
     },
     isThree:{
       type:Boolean,
       default:false
     }
  },
  computed:{
    imgThreeClss(){
      return this.isThree?'img-three':''
    }
  }
}
</script>

<style scoped lang="less">
 .list-item{
    background-color: red;
 }
</style>