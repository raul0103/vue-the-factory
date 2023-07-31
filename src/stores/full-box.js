import { ref } from "vue";
import { defineStore } from "pinia";

export const useFullBoxStore = defineStore("full-box", () => {
  let status = ref(false);

  function getStatus() {
    return status.value;
  }

  function open() {
    status.value = true;
  }

  function close() {
    status.value = false;
  }

  return { getStatus, open, close };
});
