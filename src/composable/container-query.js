import { ref, onMounted } from "vue";

const root = ref(null);

// @ts-expect-error
const ro = new window.ResizeObserver((entries) => {
  for (const entry of entries) {
    const cr = entry.contentRect;
    const bps = [360, 420];
    const relevantBps = bps.filter((bp) => bp <= cr.width);
    entry.target.dataset.mq = relevantBps.join(",");
  }
});

onMounted(() => {
  console.log(root.value);
  ro.observe(root.value);
});
