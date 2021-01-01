import { ref, onMounted } from "vue";

export const mq = ({ refEl, bps }: { refEl: any; bps: number[] }) => {
  const abps = ref<number[]>([]);
  // @ts-expect-error
  const ro = new window.ResizeObserver((entries) => {
    for (const entry of entries) {
      const cr = entry.contentRect;
      abps.value = bps.filter((bp) => bp <= cr.width);

      entry.target.dataset.mq = abps.value.join(",");
    }
  });

  onMounted(() => {
    ro.observe(refEl.value);
  });

  return abps;
};
