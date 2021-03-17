<template>
<div class="ss" @click="tests">vue{{test}}</div>
</template>
<script lang="ts">
import {defineComponent} from 'vue';
import {testName} from "../../assets/js/common/index";
export default defineComponent({
    data() {
      return {
        test:'typescript'
      }
    },
    methods: {
      tests(){
        alert('事实上');
      }
    },
    mounted(){
      testName('sss');
    }
})
</script>
<style lang='less'>
.ss{
  background: #fff;
}
</style>
