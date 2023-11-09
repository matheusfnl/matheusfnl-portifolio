<template>
  <div class="header-container" ref="header">
    <div class="header-content">
      <div class="buttons-area" v-if="shouldShowButtons">
        <button class="custon-button" @click="openLink('https://github.com/matheusfnl')">
          <GitHubIcon class="icon" />
          github
        </button>

        <button class="custon-button" @click="openLink('https://www.linkedin.com/in/matheusgabrielgco/')">
          <LinkedinIcon />
          linkedin
        </button>
      </div>

      <div class="theme-button">
        <button @click="changeTheme">
          <BulbIcon class="icon" v-if="! dark_theme" />
          <BulbOffIcon v-else />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, computed } from 'vue';

  import BulbIcon from './icons/BulbIcon.vue';
  import BulbOffIcon from './icons/BulbOffIcon.vue';
  import GitHubIcon from './icons/GitHubIcon.vue';
  import LinkedinIcon from './icons/LinkedinIcon.vue';

  const dark_theme = ref(false);
  const header = ref(null);
  const changeTheme = () => dark_theme.value = ! dark_theme.value;

  const shouldShowButtons = computed(() => {
    return true;
  });

  const openLink = (link) => window.open(link, '_blank');
</script>

<style lang="scss" scoped>
  .header-container {
    width: 100%;
    position: fixed;
    z-index: 1;

    .header-content {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 16px;
      padding: 8px;
      max-width: 1440px;
      margin: 0 auto;

      .theme-button {
        width: 32px;
        display: flex;
        justify-content: center;
        align-items: center;

        button {
          cursor: pointer;
          background-color: transparent;
          border: 0;
          outline: 0;
          color: var(--text-card-color);
          transition: all .2s;

          &:hover, &:focus {
            transform: scale(1.15)
          }
        }
      }
    }

    .buttons-area {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 16px;

      button {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: transparent;
        gap: 4px;
        border: 0;
        outline: 0;
        color: var(--text-card-color);
        font-size: 14px;

        .icon {
          transition: all .2s;
        }

        &:hover, &:focus {
          .icon {
            color: var(--primary-color)
          }
        }
      }
    }
  }
</style>