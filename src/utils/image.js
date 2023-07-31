/** Приводит полученные данные по API в необходимый формат */
export function serialize(item) {
  return {
    id: item.id,
    user: item.user,
    urls: item.urls,
    links: item.links,
  };
}
