<template>
  <div class="bg-blue-600">
    <div class="container mx-auto mt-[100px] text-center space-y-4">
      <div class="pt-4 text-white">
        {{ footTitle }}
      </div>
      <div class="pb-4 text-yellow-400">
        {{ infoSource }}
      </div>
    </div>

  </div>
</template>

<script lang="ts" setup name="FooterInfo">
import { ref } from "vue";

let footTitle = ref('高雄旅遊網');
let infoSource = ref('資料來源:高雄市政府');


</script>
