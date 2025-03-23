<template>
  <div
    class="h-[400px] shadow-xl w-[90%] text-[6px] md:text-base"
  >

    <img :src="travelData.Picture1" class="h-1/2 w-full" />
    <ul class="p-3 space-y-5 h-1/2 content-center">
      <li class="flex flex-row relative space-x-2">
        <img src="../assets/icons_clock.png" alt="clock" class="absolute top-1" /><span
          class="pl-[25px]"
          >{{ travelData.Opentime }}</span
        >
      </li>
      <li class="flex flex-row space-x-2">
        <img src="../assets/icons_pin.png" alt="pin" /><span>{{ travelData.Add }}</span>
      </li>
      <li class="grid grid-cols-4 pl-1">
        <div class="col-span-2 flex flex-row space-x-2">
          <img src="../assets/icons_phone.png" /><span>{{ travelData.Tel }}</span>
        </div>
        <div class="col-span-2 flex flex-row space-x-2">
          <img src="../assets/icons_tag.png" alt="tag'''" /><span>{{ travelData.Ticketinfo }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts" name="HotList">
import { defineProps } from "vue";
 

defineProps(["travelData"]);
</script>
