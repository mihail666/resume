<template >
  <div class="header" id="header">
    <nav class="nav container">
      <a href="#" class="nav__logo">
        <i class="ri-stack-line"></i> Profile
      </a>
      <div class="nav__menu" id="nav-menu">
        <ul class="nav__list">
          <li class="nav__item">
            <a href="#home" class="nav__link">Home</a>
          </li>
          <li class="nav__item">
            <a href="#about" class="nav__link">About</a>
          </li>
          <li class="nav__item">
            <a href="#hard-skills" class="nav__link">Hard-skills</a>
          </li>
          <li class="nav__item">
            <a href="#soft-skills" class="nav__link">Soft-skills</a>
          </li>
          <li class="nav__item">
            <a href="#projects" class="nav__link">Projects</a>
          </li>
        </ul>
        <div class="nav__close" id="nav-close">
          <i class="ri-close-line"></i>
        </div>
      </div>
      <!-- toggle button -->
      <div class="nav__toggle" id="nav-toggle">
        <i class="ri-menu-line"></i>
      </div>
    </nav>
  </div>
</template>
<script>
import { showMenu } from '@/assets/js/animate.js'
export default {
  setup () {
    return {}
  },
  mounted () {
    showMenu()
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/variables.scss';
@import '@/assets/styles/breakpoints.scss';
.header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: $z-fixed;
}

.nav {
  height: $header-height;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .5rem;

  &__logo,
  &__toggle {
    color: $title-color;
    display: inline-flex;
  }

  &__logo {
    align-items: center;
    column-gap: .25rem;
    font-weight: &font-medium;
    transition: .3s;

    i {
      font-size: 1.25rem;
    }

    &:hover {
      color: $first-color;
    }
  }

  &__list {
    display: flex;
    flex-direction: column;
    text-align: center;
    row-gap: 2rem;
    padding-top: 9rem;
  }

  &__link {
    text-transform: uppercase;
    color: $white-color;
    font-size: $h2-font-size;
    font-weight: $font-medium;
    transition: .3s;

    &:hover {
      color: $first-color;
    }

    &:active{
      color: $first-color;
    }
  }

  &__close {
    font-size: 2rem;
    color: $white-color;
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
  }
}
@media screen and (max-width: 780px) {
  .nav__menu {
    position: fixed;
    background: hsl(0, 0%, 100%, .1);
    top: 0;
    right: 100%;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(96px);
    transition: .3s;
  }
}

.show-menu {
  right: 0%;
}

.scroll-header {
  border-radius: 0 0 1rem 1rem;
  background-color: $body-color;
  box-shadow: 0 2px 4px hsla(0, 0, 1%, 1);
}


@media (min-width: 780px) {
  .nav {
    height: 4rem;
  }
  .nav__toggle,
  .nav__close {
    display: none;
  }
  .nav__list {
    flex-direction: row;
    column-gap: 3rem;
    padding-top: 0;
  }
  .nav__link {
    font-size: $normal-font-size;
    text-transform: initial;
  }
}
</style>
