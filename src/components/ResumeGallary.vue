<template>
  <div class="bg">
    <h3 class="title">#My projects</h3>
    <section id="portfolio" class="bg">
      <div class="project" v-for="sl in sLinks" :key="sl.id">
        <div class="image">
        </div>
        <p>websites {{ sl.name }}</p>
        <h3 class="grid__title"> front-end</h3>
        <div class="grid__overlay">
          <button>
            <a :href="sl.path" target="_blank" rel="noopener">{{ sl.name }}</a>
          </button>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { onMounted, reactive } from 'vue'
import { siteLinks } from '@/const/site.links'
export default {
  setup() {
    const state = reactive({
      overlayImage: ''
    })
    function open() {
      document.querySelector('.overlay').classList.add('open')
      const src = document.querySelector('img').src
      state.overlayImage.src = src
      console.log(state.overlayImage)
    }
    function close() {
      document.querySelector('.overlay').classList.remove('open');
    }
    onMounted(() => {
      state.overlayImage = document.querySelector('.overlay__inner img');
    })
    return {
      open,
      close,
      state
    }
  },
  data: () => ({
    sLinks: siteLinks
  })
}
</script>

<style lang="scss" scoped>
$white: #8a2be3;
$primary: #2E345880;
$secondary: #00ffff;
$light: #cecdca;
$dark: #000000;

$ease: all 0.3s ease-in-out;

body {
  margin: 0;
}

button {
  cursor: pointer;
}

#portfolio {
  padding: 20px 0;
  width:100%;
  margin: 0 auto;
  min-height: 25vh;
  background: none;
  position: relative;
  display: grid;
  background-size: cover;
  grid-template-columns: repeat(2, minmax(300px, 1fr));
  grid-gap: 5px;
  box-sizing: border-box;
}

.project {
  position: relative;
  background: $primary;
  overflow: hidden;

  img {position: absolute;
    width: 50rem;
    height: 25rem;
    opacity: 0.9;
    background-size: cover;
  }

  p {
    color: $white;
    position: absolute;
    text-align: center;
    width: 100%;
    padding: 1em 0;
    text-transform: uppercase;
    letter-spacing: 2px;
    z-index: 3;
  }

  .grid__title {
    position: absolute;
    width: 100%;
    bottom: 0;
    text-align: center;
    white-space: nowrap;
    font-size: 0.8em;
    z-index: 3;
    text-transform: uppercase;
    color: $white;
    letter-spacing: 2px;
    margin-bottom: 10px ;
  }
}
// project hover overlay
.project:hover .grid__overlay {
  transform: translateY(0%);
}

.grid__overlay {
  background: rgba(darken($primary, 10%), 0.9);
  height: 100%;
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  position: relative;
  display: grid;
  justify-items: center;
  align-items: center;
  transform: translateY(101%);
  transition: $ease;

  button {
    background: none;
    outline: none;
    font-weight: 400;
    letter-spacing: 2px;
    border: 1px solid $white;
    text-transform: uppercase;
    padding: 15px;
    a {
      color: #00ffff;
    }
    &:hover {
      border: 1px solid $secondary;
      background: $secondary;
      transition: $ease;
      font-weight: 700;
      transform: scale(1.1);
      a {
        color: #000000;
      }
    }
  }
}

//project popup overlay

.overlay {
  position: fixed;
  background: rgba($dark, 0.7);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: none;
  z-index: 3;
}

.overlay.open {
  display: grid;
  align-items: center;
  justify-items: center;
}

.overlay__inner {
  background: $white;
  width: 700px;
  padding: 20px;
  position: relative;
  opacity: 1;
}

.close {
  position: absolute;
  top: 3px;
  right: 10px;
  background: none;
  outline: 0;
  color: $dark;
  border: 0;
  text-transform: uppercase;
  letter-spacing: 2px;

  &:hover {
    color: $secondary;
  }
}

.project__image {
  margin-left: -50%;
}
</style>



<!-- <template>
  <div class="wrapper bg">
    <h3 class="title">#Gallary</h3>
    <div class="grid image-grid">
      <div class="grid-block" v-for="sl in sLinks" :key="sl.id">
        <div class="tile">
          <div class="tile-link">
            <img class="tile-img tile-img1" :src="require('@/assets/img/site-title/' + sl.image)" alt="Image">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { siteLinks } from '@/const/site.links'
export default {
  setup() {

  },
  data: () => ({
    sLinks: siteLinks
  })
}
</script>

<style scoped>
html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body {
  margin: 0;
  min-height: 100vh;
  font-size: 1rem;
  line-height: 1.25;
}

.grid {
  position: relative;
  flex-grow: 1;
  margin: auto;
  padding: 20px 10px;
  max-width: 1200px;
  max-height: 1200px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 3vmin;
  justify-items: center;
  align-items: center;
}

.grid-block {
  width: 100%;
  min-height: 11.25rem;
  padding: 1rem;
}

.image-grid {
  -webkit-perspective: 1000px;
  perspective: 1000px;
}

.image-grid .tile-link:hover .tile-img {
  top: -1rem;
  left: -1rem;
  filter:brightness(.9)
}
.image-grid .tile-link:hover .grid__overlay {
  top: 4rem;
  left: 4.5rem;
  opacity: 1;
}

.image-grid .tile-img {
  top: 0;
  left: 0;
  -webkit-transition-property: opacity, top, left, box-shadow;
  transition-property: opacity, top, left, box-shadow;
}
.tile-link {
  width: 100%;
  height: 100%;
  position: relative;
  display: block;
}
.tile-link img {
  position: absolute;
  opacity: 0.9;
  filter:brightness(.1)
}

.tile-link:hover .tile-img {
  opacity: 1;
}

.tile-link:hover .tile-img-link {
  display: block;
}

.tile-link:hover .tile-img-link:hover .tile-img {
  opacity: 0.5;
}

.tile-img {
  display: block;
  width: 100%;
  height: 12rem;
  background-size: cover;
  opacity: 1;
  -webkit-transition-property: opacity;
  transition-property: opacity;
  -webkit-transition-duration: 0.125s;
  transition-duration: 0.125s;
  -webkit-transition-timing-function: ease-in;
  transition-timing-function: ease-in;
}
.tile-link:hover .tile-img {
  box-shadow: 5px 5px rgba(4, 140, 231, 0.4), 10px 10px rgba(4, 140, 231, 0.3),
    15px 15px rgba(4, 140, 231, 0.2), 20px 20px rgba(4, 140, 231, 0.1),
    25px 25px rgba(4, 140, 231, 0.05);
}
.grid__overlay {
  width: 5rem;
  height: 100%;
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  position: absolute;
  top: 5rem;
  left: 5.5rem;
  opacity: 0;
}
.grid__overlay button {
  background: rgba(255, 255, 255, 0.9);
  padding: 10px 30px;
  white-space: pre;
  font-size: 16px;
}
</style> -->