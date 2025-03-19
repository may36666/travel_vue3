<template>
  <main class="container mx-auto">
    <div class="text-center text-3xl" id="mainTitleName"></div>
    <div class="grid grid-cols-3 gap-6 mx-[30px] place-items-center mt-[50px]" >
      <div class="h-[400px]  shadow-xl w-[90%] text-[6px] md:text-base" v-for="item in travelData" :key="item.Id">
        <img :src="item.Picture1" class="h-1/2 w-full" />
        <ul class="p-3 space-y-5 h-1/2 content-center">
          <li class="flex flex-row relative  space-x-2">
            <img src="../assets/icons_clock.png" alt="clock" class="absolute top-1" /><span class='pl-[25px]'>{{item.Opentime}}</span>
          </li>
          <li class="flex flex-row space-x-2">
            <img src="../assets/icons_pin.png" alt="pin" /><span>{{item.Add}}</span>
          </li>
          <li class="grid grid-cols-4 pl-1">
            <div class="col-span-2 flex flex-row space-x-2">
              <img src="../assets/icons_phone.png" /><span>{{item.Tel}}</span>
            </div>
            <div class="col-span-2 flex flex-row space-x-2">
              <img src="../assets/icons_tag.png" alt="" /><span>{{item.Ticketinfo}}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts" name="HotList">
import { ref, onMounted } from 'vue';
import axios from 'axios';

interface TravelItem {
  Id: string;
  Picture1: string;
  Opentime: string;
  Add: string;
  Tel: string;
  Ticketinfo: string;
}

const travelData = ref<TravelItem[]>([]);

const list = async () => {
    try {
      const {data} = await axios.get("https://raw.githubusercontent.com/hexschool/KCGTravel/master/datastore_search.json");
      travelData.value = data.result.records;
      console.log("travelData:", travelData.value);
    } catch (error) {
      console.error("Error fetching cards:", error);
    }
};

onMounted(() => {
  list();
});
</script>
