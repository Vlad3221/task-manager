<template>
  <header-template/>
  <router-view/>
</template>

<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router'
import HeaderTemplate from '/src/components/HeaderTemplate/index.vue'

</script>
