import { reactive } from "vue";

const storage_key = "gallery-storage";
const storage = reactive(
  localStorage.getItem(storage_key)
    ? JSON.parse(localStorage.getItem(storage_key))
    : {}
);

export function setData(key, data) {
  storage[key] = data;

  localStorage.setItem(storage_key, JSON.stringify(storage));
}

export function pushData(key, data) {
  if (!storage[key]) {
    storage[key] = [];
  }

  storage[key].push(data);

  localStorage.setItem(storage_key, JSON.stringify(storage));
}

export function popData(key, index) {
  storage[key].splice(index, 1);

  localStorage.setItem(storage_key, JSON.stringify(storage));
}

export function getData(key) {
  if (key) {
    if (storage[key]) return storage[key];
    else return null;
  } else return storage;
}
