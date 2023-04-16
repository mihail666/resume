<template>
  <swiper
  :slidesPerView="'auto'" :loop="true" :freeMode="false" :modules="modules"
    :breakpoints="{
      '375': {
        slidesPerView: 1,
        spaceBetween: 0,
        freeMode: true
      },
      '580': {
        slidesPerView: 1.5,
        spaceBetween: 2
      },
      '780': {
        slidesPerView: 1.5,
        spaceBetween: 1
      },
      '1024': {
        slidesPerView: 1.5,
        spaceBetween: 10
      }
    }"
    :pagination="{
      dynamicBullets: true,
    }"
  class="mySwiper mySwiper__container">
    >
    <swiper-slide
      class="mySwiper__card"
      v-for="se in sites"
      :key="se.id"
    >
      <div class="mySwiper__data">
        <h1 class="mySwiper__title">{{ se.name }}</h1>
        <h3 class="mySwiper__subtitle">{{ se.desc }}</h3>
        <img
          :src="require('@/assets/img/' + se.image)"
          alt="site-img"
          class="mySwiper__img"
        >
        <a
          :href="se.path"
          class="button mySwiper__button"
          target="_blank"
          rel="noopener"
        >
          <i class="ri-arrow-right-double-fill"></i>
        </a>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { siteLinks } from '@/const/site.links'
import { FreeMode, Pagination } from 'swiper';
export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    return {
      modules: [Pagination, FreeMode]
    }
  },
  data: () => ({
    sites: siteLinks
  })
}
</script>

<style lang="scss">
@import '@/assets/styles/variables.scss';

.swiper-slide {
  margin: 0rem;
}

.mySwiper {
  &__container {
    width: 300px;
    height: 500px;
    padding-top: 1rem;
  }

  &__card {
    position: relative;
    align-items: center;
    padding: .9rem;
    display: grid;
    justify-content: center;
    width: 250px;
    height: 250px;
    border-radius: 1rem;
    transition: .3s;
    opacity: .1;
  }

  &__title {
    font-size: $h2-font-size;
    margin-bottom: .25rem;
    margin-bottom: .5rem;
  }

  &__subtitle {
    font-size: $normal-font-size;
    color: $text-color;
    font-weight: 400;
  }

  &__img {
    width: 250px;
    display: flex;
    justify-self: center;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
    position: relative;
    top: 0;
    left: 0;
    transition: .3s;
    border-radius: 1rem 1rem 0 0;
  }

  &__data {
    position: relative;
    padding: .9rem;
    justify-content: center;
    height: 400px;
    border-radius: 1rem;
    overflow: hidden;
    margin-bottom: 3rem;
    border: 2px solid $text-color-light;
  }

  &__data-group {
    display: inline-flex;
    align-items: center;
    column-gap: .5rem;
    font-size: $small-font-size;
    color: $white-color;

    i {
      font-size: 1rem;
    }
  }

  &__price {
    font-size: $h3-font-size;
  }

  &__button {
    outline: none;
    background-color: $first-color-alt;
    border: 2px solid #00000000;
    padding: .75rem 1rem !important;
    position: absolute;
    right: 14px;
    bottom: -2px;
    border-radius: 1rem 0 0rem 0;
    cursor: pointer;

    i {
      font-size: 1.25rem;
    }
  }
}

.swiper-pagination {
  left: 50% !important;
}

.swiper-slide-active {
  opacity: 1;
}

.mySwiper__card:hover .mySwiper__img {
  transform: translateY(1rem);
  opacity: 1;
}

.swiper-pagination-bullet {
  background: $white-color;
}

.swiper-pagination-bullet-active {
  background: $first-color;
}
</style>
