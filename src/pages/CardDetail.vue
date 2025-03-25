<template>
  <div class="container mx-auto">
  <div
    class="h-[600px] shadow-xl w-[100%] text-[6px] md:text-base mt-[50px] mb-[200px]"
  >
    <img class="h-1/2 w-full" />
    <ul class="p-3 space-y-5 h-1/2 content-center">
      <li class="flex flex-row relative space-x-2">
        <img src="../assets/icons_clock.png" alt="clock" class="absolute top-1" /><span
          class="pl-[25px]"
          ></span
        >
      </li>
      <li class="flex flex-row space-x-2">
        <img src="../assets/icons_pin.png" alt="pin" /><span></span>
      </li>
      <li class="grid grid-cols-4 pl-1">
        <div class="col-span-2 flex flex-row space-x-2">
          <img src="../assets/icons_phone.png" /><span></span>
        </div>
        <div class="col-span-2 flex flex-row space-x-2">
          <img src="../assets/icons_tag.png" alt="tag" /><span></span>
        </div>
      </li>
    </ul>
  </div>
</div>
</template>

<script setup lang="ts" name="CardDetail">
import { useRoute } from 'vue-router';

const route = useRoute();
console.log(route);


</script>
