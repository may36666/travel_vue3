<template>
  <div class="container mx-auto">
    <div class="bg-blue-500 w-full h-250 mt-[50px]">
      <h1 class="text-[50px] text-center"></h1>
      <div class="border-red-500 border-2 w-full h-[300px] text-2xl">

      </div>
      <div class="grid ">

      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="CardDetail">
import { useRoute } from 'vue-router';

const route = useRoute();
console.log(route);


</script>
