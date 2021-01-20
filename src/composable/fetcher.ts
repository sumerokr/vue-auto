import { ref, computed } from "vue";

export const useFetcher = (fn: (...args: any[]) => Promise<any>) => {
  type states = "idle" | "loading" | "success" | "failure";
  const state = ref<states>("idle");
  const data = ref(null);
  const error = ref(null);
  const isLoading = computed(() => state.value === "loading");

  return {
    state,
    data,
    error,
    isLoading,
    send: async (...args: any) => {
      state.value = "loading";
      try {
        data.value = await fn(...args);
        error.value = null;
        state.value = "success";
      } catch (err) {
        error.value = err;
        state.value = "failure";
      }
    },
  };
};
