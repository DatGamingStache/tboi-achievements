<template>
  <div class="bg-white">
    <div class="bg-yellow300 text-2xl">Configuration Page</div>

    <div class="m-4 flex flex-col gap-4">
      <div>
        <div class="bg-gray text-white flex justify-between p-2">
          Web API Key Link
          <a href="https://steamcommunity.com/dev/apikey" target="_blank"
            >Find out how ></a
          >
        </div>
        <input
          type="search"
          class="searchbar"
          placeholder="Web Api Key"
          v-model="config.webKey"
        />
      </div>

      <div>
        <div class="bg-gray text-white flex justify-between p-2">
          Steam ID Link
          <a href="https://steamcommunity.com/dev/apikey" target="_blank"
            >Find out how ></a
          >
        </div>
        <input
          type="search"
          class="searchbar"
          placeholder="Your Steam Id"
          v-model="config.steamId"
        />
      </div>

      <div>
        <div class="bg-gray text-white flex justify-between p-2">
          <div>Steam App ID Link or pick a game from the list!</div>

          <a href="https://steamcommunity.com/dev/apikey" target="_blank"
            >Find out how ></a
          >
        </div>
        <input
          type="search"
          class="searchbar"
          placeholder="Steam App Id"
          v-model="config.steamAppId"
        />
      </div>

      <div v-if="!config.steamAppId">
        <div>Games List</div>
        <div
          class="shadow-lg border mb-2"
          :key="idx"
          v-for="(item, idx) in [
            'The Binding of Isaac',
            'Apex Legends',
            'Halo Infinite',
            'Rocket League',
          ]"
        >
          {{ item }}
        </div>
      </div>

      <button
        @click="
          commitValuesToStore;
          this.$router.push('panel.html');
        "
        class="bg-purple300 text-white"
        value="submit"
      >
        Save
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "Config",
  components: {},
  setup() {
    const store = useStore();
    const config = ref({
      webKey: "",
      steamId: "",
      steamAppId: "",
    });

    const commitValuesToStore = () => {
      store.commit("setConfig", config.value);
    };
    return { commitValuesToStore, config };
  },
});
</script>

<style scoped lang="postcss">
.searchbar {
  @apply border-2 w-full p-1;
}
</style>
