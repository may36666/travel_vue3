<template>
  <changeArea :getchangeVal="getchangeVal"/>
  <HotZone />
  <MainList/>
  <FooterInfo />
</template>

<script setup lang="ts" name="App">
 import { ref } from "vue";
 import changeArea from './components/ChangeArea.vue';
 import HotZone from './components/HotZone.vue';
 import FooterInfo from './components/FooterInfo.vue';
 import {useButtonStore} from '@/store/buttonStore';
 import MainList from './components/MainList.vue';

 const selectVal = ref('');

 function getchangeVal(value:string){
  selectVal.value = value;
  console.log(selectVal);
 }

</script>
