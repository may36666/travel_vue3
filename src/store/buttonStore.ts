import { defineStore } from "pinia";
import axios from "axios";
import { computed, ref } from "vue";

export  const useButtonStore = defineStore('button',()=>{
  const selectId = ref<string>();
  const detailData = ref([]);

  const detailList = async () => {
    try {
      const {data} = await axios.get(
        "https://raw.githubusercontent.com/hexschool/KCGTravel/master/datastore_search.json"
      );
      detailData.value = data.result.records;
    } catch (error) {
      console.error("Error fetching cards:", error);
    }
  }


  const detailDataList = computed(()=>{
    if(selectId.value){
      return detailData.value.filter((item)=>{
        return item._id === selectId.value;
      })
    }
    return [];
  })


  return {selectId,detailList,detailDataList}
})
