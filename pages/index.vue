<template>
  <div class="top-card-container">
    <NuxtImg format="webp" class="background-image" src="/background-image.png" />

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
      <div class="arrow-down-button" @click="scrolToContent">
        <ArrowUpIcon />
      </div>
    </div>
  </div>

  <div class="section-container" id="contentSection">
    <div class="section-column c-60">
      <span class="title color-1">
        <div>
          <span class="indicator">></span>
          Projects
        </div>

        <div class="buttons-area">
          <button class="full-button primary">
            See all
          </button>

          <button class="light-button primary" @click="openLink('https://github.com/matheusfnl')">
            View GitHub
          </button>
        </div>
      </span>

      <div class="section-content">
        <!--  -->
      </div>
    </div>

    <div class="section-column c-40">
      <span class="title color-2">
        <div>
          <span class="indicator">></span>
          Contact
        </div>

        <div class="buttons-area">
          <button class="full-button secondary">
            Get in touch
          </button>
        </div>
      </span>

      <div class="section-content contact-container">
        <div class="buttons-container">
          <div class="social-media-button" @click="openLink('https://github.com/matheusfnl')">
            <div class="icon">
              <GitHubIcon />
            </div>

            <div class="content">
              <div class="button-title">
                GitHub
              </div>

              <div class="subtitle">
                matheusfnl
              </div>
            </div>
          </div>

          <div class="social-media-button" @click="openLink('https://www.linkedin.com/in/matheusgabrielgco/')">
            <div class="icon">
              <LinkedinIcon />
            </div>

            <div class="content">
              <div class="button-title">
                Linkedin
              </div>

              <div class="subtitle">
                matheusgabrielgco
              </div>
            </div>
          </div>

          <div class="social-media-button" @click="openLink('https://www.instagram.com/matheus.funxl/')">
            <div class="icon">
              <GitHubIcon />
            </div>

            <div class="content">
              <div class="button-title">
                Instagram
              </div>

              <div class="subtitle">
                matheus.funxl
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import GitHubIcon from '../components/icons/GitHubIcon.vue';
  import LinkedinIcon from '../components/icons/LinkedinIcon.vue';
  import ArrowUpIcon from '../components/icons/ArrowUpIcon.vue';

  const openLink = (link) => window.open(link, '_blank');
  const scrolToContent = () => {
    const position = document.getElementById('contentSection').offsetTop;
    window.scrollTo({ top: position - 16, behavior: "smooth" });
  }
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
      object-fit: cover;
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
      z-index: 1;

      .arrow-down-button { cursor: pointer; }
    }
  }

  .section-container {
    height: 100vh;
    max-width: 1440px;
    margin: 0 auto;
    padding: 8px 16px;
    margin-top: 24px;

    display: flex;
    gap: 8px;

    .section-column {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 24px;

      .title {
        font-size: 2rem;
        font-weight: 600;

        display: flex;
        gap: 8px;
        justify-content: center;
        flex-direction: column;

        &.color-1 { color: var(--primary-color) }
        &.color-2 { color: var(--secondary-color) }
        .indicator { font-weight: bold; }
        .buttons-area {
          display: flex;
          align-items: center;
          gap: 8px;

          .full-button {
            cursor: pointer;
            background-color: black;
            color: var(--text-color);
            border: 1px solid black;
            border-radius: 4px;
            padding: 2px 4px;
            font-weight: 600;
            font-size: 1rem;
            transition: all .1s;

            &.primary {
              background-color: var(--primary-color);
              color: var(--text-color);
              border: 1px solid var(--primary-color);

              &:hover {
                transform: scale(1.06) rotate(1deg);
              }
            }

            &.secondary {
              background-color: var(--secondary-color);
              color: var(--text-color);
              border: 1px solid var(--secondary-color);

              &:hover {
                transform: scale(1.06) rotate(1deg);
              }
            }
          }

          .light-button {
            cursor: pointer;
            background-color: white;
            color: black;
            border: 1px solid black;
            border-radius: 4px;
            padding: 2px 4px;
            font-weight: 400;
            font-size: 1rem;
            transition: all .1s;

            &.primary {
              background-color: transparent;
              color: var(--primary-color);
              border: 1px solid var(--primary-color);

              &:hover {
                background-color: var(--primary-color);
                color: var(--text-color);
                border: 1px solid var(--primary-color);
                transform: scale(1.06) rotate(1deg);
              }
            }

            &.secondary {
              background-color: transparent;
              color: var(--secondary-color);
              border: 1px solid var(--secondary-color);

              &:hover {
                background-color: var(--secondary-color);
                color: var(--text-color);
                border: 1px solid var(--secondary-color);
                transform: scale(1.06) rotate(1deg);
              }
            }
          }
        }
      }

      .contact-container {
        .buttons-container {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;

          .social-media-button {
            flex: 1;
            cursor: pointer;
            background-color: rgba(255, 255, 255, 0.23);
            padding: 8px;
            border: 1px solid rgba(0, 0, 0, 0.05);
            border-radius: 6px;

            display: flex;
            gap: 8px;
            align-items: center;

            .icon {
              margin-top: 2px;
              transition: all .1s;
              width: 32px;
            }

            .content {
              display: flex;
              flex-direction: column;
              line-height: 16px;

              .button-title {
                font-size: 18px;
                font-weight: 600;
                transition: all .1s;
              }

              .subtitle {
                font-weight: 300;
              }
            }

            &:hover {
              .icon {
                color: var(--secondary-color);
                transform: scale(1.2);
              }

              .content {
                .button-title {
                  color: var(--secondary-color);
                }
              }
            }
          }
        }
      }
    }

    .c {
      &-40 {width: 40%; max-width: 40% }
      &-60 { width: 60%; max-width: 60% }
    }
  }

  @keyframes updown {
    0%, 100% { transform: translateY(0) rotate(180deg); }
    50% { transform: translateY(-10px) rotate(180deg); }
}
</style>