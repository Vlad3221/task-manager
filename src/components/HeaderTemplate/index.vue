<template>
  <header>
    <div class="top-navigation">
      <div class="top-navigation__site top-navigation-site"></div>
      <div class="top-navigation__user top-navigation-user">
        <div class="top-navigation-user__realtime top-navigation-user-realtime">
          <span>{{ timeNow }}</span>
        </div>
        <div class="top-navigation-user__notifications top-navigation-user-notifications">
          <span class="material-symbols-outlined">notifications</span>
        </div>
        <div class="top-navigation-user__profile top-navigation-user-profile">
          <span class="material-symbols-outlined">person</span>
        </div>
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