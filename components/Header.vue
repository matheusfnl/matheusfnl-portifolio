<template>
  <div class="header-container" ref="header" :class="{ 'expand-header' : should_expand_header }">
    <div class="header-content">
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
  import { ref, onMounted } from 'vue';

  import BulbIcon from './icons/BulbIcon.vue';
  import BulbOffIcon from './icons/BulbOffIcon.vue';

  const should_expand_header = ref(false);
  const dark_theme = ref(false);
  const header = ref(null);
  const changeTheme = () => {
    dark_theme.value = ! dark_theme.value;
    dark_theme.value ? document.body.className ='dark-theme' : document.body.className = '';
  };

  onMounted(() => {
    document.addEventListener('scroll', () => {
      const dom_content = document.getElementById('contentSection');

      if (dom_content) {
        const top_position = dom_content.getBoundingClientRect().top

        if (top_position < 35) {
          return should_expand_header.value = true;
        }
      }

      should_expand_header.value = false;
    })
  })

</script>

<style lang="scss" scoped>
  .header-container {
    width: 100%;
    position: fixed;
    z-index: 1;

    &.expand-header {
      .header-content {
        .theme-button {
          button {
            color: var(--text-color) !important;
          }
        }
      }
    }

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
  }
</style>