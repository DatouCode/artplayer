<template>
  <h4>{{ title }}</h4>
  <div class="player" ref="player"></div>
</template>

<script lang="ts" setup>
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router"
import Artplayer from 'artplayer';
import artplayerPluginDanmuku from 'artplayer-plugin-danmuku'
import axios from "axios";

const route = useRoute()

const player = ref<any>(null)
let title = ref('')

async function playerInit() {
  player.value.style.height = window.innerHeight - 24 + 'px'
  const bv = route.params.bv
  // let {data} = await axios.get(`https://api.kuishuai.link/api/bilibili/bv?bv=${bv}`)
  let {data} = await axios.get(`http://localhost:10090/api/bilibili/bv?bv=${bv}`)
  for (const value of Object.values(data)) {
    console.log(value);
  }
  title.value = data.title

  new Artplayer({
    container: '.player',
    url: data.url,
    fullscreen: true,
    fullscreenWeb: true,
    plugins: [
      artplayerPluginDanmuku({
        danmuku: data.danmuku,
        opacity: 0.4,
        speed: 8,
        mount: undefined
      })
    ]
  })
}

onMounted(() => {
  playerInit()
})

</script>

<style>
.player {
  width: 100%;
  height: 500px;
}
</style>