<template>
  <div v-if="!configErrorModal">
    <div class="fixed bg-darkslategray w-full" style="background: #212027">
      <div class="grid grid-cols-2 bg-darkslategray text-white items-center">
        <div class="bg-gold text-xl">Achievements</div>
        <div @click="$router.push('support.html')" class="text-xl">
          Support Creator
        </div>
      </div>
      <div
        style="background: #212027"
        class="text-white grid grid-cols-6 gap-4 p-4 items-center"
      >
        <img src="../../public/datstache.jpeg" />
        <div class="w3-light-grey w-full col-span-4">
          <div
            class="w3-container w3-green w3-center"
            :style="{
              width:
                Math.floor(
                  (completeAchieve.length /
                    (incompleteAchieve.length + completeAchieve.length)) *
                    100
                ) + '%',
            }"
          >
            <div
              @click="percentage = !percentage"
              v-if="percentage"
              class="text-black font-bold"
            >
              {{
                Math.floor(
                  (completeAchieve.length /
                    (incompleteAchieve.length + completeAchieve.length)) *
                    100
                ) + "%"
              }}
            </div>
            <div
              v-else
              @click="percentage = !percentage"
              class="text-black font-bold"
            >
              {{ completeAchieve.length }}/{{
                completeAchieve.length + incompleteAchieve.length
              }}
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-evenly m-2 text-white">
        <div
          @click="
            all = true;
            completed = false;
            incomplete = false;
          "
          :class="all ? 'text-yellow300 font-bold' : ''"
        >
          All
        </div>
        |
        <div
          @click="
            all = false;
            completed = true;
            incomplete = false;
          "
          :class="completed ? 'text-yellow300 font-bold' : ''"
        >
          Completed
        </div>
        |
        <div
          @click="
            all = false;
            completed = false;
            incomplete = true;
          "
          :class="incomplete ? 'text-yellow300 font-bold' : ''"
        >
          Incomplete
        </div>
      </div>
      <div class="m-4">
        <input
          v-if="all"
          v-model="searchQuery"
          type="search"
          class="border-2 w-full p-1"
          placeholder="search achievement"
        />
      </div>
    </div>

    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      style="padding-top: 15rem"
    >
      <Achievement
        :key="idx"
        v-for="(item, idx) in all
          ? allAchieve
          : completed
          ? completeAchieve
          : incomplete
          ? incompleteAchieve
          : searchedProducts"
        :object="item"
      />
    </div>
  </div>
  <div v-else class="flex items-center justify-center" style="height: 10vh">
    <div
      class="text-red200 bg-red50 text-2xl m-8 p-3 text-center absolute top-0 bottom-0 flex justify-center items-center"
    >
      <div>
        Please check the configuration settings and make sure the 3 items
        <span class="font-bold">[web key, steam id, steam app id] </span> are
        set properly!
      </div>
    </div>
  </div>
</template>
<script>
import { ref, computed, defineComponent, onBeforeMount, onMounted } from "vue";
import Achievement from "@/components/Achievement.vue";
import _ from "lodash";
import { useStore } from "vuex";
import axios from "axios";
export default defineComponent({
  name: "Panel",
  setup() {
    const store = useStore();
    const all = ref(true);
    const completed = ref(false);
    const incomplete = ref(false);
    const data = ref([]);
    const configErrorModal = ref(false);
    onBeforeMount(() => {
      const WebKey = ref();
      const steamId = ref();
      const steamAppId = ref();

      WebKey.value = store.getters.getConfig.webKey;
      steamId.value = store.getters.getConfig.steamId;
      steamAppId.value = store.getters.getConfig.steamAppId;

      const getAchievements = async () => {
        await axios({
          method: "get",
          url: "https://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v1/",
          params: {
            key: WebKey.value,
            steamid: steamId.value,
            appid: steamAppId.value,
            l: 1,
          },
        }).then(function (response) {
          data.value = response.data.playerstats.achievements;
        });
      };

      if ((WebKey.value && steamId.value && steamAppId.value !== null) || "") {
        getAchievements();
      } else configErrorModal.value = true;

      console.log(store.getters.getConfig);
    });

    const searchQuery = ref("");
    const allAchieve = computed(() => {
      return data.value.filter((product) => {
        return (
          product.name.toLowerCase().indexOf(searchQuery.value.toLowerCase()) !=
            -1 ||
          product.description
            .toLowerCase()
            .indexOf(searchQuery.value.toLowerCase()) != -1
        );
      });
    });
    const completeAchieve = computed(() => {
      return data.value.filter((product) => {
        return product.achieved === 1;
      });
    });
    const incompleteAchieve = computed(() => {
      return data.value.filter((product) => {
        return product.achieved === 0;
      });
    });
    const searchedProducts = computed(() => {
      return data.value.filter((product) => {
        return (
          product.name.toLowerCase().indexOf(searchQuery.value.toLowerCase()) !=
            -1 ||
          product.description
            .toLowerCase()
            .indexOf(searchQuery.value.toLowerCase()) != -1
        );
      });
    });

    const totalAchievements = computed(() => {
      return _.countBy(data.value, 1);
    });

    const percentage = ref(false);
    return {
      configData: computed(() => store.getters.getConfig),
      configErrorModal,
      percentage,
      totalAchievements,
      searchQuery,
      searchedProducts,
      data,
      all,
      completed,
      incomplete,
      allAchieve,
      completeAchieve,
      incompleteAchieve,
    };
  },
  components: { Achievement },
});
</script>

<style scoped></style>
