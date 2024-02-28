<template>
  <div class="manager-block">
    <div class="manager-block__navigation manager-block-navigation">
      <router-link to="/">
        <span class="material-symbols-outlined">grid_view</span>
        TManager
      </router-link>
      <router-link to="/projects">
        <span class="material-symbols-outlined">splitscreen</span>
        Projects
      </router-link>
    </div>
    <div class="manager-block__content manager-block-content">
      <header-template/>
      <div class="mt-5">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router'
import HeaderTemplate from '/src/components/HeaderTemplate/index.vue'
</script>

<style lang="stylus" src="./index.styl"></style>
