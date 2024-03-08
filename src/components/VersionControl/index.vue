<template>
  <span class="circle-color-block version-text">{{ text }}</span>
</template>

<script lang="ts">
export default {
  props: {
    text: String
  }
}
</script>

<style lang="stylus" scoped src="./index.styl"></style>