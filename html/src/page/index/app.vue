<template>
<div>
  <header class="header">
    <nav>
    <a href="/" class="logo">百网思</a>
    <ul class="nav-ul">
      <li class="tab active">前端</li>
      <li class="tab">javascript</li>
      <li class="tab">css</li>
      <li class="tab">vue</li>
    </ul>
    <div class="search">
      <div class="from">
        <input type="text"/>
        <button>搜索</button>
      </div>
    </div>
   <div class="no-login">
      <span class="sign-in">登录</span>
      <span class="sing-up">注册</span>
   </div>
   <!-- <div class="login-infro"></div> -->
   </nav>
  </header>
  <div class="main-container">
    <div class="main">
       <div class="bws-card">
         <h1 class="bws-title">
           <a href="/">有哪些男生有女朋友之后才知道的事情？</a>
         </h1>
         <div class="bws-content ">
           <div class="bws-cover">
              <div class="bws-cover-inner">
                <img src="https://pic4.zhimg.com/50/v2-2c2fec6a6eb428206bfc811ab6fd92ce_400x224.jpg">
              </div>
           </div>
           <div class="bws-inner is-short">
             <span>会隐身的六娃哦： 有 有好多吧。。 1.她说我要去洗澡澡了 之后两个小时不理我 我一直以为是故意不理我 直到我参与了全过程（付费情节 十亿欧 先打钱） 才明白洗澡 等于 卸妆，敷面膜，拍各种瓶子奇奇怪怪的东西…</span>
             <em>阅读全文</em>
           </div>
           <div class="bws-actions">
             <button>浏览<span>100</span></button>
             <button>评论<span>400</span></button>
             <button>喜欢<span>1000</span></button>
             <button>2021-12-12</button>
           </div>
         </div>
       </div>
      <!-- 展开 -->
       <div class="bws-card">
         <h1 class="bws-title">
           <a href="/">有哪些男生有女朋友之后才知道的事情？</a>
         </h1>
         <!-- is-short-->
         <div class="bws-content" :class="is_short">
           <!-- <div class="bws-cover">
              <div class="bws-cover-inner">
                <img src="https://pic4.zhimg.com/50/v2-2c2fec6a6eb428206bfc811ab6fd92ce_400x224.jpg">
              </div>
           </div> -->
           <div class="bws-inner" ref="bwscontent">
             <span>
               {{is_short?data.shot_txt:data.long_txt}}
<!-- 
未必适合所有人的口味（手机党请珍惜流量），但是确实是本人从小学三年级偷偷去网吧打cs1.3开始，玩过的最让人热血澎湃、印象深刻的游戏，未必是最好的，但是绝对是值得去玩一玩的。介绍的并不专业，也没有专门去分类，随想而发，也算是对这些年自己玩过的好游戏做一个总结吧，排名不分先后。趁经理不在，慢慢更新，欢迎补充=====================================================================1.《上古卷轴5：天际》    当真是Bethesda五年磨一剑的《上古卷轴》力作，《上古卷轴5》给玩家提供了超过120个不重复的地下迷宫，以及9个规模宏大的城市供玩家探索。你可以在这个奇异自由的世界踏上史诗性的征程，使用自己心仪的武器装备自己擅长的技能，去和巨人，吸血鬼，猛犸，飞龙战斗。唯一不足的可能是战斗中的打击感略差，但是场景中所有的物品都是可以改变和破坏的，包括河水里面的食人鱼，空中飞舞的蝴蝶、岸边晒太阳的大螃蟹、路边木桶中的苹果，还有偶然从你身边路过的当地土豪口袋中白花花的银子。开始从一个即将被砍头的犯人，到傲视人间的君王的人生体验。这是一款值得你用心去玩的游戏，老滚的世界里充斥着不定性（当然那些随机触发的任务确实是开发提前做好的，但是能不能触发确实还是看你的运气），其中包括了荒郊野外中著名的无头骑士（有幸遇到一次）。用心感受这款游戏的感情的衔接，至今不能忘记战友团倒下的老人，和雪漫城的第一个跟班莱迪亚，她无论何时，都会冲在战斗的最前线保护你，即便她的战斗能力并不出众，却是永远忠心，跟随你去老滚的每一个角落。（楼主最后果断娶了她）总之，不论是画面还是剧情，都值得一玩，尤其是爱好者制作的MOD，你可以改变游戏中的人物角色，不论是美少女，异形，制服，大波妹，大波妹，还是大波妹。没有你做不到，只有你想不到，附上一张蜘蛛侠MOD，乳摇什么的自己去感受吧。。。（请合理使用MOD）2.《使命召唤》现代战争、黑色行动空前绝后，FPS类游戏的精典之作之一，作为FPS游戏，COD给答主带来的不仅仅是射击类的战斗感，COD的成功一大半归功与它的剧情，每部剧情都很棒，不落俗套，让你不得不发自内心的佩服那些制作，所以说国外制作收入比国内高是因为真的在做游戏在做事业（虽然听说制作组跟公司闹矛盾了，额。。。反正有能力去哪里做都一样），国内的话那叫混口饭吃，尤其是黑色行动，剧情紧张刺激，衔接的天衣无缝，前面还玩的云里雾里，到了最后几章，突然全串联了，可以说剧情倒序排版真是碉堡了，画面也是FPS类游戏的上层。战场气势恢宏，霸气十足，如临现场，紧张刺激，是不可多得的佳作。3.《骑马与砍杀》       自古以来，男人都是好斗的，古人追求神兵与马骏马，现人追求名枪与跑车，但是道理都是不变的。《骑砍》这款游戏首先配置要求不高，其次游戏性特别强，相当耐玩，能耐玩的游戏答主认为都是好上之好的游戏。首先是他的战斗模式，战团百人对百人战斗然后主角操作指挥者，一边指挥一边战斗，相当有意思，攻城拔寨，要么成为君王一统江湖，要么成为功臣富豪，（答主自认是那种统一天下的人，当然也有被俘虏妻离子散，众叛亲离的时候）。总之这是款相当好玩而且耐玩的游戏，低配置玩家的福音，让你在冷兵器时代感受千人之中取上将首级的快感（不过团战的时候，你会常常看到人群之中有一个人身中数剑，额头上还插着一把板斧的人在人群中厮杀的不合理性，请不要在意这些细节）。同样，买了59大洋正版授权码之后还能和互联网上面的高手过招，你会看到如何在游戏中打出三国或者水浒中那样的怒战上百回合的大战。目前《骑砍》的版本有战团、光明与黑暗、火与剑，另外还有三国的版本（还有一个三国无双和三国水浒乱舞的版本，貌似还有一个八路军抗日的版本，没玩过），热血男儿务必下载。 -->
              </span>
              <em @click="showContent" v-if="is_short">阅读全文</em>
           </div>
           <!--is-fixed -->
           <div class="bws-actions" :class="is_fixed">
             <button>浏览<span>100</span></button>
             <button>评论<span>400</span></button>
             <button>喜欢<span>1000</span></button>
             <button>2021-12-12</button>
             <button class="click-up-button" @click="contentUp" v-if="!is_short">收起</button>
           </div>
         </div>
       </div>
       <!-- 纯文字--> 
       <div class="bws-card">
         <h1 class="bws-title">
           <a href="/">人可以极简主义到什么程度？</a>
         </h1>
         <div class="bws-content">
           <div class="bws-inner is-short">
             <span>世界第一炒酸奶： 研究院一位年轻英俊的大佬，性别男，公认的百年一遇的奇葩（褒义）: 不吃辣 不吃甜食 不吃重油重盐 不吃一切零食 不喝酒 不喝咖啡 不喝奶…</span>
             <em>阅读全文</em>
           </div>
           <div class="bws-actions">
             <button>浏览<span>100</span></button>
             <button>评论<span>400</span></button>
             <button>喜欢<span>1000</span></button>
             <button>2021-12-12</button>
           </div>
         </div>
       </div>
    </div>
    <div class="aside"><footer><!--备案编号--></footer></div>
  </div>
  <div class="side-tool"></div>
</div>
</template>
<script lang="ts">
import {defineComponent,ref,reactive} from 'vue';
import {testName} from "../../assets/js/common/index";
export default defineComponent({
    setup(props,con){
       const is_fixed:any = ref(''); 
       let is_short=ref('is-short');//
       const data =reactive({
         long_txt:'未必适合所有人的口味（手机党请珍惜流量），但是确实是本人从小学三年级偷偷去网吧打cs1.3开始，玩过的最让人热血澎湃、印象深刻的游戏，未必是最好的，但是绝对是值得去玩一玩的。介绍的并不专业，也没有专门去分类，随想而发，也算是对这些年自己玩过的好游戏做一个总结吧，排名不分先后。趁经理不在，慢慢更新，欢迎补充=====================================================================1.《上古卷轴5：天际》    当真是Bethesda五年磨一剑的《上古卷轴》力作，《上古卷轴5》给玩家提供了超过120个不重复的地下迷宫，以及9个规模宏大的城市供玩家探索。你可以在这个奇异自由的世界踏上史诗性的征程，使用自己心仪的武器装备自己擅长的技能，去和巨人，吸血鬼，猛犸，飞龙战斗。唯一不足的可能是战斗中的打击感略差，但是场景中所有的物品都是可以改变和破坏的，包括河水里面的食人鱼，空中飞舞的蝴蝶、岸边晒太阳的大螃蟹、路边木桶中的苹果，还有偶然从你身边路过的当地土豪口袋中白花花的银子。开始从一个即将被砍头的犯人，到傲视人间的君王的人生体验。这是一款值得你用心去玩的游戏，老滚的世界里充斥着不定性晒太阳的大螃蟹、路边木桶中的苹果，还有偶然从你身边路过的当地土豪口袋中白花花的银子。开始从一个即将被砍头的犯人，到傲视人间的君王的人生体验。这是一款值得你用心去玩的游戏，老滚的世界里充斥着不定性（当然那些随机触发的任务确实是开发提前做好的，但是能不能触发确实还是看你的运气），其中包括了荒郊野外中著名的无头骑士（有幸遇到一次）。用心感受这款游戏的感情的衔接，至今不能忘记战友团倒下的老人，和雪漫城的第一个跟班莱迪亚，她无论何时，都会冲在战斗的最前线保护你，即便她的战斗能力并不出',
         shot_txt:'未必适合所有人的口味（手机党请珍惜流量），但是确实是本人从小学三年级偷偷去网吧打cs1.3开始，玩过的最让人热血澎湃、印象深刻的游戏，未必是最好的，但是绝对是值得去玩一玩的。介绍的并不专业，也没有专门去分类，随想而发...'
       });
      return {
         is_fixed,
         data,
         is_short
      }
    },
    methods: {
      showContent(){
        this.is_short ='';
        // this.$forceUpdate();
      },
      contentUp(){
        this.is_short ='is-short';
        this.is_fixed='';
      },
      containerScroll(){
        // if(this.is_short){
        //   return ;
        // }
        let height:any=this.$refs.bwscontent.offsetHeight;
        // 当前相对位置
        let top = this.getElementViewTop(this.$refs.bwscontent)+70;
        let viewHeight=document.documentElement.clientHeight;
        // console.log(`${top}-${height}-${viewHeight}`);
        if(top<viewHeight){
          this.is_fixed='';
        }else{
          this.is_fixed='is-fixed';
        }
      },
      /*
        获取相对位置
      */
      getElementViewTop (element:any):number {
        let actualTop = element.offsetTop;
        let current = element.offsetParent;

  　　　　while (current !== null){
  　　　　　　actualTop += current.offsetTop;
  　　　　　　current = current.offsetParent;
  　　　　}

        let elementScrollTop=window.pageYOffset;
        let eleheight=element.offsetHeight;

// 　　　　 if (document.compatMode == "BackCompat"){
// 　　　　　　var elementScrollTop=document.body.scrollTop;
// 　　　　} else {
// 　　　　　　var elementScrollTop=document.documentElement.scrollTop;
// 　　　　}
        //console.log(`---${actualTop}-${elementScrollTop}---`);
　　　　return actualTop+eleheight-elementScrollTop;
　　}
    },
    mounted(){
      // testName('sss');
      window.addEventListener('scroll',this.containerScroll,true)
    }
})
</script>
<style lang="less">
 @import './index.less';
</style>
