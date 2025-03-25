import { defineStore } from "pinia";
import axios from "axios";
import { computed, ref } from "vue";

export  const useButtonStore = defineStore('bntton',()=>{
  const selectId = ref();
  const datailData = ref([]);

  const detailList = async () => {
    try {
      const {data} = await axios.get(
        "https://raw.githubusercontent.com/hexschool/KCGTravel/master/datastore_search.json"
      );
      datailData.value = data.result.records;
    } catch (error) {
      console.error("Error fetching cards:", error);
    }
  }


  const datailDataList = computed(()=>{
    if(selectId.value){
      return datailData.value.filter((item)=>{
        return item._id === selectId.value;
      })
    }
  })


  return {selectId,detailList,datailDataList}
})
