<template>
  <div>列表页面<br>
  <list-item v-for="item in list" :key="item" 
  :tit="item.tit"
  :tag="item.tag"
  :imgUrls="item.imgUrls"
  :isThree="item.isThree"
  />
  <span @click="tt">test</span>
  </div>
</template>
<script>
import ListItem from '@/components/list-item';
export default {
  components:{
    ListItem
  },
  data() {
    return {
       list:[{
         tit:'标题1',
         tag:'2012012965',
         imgUrls:['http://images.infzm.com/medias/cms/medias/image/20/11/13/LzrUqav4zAMiblx31utgoH85HwtMRqVwpHA1ObJA.jpeg@660x440','http://images.infzm.com/medias/cms/medias/image/20/12/17/uBv5DUkquLfMo19cPfg4YBRoFWrOq7Kw1PLOlNhD.jpeg@660x440','http://images.infzm.com/medias/cms/medias/image/20/12/22/6W9roO2sE93yVZMIwKbW1zNP5PHSzAWTkPjsX3eK.jpeg@660x440'],
         isThree:true 
       },
       {
         tit:'郑执：每个持续写作的人，一定有他非写不可的理由',
         tag:'20201212',
         imgUrls:['http://images.infzm.com/medias/cms/medias/image/20/11/13/LzrUqav4zAMiblx31utgoH85HwtMRqVwpHA1ObJA.jpeg@660x440'],
         isThree:false 
       }]
    }
  },
  methods: {
    tt(){
      console.log('tt')
    }
  },
}
</script>
<style lang='less'>
/*
  .test{解释说明 注解}
**/
.test{
  background-color: #fff;
}
</style>