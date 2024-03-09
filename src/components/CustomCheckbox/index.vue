<template>
  <label class="custom-checkbox-label">
    <input
        :checked="isChecked"
        class="custom-input"
        type="checkbox">
    <span class="custom-checkbox" v-bind="$attrs"></span>
    <!--    <div class="test"></div>-->
  </label>
</template>

<script>
export default {
  props: {
    isChecked: Boolean
  }
}
</script>

<style lang="stylus" scoped src="./index.styl"/>