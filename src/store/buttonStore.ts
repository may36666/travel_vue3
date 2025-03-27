import { defineStore } from "pinia";
import { computed, ref } from "vue";

export  const useButtonStore = defineStore('button',()=>{
  const selectId = ref<string>();
  const detailData = ref([]);



  const detailDataList = computed(()=>{
    if(selectId.value){
      return detailData.value.filter((item)=>{
        return item._id === selectId.value;
      })
    }
    return [];
  })


  return {selectId,detailDataList,detailData}
})
