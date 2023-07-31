import { createApi } from "unsplash-js";

const unsplash = createApi({
  accessKey: import.meta.env.VITE_ACCESS_KEY,
});

export async function getRandomImages(params) {
  const default_params = {
    page: 1,
    count: 8,
  };
  params = Object.assign({}, default_params, params);

  return await unsplash.photos
    .getRandom({ ...params, ...default_params })
    .then((response) => {
      return response;
    });
}

export async function getImageById(id) {
  if (!id) {
    console.warning("Не указан id");
    return;
  }

  return await unsplash.photos.get({ photoId: id }).then((response) => {
    return response;
  });
}