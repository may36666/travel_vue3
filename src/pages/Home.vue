<template>
  <header
    class="bg-no-repeat bg-cover h-[380px] bg-[url(../assets/the-urban-landscape-1698285.png)]"
  >
    <div class="container mx-auto">
      <div
        class="text-white text-center text-[40px] tracking-[3.89px] pt-[4.3%]"
      >
        高雄旅遊資訊
      </div>
      <div class="mt-[11%] flex justify-center">
        <form
          method="post"
          class="w-[45%] border-[3px] border-white rounded-sm relative"
        >
          <select
            class="h-full opacity-75 font-black appearance-none p-3 w-full outline-none bg-amber-50"
            v-model="selectVal"
          >
            <option
              v-for="t in travelZoneSelection"
              :key="t.value"
              :value="t.value"
              :disabled="t.value === undefined"
            >
              {{ t.text }}
            </option>
          </select>
          <div class="z-50 absolute right-3 inset-y-5 pointer-events-none">
            <img src="@/assets/icons_down.png" />
          </div>
        </form>
      </div>
    </div>
  </header>
  <div class="container mx-auto">
    <div class="flex justify-center mt-[4%]">
      <div
        class="w-[80%] h-[100px] bg-white rounded-md shadow pt-2 pl-5 font-black"
      >
        熱門行政區
        <div
          class="mt-[10px] h-[50%] px-5 lg:space-x-[20px] lg:text-xl"
          ref="hotButtonRef"
        >
          <button
            v-for="b in buttonZone"
            type="button"
            :key="b.id"
            :class="b.color"
            class="border-0 rounded-md text-white w-[20%] lg:w-[16%] h-full cursor-pointer"
            :value="b.zone"
            @click="selectVal = b.zone"
          >
            {{ b.zone }}
          </button>
        </div>
      </div>
    </div>
  </div>
  <main class="container mx-auto">
    <div class="text-center text-3xl mt-[50px]">{{ selectVal }}</div>
    <div class="grid grid-cols-3 gap-6 mx-[30px] place-items-center mt-[50px]">
      <template v-for="item in listFilterCard" :key="item._id">
        <RouterLink
          :to="{
            name: '卡片資訊',
            params: {
              id: item._id,
            },
          }"
          class="w-[90%]"
        >
          <MainList :travelData="item" />
        </RouterLink>
      </template>
    </div>
  </main>
</template>

<script setup lang="ts" name="Home">
import { ref, onMounted, computed, reactive } from "vue";
import axios from "axios";
import MainList from "../components/MainList.vue";
import { RouterLink } from "vue-router";
const selectVal = ref();
const travelData = ref([]);
const travelZone = ref([]);

const hotButtonRef = ref();

const buttonZone = reactive([
  { zone: "苓雅區", color: "bg-[#8A82CC]", id: "bz01" },
  { zone: "三民區", color: "bg-[#FFA782]", id: "bz02" },
  { zone: "新興區", color: "bg-[#F5D105]", id: "bz03" },
  { zone: "鹽埕區", color: "bg-[#559AC8]", id: "bz04" },
]);



const list = async () => {
  try {
    const { data } = await axios.get(
      "https://raw.githubusercontent.com/hexschool/KCGTravel/master/datastore_search.json"
    );
    //接收傳來的資料
    travelData.value = data.result.records;
    console.log(travelData.value);
    //做下拉選單資料，用map產生回傳有區域的新array再用set去除重複值並使用unshift將選擇行政區的字串傳到array的第一個
    const mapZone = travelData.value.map((item)=>{return item.Zone});
    const setZone = [...new Set(mapZone)];
    travelZone.value = setZone;
    travelZone.value.unshift('--請選擇行政區--');
}
 catch (error) {
    console.error("Error fetching cards:", error);
  }
};

//計算屬性做下拉選單將資料用map做成物件陣列
const travelZoneSelection = computed(()=>{
   return travelZone.value.map((item,index)=>{
    return{
      text:item,
      value:index === 0 ? undefined : item
    }
   })
})

//回傳給卡片的資料，如selectVal沒有值則直接回傳資料，如有則回傳跟選擇的區域一樣的資料
const listFilterCard = computed(()=>{
  if(selectVal.value){
    return travelData.value.filter((item)=>{
      return item.Zone === selectVal.value;
    })
  }
  return travelData.value
})



onMounted(() => {
  list();
});


</script>
