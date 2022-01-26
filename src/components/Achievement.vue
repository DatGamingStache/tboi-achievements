<template>
  <div
    v-if="object.description"
    :class="object.achieved === 1 ? 'bg-yellow300' : 'bg-gray text-white'"
    class="achievementContainer"
  >
    <!--    <div class="col-span-1 row-span-2">Image</div>-->
    <div class="col-span-4 row-span-1 font-bold">{{ object.name }}</div>
    <div class="col-span-4 row-span-1">{{ object.description }}</div>
  </div>
  <div
    v-else
    class="achievementContainer"
    :class="object.achieved === 1 ? 'bg-yellow300' : 'bg-gray text-white'"
  >
    <!--    <div class="col-span-1 row-span-2">Image</div>-->
    <div class="col-span-4 row-span-2 font-bold">{{ object.name }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Achievement",
  components: {},
  props: {
    object: {
      type: Object,
    },
  },
  setup() {

    return {};
  },
});
</script>

<style scoped lang="postcss">
.achievementContainer {
  @apply grid grid-cols-6 grid-rows-2 shadow-sm p-2 mx-4 my-2 flex items-center text-left  text-sm;
}
</style>
