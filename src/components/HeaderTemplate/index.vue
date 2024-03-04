<template>
  <header>
    <div class="top-navigation">
      <div class="top-navigation__realtime top-navigation-realtime">
        <span>{{ timeNow }}</span>
      </div>
      <div class="top-navigation__notifications top-navigation-notifications">
        <span class="material-symbols-outlined">notifications</span>
      </div>
      <div class="top-navigation__user top-navigation-user">
        <span class="material-symbols-outlined">person</span>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
export default {
  data() {
    return {
      timeNow: ''
    }
  },
  created() {
    setInterval(this.getTime, 1000);
  },
  methods: {
    getTime: function() {
      const today = new Date();
      this.timeNow = today.getHours() + ":" + today.getMinutes();
    }
  }
}
</script>

<style lang="stylus" scoped src="./index.styl"></style>