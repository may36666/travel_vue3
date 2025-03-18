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
            <select class="h-full opacity-75 font-black appearance-none p-3 w-full outline-none bg-amber-50">
              <option v-for = "t in travelZone" :key="t.id" :value="t.zone">{{t.zone}}</option>
            </select>
            <div class="z-50 absolute right-3 inset-y-5 pointer-events-none">
              <img src="../assets/icons_down.png" />
            </div>
          </form>
        </div>
      </div>
    </header>
</template>

<script setup lang="ts" name = "changeArea">
import { reactive } from 'vue';


const travelZone = reactive([{id:'z00',zone:'--請選擇行政區--'},
  {id:'z01',zone:'前金區'},{id:'z02',zone:'新興區'},{id:'z03',zone:'鹽埕區'},{id:'z04',zone:'左營區'},{id:'z05',zone:'楠梓區'},{id:'z06',zone:'鼓山區'},{id:'z07',zone:'旗津區'},{id:'z08',zone:'苓雅區'},{id:'z09',zone:'三民區'},{id:'z10',zone:'前鎮區'},{id:'z11',zone:'小港區'},{id:'z12',zone:'鳳山區'},{id:'z13',zone:'鳥松區'},{id:'z14',zone:'大社區'},{id:'z15',zone:'仁武區'},{id:'z16',zone:'大樹區'},{id:'z17',zone:'岡山區'},{id:'z18',zone:'燕巢區'},{id:'z19',zone:'梓官區'},{id:'z20',zone:'永安區'},{id:'z21',zone:'彌陀區'},{id:'z22',zone:'橋頭區'},{id:'z23',zone:'田寮區'},{id:'z24',zone:'茄萣區'},{id:'z25',zone:'阿蓮區'},{id:'z26',zone:'路竹區'},{id:'z27',zone:'湖內區'},{id:'z28',zone:'那瑪夏區'},{id:'z29',zone:'桃源區'},{id:'z30',zone:'茂林區'},{id:'z31',zone:'六龜區'},{id:'z32',zone:'美濃區'},{id:'z33',zone:'旗山區'},{id:'z34',zone:'甲仙區'},{id:'z35',zone:'內門區'},{id:'z36',zone:'杉林區'},{id:'z37',zone:'林園區'},{id:'z38',zone:'大寮區'}]);




</script>
