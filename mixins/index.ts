import { useDark, useToggle } from "@vueuse/core";
import { computed } from "vue";
export const isDark = useDark();
export { useToggle };

export const modes = computed(() => {
  return [
    { key: 0, value: "auto", label: "general.auto" },
    { key: 1, value: "true", label: "general.dark" },
    { key: 2, value: "false", label: "general.light" },
  ];
});

export const autoStyle = computed(() => {
  return isDark.value
    ? "background-color:bg-dark;color:text-light;"
    : "background-color:bg-ligh;color:text-dark;";
});

export const autoClass = computed(() => {
  return isDark.value ? "bg-dark text-light" : "bg-light text-dark";
});

export const autoColor = computed(() => {
  return isDark.value ? "black" : "light";
});

export const modesKeys = computed(() => {
  return modes.value.map((mode) => mode.value);
});

export const modesLabelOptions = computed(() => {
  return modes.value.map((mode) => ({
    label: mode.label,
    value: mode.value,
  }));
});

export default {
  data() {
    return {
      modes: modes,
    };
  },
  computed: {
    c_modes() {
      return modes.value;
    },
  },
};
