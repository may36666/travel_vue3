<template>
  <header
    class="bg-no-repeat bg-cover h-[380px] bg-[url(../assets/the-urban-landscape-1698285.png)]"
  >
    <div class="container mx-auto">
      <div class="text-white text-center text-[40px] tracking-[3.89px] pt-[4.3%]">高雄旅遊資訊</div>
      <div class="mt-[11%] flex justify-center">
        <form method="post" class="w-[45%] border-[3px] border-white rounded-sm relative">
          <select
            class="h-full opacity-75 font-black appearance-none p-3 w-full outline-none bg-amber-50"
            ref="changeSelectRef"
          >
            <option v-for="t in travelZone" :key="t.id" :value="t">{{ t }}</option>
          </select>
          <div class="z-50 absolute right-3 inset-y-5 pointer-events-none">
            <img src="./assets/icons_down.png" />
          </div>
        </form>
      </div>
    </div>
  </header>
  <div class="container mx-auto">
    <div class="flex justify-center mt-[4%]">
      <div class="w-[80%] h-[100px] bg-white rounded-md shadow pt-2 pl-5 font-black">
        {{ hotButtonTitle }}
        <div class="mt-[10px] h-[50%] px-5 lg:space-x-[20px] lg:text-xl">
          <button
            v-for="b in buttonZone"
            type="button"
            :key="b.id"
            :class="b.color"
            class="border-0 rounded-md text-white w-[20%] lg:w-[16%] h-full cursor-pointer"
            :value="b.zone"
          >
            {{ b.zone }}
          </button>
        </div>
      </div>
    </div>
  </div>
  <main class="container mx-auto">
    <div class="text-center text-3xl" ></div>
    <MainList :travelData="travelData"/>
  </main>

  <FooterInfo />
</template>

<script setup lang="ts" name="App">
import { ref, reactive, onMounted, computed } from "vue";
import axios from "axios";
import FooterInfo from "./components/FooterInfo.vue";
import { useButtonStore } from "@/store/buttonStore";
import MainList from "./components/MainList.vue";


const selectVal = ref("");
const changeSelectRef = ref();

const travelData = ref([]);
const travelZone = reactive([
]);
async function changeTravelList(){
  try {
    const { data } = await axios.get(
      "https://raw.githubusercontent.com/hexschool/KCGTravel/master/datastore_search.json"
    );
    let zones=[];
    zones.push('--請選擇行政區--');
    data.result.records.forEach((item) => {
        zones.push(item.Zone);
    });
    const zoneToSet = new Set(zones);
    Object.assign(travelZone,[...zoneToSet]);
    console.log(travelZone);
  } catch (error) {
    console.error("Error fetching cards:", error);
  }

}

const hotButtonTitle = ref("熱門行政區");

const buttonZone = reactive([
  { zone: "苓雅區", color: "bg-[#8A82CC]", id: "bz01" },
  { zone: "三民區", color: "bg-[#FFA782]", id: "bz02" },
  { zone: "新興區", color: "bg-[#F5D105]", id: "bz03" },
  { zone: "鹽埕區", color: "bg-[#559AC8]", id: "bz04" },
]);

let select = computed({
  get(){
    return selectVal.value;
  },
  set(value: string){
    selectVal.value = value;
  }
})


const list = async () => {
  try {
    const { data } = await axios.get(
      "https://raw.githubusercontent.com/hexschool/KCGTravel/master/datastore_search.json"
    );
    travelData.value = data.result.records;

  } catch (error) {
    console.error("Error fetching cards:", error);
  }
};

onMounted(() => {
  list();
  changeTravelList();
});
</script>
