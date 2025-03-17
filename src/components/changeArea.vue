<template>
<header
      class="bg-no-repeat bg-cover h-[380px] bg-[url(../assets/the-urban-landscape-1698285.png)]"
    >
      <div class="container mx-auto">
        <div
          class=" text-white text-center text-[40px] tracking-[3.89px] pt-[4.3%]"
        >
          高雄旅遊資訊
        </div>
        <div class="mt-[11%] flex justify-center">
          <form
            action=""
            method="post"
            class="w-[45%] border-[3px] border-white rounded-sm relative"
          >
            <select
              id="areaId"
              class="h-full opacity-75 font-black appearance-none p-3 w-full outline-none bg-amber-50"
            >
              <option value="">--請選擇行政區--</option>
            </select>
            <div class="z-50 absolute right-3 inset-y-5 pointer-events-none">
              <img src="./assets/icons_down.png" alt="" class="" />
            </div>
          </form>
        </div>
      </div>
    </header>
</template>

<script setup lang="ts" name = "changeArea">

</script>