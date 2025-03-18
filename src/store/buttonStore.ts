
import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";

export const useButtonStore = defineStore("cardStore", () => {
  const cards = ref([]);

  const fetchCards = async () => {
    try {
      const {data} = await axios.get("https://raw.githubusercontent.com/hexschool/KCGTravel/master/datastore_search.json");
      console.log(data);
      
    } catch (error) {
      console.error("Error fetching cards:", error);
    }
  };

  return { cards, fetchCards };
});
