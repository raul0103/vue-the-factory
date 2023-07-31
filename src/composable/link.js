import { computed } from "vue";
import { useRouter, useRoute } from "vue-router";

export function useLink(props) {
  const router = useRouter();
  const route = useRoute();

  const link = () => {
    router.push(props.to);
  };

  const isActive = computed(() => {
    return route.path === props.to;
  });

  const hideActive = () => {
    if (props.hide_active && route.path === props.to) return true;
  };

  return {
    link,
    isActive,
    hideActive,
  };
}
