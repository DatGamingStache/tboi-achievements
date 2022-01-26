<template>
  <div>
    <div class="grid grid-cols-6 bg-yellow300 text-2xl">
      <div class="col-span-2 text-left ml-2" @click="$router.back">Back</div>
      <div class="col-span-4 text-left">Support Creator</div>
    </div>
    <div class="flex items-center justify-evenly m-4">
      <img src="../../public/datstache.jpeg" class="col-span-2" />
      <div>
        <div class="text-xl">Created by:</div>
        <div class="col-span-2 text-2xl">DatGamingStache</div>
      </div>
    </div>
    <div class="flex justify-evenly m-4">
      <div>
        If you like this creation feel free to support me by checking out my
        twitch!
      </div>
    </div>

    <div class="flex gap-2 flex-col m-4">
      <a
        class="text-white bg-purple300 p-2 rounded-md"
        href="https://www.twitch.tv/datgamingstache"
        target="_blank"
        >DatGamingStache Twitch</a
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Support",
  components: {},
  setup() {
    return {};
  },
});
</script>

<style scoped lang="postcss"></style>
