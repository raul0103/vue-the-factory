/** Приводит полученные данные по API в необходимый формат */
export function serialize(item) {
  return {
    id: item.id,
    urls: item.urls,
  };
}
