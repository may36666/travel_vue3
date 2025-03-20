<template>
  <header
      class="bg-no-repeat bg-cover h-[380px] bg-[url(../assets/the-urban-landscape-1698285.png)]"
    >
      <div class="container mx-auto" >
        <div
          class=" text-white text-center text-[40px] tracking-[3.89px] pt-[4.3%]"
        >
          高雄旅遊資訊
        </div>
        <div class="mt-[11%] flex justify-center" >
          <form
            method="post"
            class="w-[45%] border-[3px] border-white rounded-sm relative"
          >
            <select class="h-full opacity-75 font-black appearance-none p-3 w-full outline-none bg-amber-50" ref="changeSelectRef" @change="getchangeVal(changeSelectRef.val.val)">
              <option v-for = "t in travelZone" :key="t.id" :value="t.zone">{{t.zone}}</option>
            </select>
            <div class="z-50 absolute right-3 inset-y-5 pointer-events-none">
              <img src="../assets/icons_down.png" />

            </div>
          </form>

        </div>
      </div>
    </header>
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

  <MainList/>
  <FooterInfo />
</template>

<script setup lang="ts" name="App">
 import { ref,reactive} from "vue";
 import FooterInfo from './components/FooterInfo.vue';
 import {useButtonStore} from '@/store/buttonStore';
 import MainList from './components/MainList.vue';

 const selectVal = ref('');
 const travelZone = reactive([{id:'z00',zone:'--請選擇行政區--'},
  {id:'z01',zone:'前金區'},{id:'z02',zone:'新興區'},{id:'z03',zone:'鹽埕區'},{id:'z04',zone:'左營區'},{id:'z05',zone:'楠梓區'},{id:'z06',zone:'鼓山區'},{id:'z07',zone:'旗津區'},{id:'z08',zone:'苓雅區'},{id:'z09',zone:'三民區'},{id:'z10',zone:'前鎮區'},{id:'z11',zone:'小港區'},{id:'z12',zone:'鳳山區'},{id:'z13',zone:'鳥松區'},{id:'z14',zone:'大社區'},{id:'z15',zone:'仁武區'},{id:'z16',zone:'大樹區'},{id:'z17',zone:'岡山區'},{id:'z18',zone:'燕巢區'},{id:'z19',zone:'梓官區'},{id:'z20',zone:'永安區'},{id:'z21',zone:'彌陀區'},{id:'z22',zone:'橋頭區'},{id:'z23',zone:'田寮區'},{id:'z24',zone:'茄萣區'},{id:'z25',zone:'阿蓮區'},{id:'z26',zone:'路竹區'},{id:'z27',zone:'湖內區'},{id:'z28',zone:'那瑪夏區'},{id:'z29',zone:'桃源區'},{id:'z30',zone:'茂林區'},{id:'z31',zone:'六龜區'},{id:'z32',zone:'美濃區'},{id:'z33',zone:'旗山區'},{id:'z34',zone:'甲仙區'},{id:'z35',zone:'內門區'},{id:'z36',zone:'杉林區'},{id:'z37',zone:'林園區'},{id:'z38',zone:'大寮區'}]);

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
