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
      const hours = String(today.getHours()).padStart(2, '0');
      const minutes = String(today.getMinutes()).padStart(2, '0');
      const seconds = String(today.getSeconds()).padStart(2, '0');
      this.timeNow = hours + ":" + minutes + ":" + seconds;
    }
  }
}
</script>

<style lang="stylus" scoped src="./index.styl"></style>