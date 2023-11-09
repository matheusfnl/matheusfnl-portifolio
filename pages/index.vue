<template>
  <div class="top-card-container">
    <NuxtImg class="background-image" src="/background-image.png" />

    <div class="content-container" id="contentContainer">
      <div class="presentation">
        <span>Hi, my name is</span>
        <span class="highlight-text">Matheus</span>
      </div>

      <div class="middle-presentation">
        <div class="prefix">
          <span>
            i'm
          </span>

          <span>
            a
          </span>
        </div>
        <span class="main-text">
          <span>
            WEB
          </span>
          <span>
            DEVELOPER
          </span>
        </span>
      </div>

      <div class="main-buttons-area">
        <button @click="openLink('https://github.com/matheusfnl')">
          <div class="icon-wrapper"><GitHubIcon /></div>
          <div class="content-wrapper">
            <div class="indicator">></div>
            <span>github</span>
          </div>
        </button>

        <button @click="openLink('https://www.linkedin.com/in/matheusgabrielgco/')">
          <div class="icon-wrapper"><LinkedinIcon /></div>
          <div class="content-wrapper">
            <div class="indicator">></div>
            <span>linkedin</span>
          </div>
        </button>
      </div>
    </div>

    <div class="bottom-content-indicator">
      <div clas="arrow-down-button">
        <ArrowUpIcon />
      </div>
    </div>
  </div>

  <div class="section-container">
  </div>
</template>

<script setup>
  import GitHubIcon from '../components/icons/GitHubIcon.vue';
  import LinkedinIcon from '../components/icons/LinkedinIcon.vue';
  import ArrowUpIcon from '../components/icons/ArrowUpIcon.vue';

  const openLink = (link) => window.open(link, '_blank');
</script>

<style lang="scss" scoped>
  .top-card-container {
    position: relative;
    height: 100vh;
    display: flex;
    flex-direction: column;

    .background-image {
      position: absolute;
      height: 100%;
      width: 100%;
      z-index: -1;
      filter: brightness(0.8);
    }

    .content-container {
      display: flex;
      justify-content: center;
      align-items: center;
      color: var(--text-card-color);
      flex-direction: column;
      flex: 1;

      .highlight-text {
        font-weight: bold;
      }

      .presentation {
        display: flex;
        gap: 8px;

        span {
          font-size: 34px;
        }
      }

      .middle-presentation {
        display: flex;
        align-items: center;
        gap: 8px;

        .prefix {
          display: flex;
          flex-direction: column;
          justify-content: flex-end;

          span {
            text-align: end;
            font-size: 28px;
            line-height: 24px;
          }
        }

        .main-text {
          font-weight: 800;
          font-size: 84px;

          span {
            transition: all .2s;

            &:hover { color: var(--primary-color); }
          }
        }
      }

      .main-buttons-area {
        display: flex;
        gap: 16px;
        margin-top: 24px;

        button {
          cursor: pointer;
          background-color: transparent;
          border: none;
          outline: none;
          color: var(--text-card-color);
          font-size: 24px;
          margin: 0px;
          padding: 0px;

          display: flex;
          align-items: center;
          gap: 4px;

          background: rgba(255, 255, 255, 0.16);
          border-radius: 4px;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          border: 1px solid rgba(255, 255, 255, 0.13);

          transition: all .2s;

          .icon-wrapper {
            border-right: 1px solid rgba(255, 255, 255, 0.13);
            height: 48px;
            aspect-ratio: 1/1;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: all .2s;

            svg {
              margin-top: 4px;
              transform: scale(1.3);
            }
          }

          .content-wrapper {
            display: flex;
            gap: 4px;
            margin: 0 10px 0 8px;

            .indicator {
              font-weight: 800;
            }
          }

          &:active {
            opacity: 0.8;
          }

          &:hover, &:focus {
            border-color: var(--primary-color);
            transform: scale(1.03);

            .indicator {
              color: var(--primary-color);
            }

            .icon-wrapper {
              border-color: var(--primary-color);
            }
          }
        }
      }
    }

    .bottom-content-indicator {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 48px;
      color: var(--text-card-color);;
      animation: updown 1.2s ease-in-out infinite;
    }
  }

  .section-container {
    height: 100vh;
    background-color: white;
  }

  @keyframes updown {
    0%, 100% { transform: translateY(0) rotate(180deg); }
    50% { transform: translateY(-10px) rotate(180deg); }
}
</style>