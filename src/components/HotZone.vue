<template>
  <div class="container mx-auto">
    <div class="flex justify-center mt-[4%]">
          <div
            class="w-[80%] h-[100px] bg-white rounded-md shadow pt-2 pl-5 font-black"
          >{{ hotButtonTitle }}
            <div
              class="mt-[10px] h-[50%] px-5 lg:space-x-[20px] lg:text-xl"
            >
            <button v-for="b in buttonZone" type="button" :key="b.id" :class="b.color" class="border-0 rounded-md text-white w-[20%] lg:w-[16%] h-full cursor-pointer" :value="b.zone">{{ b.zone }}</button>
          </div>
         </div>
    </div>
  </div>

  </template>

  <script setup lang="ts" name = "hotZone">
import { reactive, ref } from 'vue';

  const hotButtonTitle = ref('熱門行政區');

  const buttonZone =reactive([
    {zone:'苓雅區',
    color:'bg-[#8A82CC]'
    ,id:'bz01'},
    {zone:'三民區',
    color:'bg-[#FFA782]'
    ,id:'bz02'},
    {zone:'新興區',
    color:'bg-[#F5D105]'
    ,id:'bz03'},
    {zone:'鹽埕區',
     color:'bg-[#559AC8]'
     ,id:'bz04'}
    ]);


  </script>
