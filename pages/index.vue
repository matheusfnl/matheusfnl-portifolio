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
          <div class="icon-wrapper"><IconGitHub /></div>
          <div class="content-wrapper">
            <div class="indicator">></div>
            <span>github</span>
          </div>
        </button>

        <button @click="openLink('https://www.linkedin.com/in/matheusgabrielgco/')">
          <div class="icon-wrapper"><IconLinkedin /></div>
          <div class="content-wrapper">
            <div class="indicator">></div>
            <span>linkedin</span>
          </div>
        </button>
      </div>
    </div>

    <div class="bottom-content-indicator">
      <div class="arrow-down-button" @click="scrolToContent">
        <IconArrowUp />
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
        <div class="projects-container">
          <div class="repo-feedback-container" v-if="! repos_error && ! repos.data">
            <SharedLoader />
            Fetching repositories
          </div>

          <div class="repo-feedback-container" v-else-if="repos_error">
            An unexpected error occurred
            <button class="full-button primary" @click="getRepos">
              Try again
            </button>
          </div>

          <div v-else class="project-container" :key="index" v-for="(repo, index) in repos.data" @click="openLink(repo.html_url)">
            <div class="project-info-container">
              <div class="project-title">
                <span>
                  {{ repo.name }}
                </span>

                <button class="link-button" @click.stop="openHomePage(repo.homepage)" v-if="repo.homepage">
                  View demo
                </button>
              </div>

              <div class="project-description">
                {{ repo.description }}
              </div>
            </div>

            <div class="tags-container" v-if="repo.language">
              <span :style="getTagColor(repo.language)">
                {{ repo.language }}
              </span>
            </div>
            <div class="custom-hr" />
          </div>
        </div>
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

      <div class="contact-container">
        <div class="buttons-container">
          <div class="social-media-button" @click="openLink('https://github.com/matheusfnl')">
            <div class="icon">
              <IconGitHub />
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
              <IconLinkedin />
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
              <IconInstagram />
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

        <div class="send-message-container">
          <span class="send-message-title">
            <div>
              <span class="indicator">></span>
              Send message
            </div>
          </span>

          <div class="form-container">
            <form
              action="https://formspree.io/f/mleykrzd"
              method="POST"
            >
              <div class="inputs-container">
                <div class="custom-input">
                  <span>Name</span>
                  <input name="name" required class="custom-input-style" type="text" />
                </div>

                <div class="custom-input">
                  <span>E-mail</span>
                  <input name="email" required class="custom-input-style" type="text" />
                </div>

                <div class="custom-input">
                  <span>Message</span>
                  <textarea name="message" required class="custom-input-style" type="text" />
                </div>
              </div>

              <div>
                <button type="submit" class="full-button primary submit-button">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { onMounted, ref } from 'vue';

  import fetchApi from '../helper/fetchApi.js';
  import tagColor from '../enums/tagColors.js'

  const openLink = (link) => window.open(link, '_blank');

  const scrolToContent = () => {
    const position = document.getElementById('contentSection').offsetTop;
    window.scrollTo({ top: position - 16, behavior: "smooth" });
  }

  const repos = ref([]);
  const repos_error = ref(false);
  const getRepos = async () => {
    repos_error.value = false;

    repos.value = await fetchApi({
      url: 'users/matheusfnl/repos',
      handleError: () => repos_error.value = true,
      params: {
        sort: 'created',
        per_page: 10,
      }
    })
  }

  const openHomePage = (link) => {
    openLink(link);
  }

  const getTagColor = (language) => ({ backgroundColor: tagColor[language] })

  onMounted(() => getRepos())
</script>

<style lang="scss" scoped>
  .top-card-container {
    position: relative;
    height: 100vh;
    display: flex;
    flex-direction: column;

    .background-image {
      background-color: var(--primary-color);
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
    max-width: 1440px;
    margin: 0 auto;
    padding: 8px 16px;
    margin-top: 24px;

    display: flex;
    gap: 32px;

    &:last-child { margin-bottom: 160px; }

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
        }
      }

      .contact-container {
        display: flex;
        flex-direction: column;
        gap: 24px;

        .buttons-container {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;

          .social-media-button {
            flex: 1;
            cursor: pointer;
            padding: 8px;
            background: color-mix(in srgb, currentColor 10%, transparent);
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

        .send-message-container {
          display: flex;
          flex-direction: column;
          gap: 8px;

          .send-message-title {
            color: var(--secondary-color);
            font-size: 1.5rem;
            font-weight: 600;

            .indicator { font-weight: bold; }
          }

          .form-container {
            display: flex;
            flex-direction: column;
            gap: 8px;

            .inputs-container {
              display: flex;
              flex-wrap: wrap;
              gap: 4px 16px;

              .custom-input {
                display: flex;
                flex-direction: column;
                width: 50%;

                &:nth-child(1) { flex: 1; }
                &:nth-child(2) { flex: 1; }
                &:last-child { width: 100%; }

                input {
                  width: 100%;
                  color: var(--text-color);
                }

                textarea {
                  width: 100% !important;
                  height: 130px;
                  resize: vertical;
                  color: var(--text-color);
                }

                .custom-input-style {
                  border: 0;
                  outline: 0;
                  border-radius: 4px;
                  font-size: 1rem;
                  padding: .25rem .5rem;
                  margin: .5rem 0;
                  transition: all ease-in-out .25s;
                  background: color-mix(in srgb, var(--text-color) 10%, transparent);
                }
              }
            }
          }
        }
      }

      .projects-container {
        display: flex;
        flex-direction: column;
        gap: 8px;

        .repo-feedback-container {
          display: flex;
          align-items: center;
          flex-direction: column;
          gap: 8px;
        }

        .project-container {
          width: 100%;
          padding: 0 8px;
          cursor: pointer;
          transition: all .2s;

          .project-info-container {
            display: flex;
            flex-direction: column;

            .project-title {
              display: flex;
              align-items: center;
              justify-content: space-between;

              span {
                font-size: 20px;
                font-weight: 600;
                transition: all .2s;
              }

              .link-button {
                cursor: pointer;
                border: 0;
                outline: 0;
                background-color: transparent;
                color: var(--primary-color);
                font-weight: 600;

                &:hover {
                  text-decoration: underline;
                }
              }
            }

            .project-description {
              font-weight: 300;
              padding: 0 8px;
              opacity: 0.8;
            }
          }

          .tags-container {
            margin-top: 4px;
            display: flex;
            gap: 4px;

            span {
              font-size: .85rem;
              font-weight: 700;
              width: fit-content;
              padding: 0 0.2rem 0.1rem 0.2rem;
              border-radius: 4px;
              display: flex;
              gap: .25rem;
              background: #9c948c;
              color: var(--background-color);
            }
          }

          .custom-hr {
            height: 1px;
            width: 100%;
            margin-top: 16px;
            background-color: var(--highlight-color);
            opacity: .15;
          }

          &:hover {
            margin-left: 8px;

            .project-info-container {
              .project-title {
                span {
                  color: var(--primary-color);
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

  @media (max-width: 780px) {
    .section-container {
      flex-direction: column;
      gap: 8px;
      &:last-child { margin-bottom: 40px; }

      .c {
        &-40 { width: 100%; max-width: 100%; }
        &-60 { width: 100%; max-width: 100%; }
      }
    }

    .submit-button { width: 100%; }
  }

  @media (max-width: 880px) {
    .presentation { span { font-size: 6vw !important; } }
    .middle-presentation {
      .main-text { font-size: 10vw !important; }
      .prefix { span {
        font-size: 4vw !important;
        line-height: 4vw !important;
      } }
    }
  }

  @keyframes updown {
    0%, 100% { transform: translateY(0) rotate(180deg); }
    50% { transform: translateY(-10px) rotate(180deg); }
}
</style>