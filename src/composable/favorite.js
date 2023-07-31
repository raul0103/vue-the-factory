/**
 * favorites- необходимо полулчать при каждом обращении
 * Поэтому он находится в каждой функции
 */

import { pushData, getData, popData } from "@/services/storage.js";

export function useFavorite() {
  const storage_key = "favorites";

  function setFavorite(data) {
    const favorites = getData(storage_key);

    const find_index = favorites
      ? favorites.findIndex((item) => item.id == data.id)
      : -1;

    if (find_index !== -1) {
      popData(storage_key, find_index);
    } else {
      pushData(storage_key, data);
    }
  }

  function checkFavoriteById(id) {
    const favorites = getData(storage_key);

    const favorite_ids = favorites?.map((item) => item.id);

    if (favorite_ids.indexOf(id) > -1) {
      return true;
    } else {
      return false;
    }
  }

  function getFavorites() {
    const favorites = getData(storage_key);

    return favorites;
  }

  return {
    getFavorites,
    setFavorite,
    checkFavoriteById,
  };
}
