<template>
  <div class="col-2 tab-content-projects-slider__card tab-content-projects-slider-card">
    <div class="tab-content-projects-slider-card__header tab-content-projects-slider-card-header">
    <span
        class="tab-content-projects-slider-card-header__icon tab-content-projects-slider-card-header-icon material-symbols-outlined"
        :class="colorIcon"
    >
      {{ icon }}
    </span>
      <span
          class="tab-content-projects-slider-card-header__title tab-content-projects-slider-card-header-title">
        {{ title }}
      </span>
    </div>
    <div class="tab-content-projects-slider-card__tasks tab-content-projects-slider-card-tasks">
      <slot/>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    icon: String,
    colorIcon: String,
    title: String
  }
}
</script>

<style lang="stylus" scoped src="./index.styl"></style>