<template>
  <div class="home">
    <RouterLink to="/panel.html" class="p-2 m-2 bg-black text-white"
    >TBOI Achievements</RouterLink
    >
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {}
</script>
