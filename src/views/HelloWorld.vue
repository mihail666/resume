<template>
  <section id="home" class="home section">
    <div class="container home home__container grid">

      <div class="home__data">
        <h1 class="home__title">Hello</h1>
        <h2 class="home__subtitle">l`m Mihail</h2>
        <h3 class="home__icon">
          <i class="ri-vip-crown-2-fill"></i> profile
        </h3>
      </div>

      <div class="home__content">
        <div class="home__img">
          <img src="@/assets/img/2.png" alt="">
        </div>

        <div class="home__cards">
          <div class="home__card-group">
            <ul class="home__card-content">.Name
              <span>{</span>
              <li class="">FirstName: Михаил;</li>
              <li class="">LastName: Филиппов;</li>
              <span>}</span>
            </ul>
          </div>
        </div>

      </div>
      <div class="home__content2">
        <div class="home__card-group">
          <button class="home__card-btn button">
            <a href="#hard-skils">What I Do {...}</a>
          </button>
        </div>
        <div class="home__card-group">
          <ul class="home__card-content">.Contacts
            <span>{</span>
            <li>
              <a href="https://t.me/MadoneFR" target="_blank" rel="noopener">Telegram: <span
                  class="card-span-2">t.me/MadoneFR;</span>
              </a>
            </li>
            <li>
              <a href="https://api.whatsapp.com/send?phone=79877933061" target="_blank" rel="noopener">Whatsapp: <span
                  class="card-span-2">+79877933061;</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/mihail666" target="_blank" rel="noopener">GitHub: <span
                  class="card-span-2">github.com/mihail666;</span>
              </a>
            </li>
            <span>}</span>
          </ul>
        </div>
      </div>

    </div>
  </section>

  <section id="about" class="about section">
    <h1 class="section__title">#About me</h1>
    <div class="container grid about__container">
      <div class="about__group">
        <img src="@/assets/img/about.jpg" alt="" class="about__img">

        <div class="about__card">
          <h3 class="about__card-title">7877+</h3>
          <p class="adout__card-description">
            часов разработки приложений на Vue
          </p>
        </div>
      </div>

      <div class="about__data">
        <h2 class="about__title">
          .concerning me
          <span>{</span>
        </h2>

        <p class="about__description">
          <i class="ri-focus-line"></i>
          Разработка интерфейса в течение 2 лет с использованием HTML/ CSS/ JS/ Vue.js и я ищу
          возможность применить
          свои знания на практике.
        </p>

        <p class="about__description">
          <i class="ri-focus-line"></i>
          Я готов выполнить тестовое задание, чтобы продемонстрировать уровень своих навыков
        </p>

        <p class="about__description">
          <i class="ri-focus-line"></i>
          Также есть уже сделанные проекты
        </p>
        <h2 class="section__title about__title">}</h2>
        <a href="#projects" class="button">Projects {...}</a>
      </div>
    </div>

  </section>

  <section id="hard-skils" class="hard-skils section ">
    <h2 class="section__title">#Hard-skils</h2>
    <div class="container hard-skils__container grid">
      <div class="hard-skils__data">
        <div class="hard-skils__card">
          <div class="hard-skils__card-title">
            <i class="ri-focus-line"></i>
            <h2 class="hard-skils__title">Vue {</h2>
          </div>
          <ul class="hard-skils__card-description">
            <li>Знание VueX;</li>
            <li>Разработка через Vue CLI;</li>
            <li>Работа с DOM;</li>
            <li>Компонентный подход;</li>
          </ul>
        </div>
        <h2 class="hard-skils__title">}</h2>
      </div>

      <div class="hard-skils__data">
        <div class="hard-skils__card">
          <div class="hard-skils__card-title">
            <i class="ri-focus-line"></i>
            <h2 class="hard-skils__title">Vue {</h2>
          </div>
          <ul class="hard-skils__card-description">
            <li>Знание VueX;</li>
            <li>Разработка через Vue CLI;</li>
            <li>Работа с DOM;</li>
            <li>Компонентный подход;</li>
          </ul>
        </div>
        <h2 class="hard-skils__title">}</h2>
      </div>
    </div>
  </section>

  <section id="soft-skils" class="soft-skils section">
    <div class="container soft-skils__container  grid">
      <h1 class="section__title">soft-skils</h1>
      <h2 class="section__subtitle"></h2>
    </div>

  </section>

  <section id="projects" class="projects section ">
    <div class="container projects__container grid">
      <h1 class="section__title">projects</h1>
      <h2 class="section__subtitle"></h2>
    </div>

  </section>

  <section id="tools" class="tools section">
    <div class="container tools__container grid">
      <h1 class="section__title">tools</h1>
      <h2 class="section__subtitle"></h2>
    </div>
  </section>

  <div class="info bg">
    <h3 class="title">#Hard skills</h3>
    <div class="">
      <ul class="info-col">
        <h4 class="info-title">HTML</h4>
        <li>Знаю понятие потока документа;</li>
        <li>Знаю отличие блочного и строчного элементов;</li>
        <li>Использую HTML-теги в соответствии с их семантикой;</li>
      </ul>
      <ul class="info-col">
        <h4 class="info-title">CSS / SCSS</h4>
        <li>Умею создавать адаптивную верстку при помощи медиа-выражений;</li>
        <li>Использую флексбокс раскладку;</li>
        <li>Знаю базовые принципы БЭМ;</li>
      </ul>
      <ul class="info-col">
        <h4 class="info-title">JavaScript</h4>
        <li>Знаю базовые структуры данных JS;</li>
        <li>Умею работать с асинхронными функциями;</li>
        <li>Понимание работы событийного цикла;</li>
      </ul>
      <ul class="info-col">
        <h4 class="info-title">Vue.js</h4>
        <li>Создание и разработка Vue приложений с Vue CLI</li>
        <li>Работа с DOM событиями, атрибутами, элементами форм;</li>
        <li>Компонентный подход и описание компонентов на Vue;</li>
      </ul>
      <ul class="info-col">
        <h4 class="info-title">Git</h4>
        <li>знаю основные команды git</li>
        <li>умею создавать пулл реквесты;</li>
        <li>использую подход "один коммит, одна задача"</li>
      </ul>
    </div>
    <h3 class="title">#Soft skills</h3>
    <div class="">
      <ul class="info-col">
        <li>Легко ориентироваться;</li>
        <li>aдаптироваться к изменениям;</li>
        <li>Творческое видение;</li>
        <li>Коммуникабельность;</li>
      </ul>
    </div>
  </div>
  <div class="Tools bg">
    <h3 class="title">#Tools</h3>
    <div class="row">
      <ul class="info-col">
        <li>Английский: Уровень B1. Читаю техническую документацию, периодически используя Google
          Translate.</li>
        <li>Использую Prettier и ESLint для автоматического форматирования и проверки кода;</li>
        <li>Опыт использования Figma, Photoshop для работы с дизайн-макетами;</li>
        <li>Использую Windows 11 в качестве рабочей ОС;</li>
      </ul>
    </div>
  </div>
  <ResumeGallary />
</template>

<script>
import { onMounted } from 'vue'
import ResumeGallary from '@/components/ResumeGallary.vue'
export default {
  setup() {
    function particle() {

      var canvas = document.createElement('canvas'),
        ctx = canvas.getContext('2d'),
        w = canvas.width = innerWidth,
        h = canvas.height = document.body.scrollHeight,
        particles = [],
        properties = {
          bgColor: 'hsl(219, 4%, 7%)',
          particleColor: 'hsl(219, 8%, 75%)',
          particleRadius: 3,
          particleCount: 100,
          particleMaxVelocity: 0.5,
          lineLength: 200,
          particleLife: 6,
        }
      document.querySelector('body').appendChild(canvas);
      document.querySelector('canvas').classList.add('can')
      window.onresize = function () {
        w = canvas.width = innerWidth,
          h = canvas.height = document.body.scrollHeight;
      }

      class Particle {
        constructor() {
          this.x = Math.random() * w;
          this.y = Math.random() * h;
          this.velocityX = Math.random() * (properties.particleMaxVelocity * 2) - properties.particleMaxVelocity;
          this.velocityY = Math.random() * (properties.particleMaxVelocity * 2) - properties.particleMaxVelocity;
          this.life = Math.random() * properties.particleLife * 60;
        }
        position() {
          this.x + this.velocityX > w && this.velocityX > 0 || this.x + this.velocityX < 0 && this.velocityX < 0 ? this.velocityX *= -1 : this.velocityX;
          this.y + this.velocityY > h && this.velocityY > 0 || this.y + this.velocityY < 0 && this.velocityY < 0 ? this.velocityY *= -1 : this.velocityY;
          this.x += this.velocityX;
          this.y += this.velocityY;
        }
        reDraw() {
          ctx.beginPath();
          ctx.arc(this.x, this.y, properties.particleRadius, 0, Math.PI * 2);
          ctx.closePath();
          ctx.fillStyle = properties.particleColor;
          ctx.fill();
        }
        reCalculateLife() {
          if (this.life < 1) {
            this.x = Math.random() * w;
            this.y = Math.random() * h;
            this.velocityX = Math.random() * (properties.particleMaxVelocity * 2) - properties.particleMaxVelocity;
            this.velocityY = Math.random() * (properties.particleMaxVelocity * 2) - properties.particleMaxVelocity;
            this.life = Math.random() * properties.particleLife * 60;
          }
          this.life--;
        }
      }

      function reDrawBackground() {
        ctx.fillStyle = properties.bgColor;
        ctx.fillRect(0, 0, w, h);
      }

      function drawLines() {
        var x1, y1, x2, y2, length, opacity;
        for (var i in particles) {
          for (var j in particles) {
            x1 = particles[i].x;
            y1 = particles[i].y;
            x2 = particles[j].x;
            y2 = particles[j].y;
            length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
            if (length < properties.lineLength) {
              opacity = 1 - length / properties.lineLength;
              ctx.lineWidth = '0.5';
              ctx.strokeStyle = 'hsl(219, 8%, 75%, ' + opacity + ')';
              ctx.beginPath();
              ctx.moveTo(x1, y1);
              ctx.lineTo(x2, y2);
              ctx.closePath();
              ctx.stroke();
            }
          }
        }
      }

      function reDrawParticles() {
        for (var i in particles) {
          particles[i].reCalculateLife();
          particles[i].position();
          particles[i].reDraw();
        }
      }

      function loop() {
        reDrawBackground();
        reDrawParticles();
        drawLines();
        requestAnimationFrame(loop);
      }

      function init() {
        for (var i = 0; i < properties.particleCount; i++) {
          particles.push(new Particle);
        }
        loop();
      }

      init();

    }
    onMounted(() => {
      // particle()
    })
    return { particle }
  },
  components: { ResumeGallary },
  name: 'HelloWorld',
  props: {
    msg: String,
  }
}
</script>
<style lang="scss">
@import '@/assets/styles/variables.scss';

.home {
  position: relative;

  &__data {
    position: absolute;
    display: grid;
    left: 58%;
    align-items: center;

    margin-bottom: 2rem;
    text-align: center;
    letter-spacing: 5px;
  }

  &__title {
    font-size: 3rem;
  }

  &__content {
    margin-top: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 4rem;
    margin-bottom: 2rem;

  }

  &__content2 {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 7rem;
    margin-bottom: 2rem;
  }

  &__img {
    display: grid;
    position: relative;
    justify-content: center;
    overflow: hidden;
    background-size: cover;

    img {
      max-width: 380px;
      border: 1px solid #000;
      border-radius: 50%;
      justify-self: center;
    }

    &::before {
      border-radius: 50%;
      position: absolute;
      content: "";
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: radial-gradient(50% 50%, hsla(0, 0%, 0%, 0.2) 60%, $body-color 100%);
    }
  }

  &__cards {
    display: grid;
    justify-content: start;
  }

  &__card-group {
    max-width: 200px;
    padding: 1rem;
    border-radius: 1rem;
    margin-bottom: 2rem;
    transition: .3s;

    &:nth-child(2) {
      position: relative;
      max-width: 270px;
      top: -7rem;
      left: 2rem;
    }

    &:hover {
      transform: translateX(1rem);
    }
  }

  &__card-content {
    font-size: $h2-font-size;
    color: $white-color;

    li {
      padding: 0.3rem 0 0.3rem 1rem;
      font-size: $normal-font-size;
      color: $text-color;
      row-gap: .5rem;


      a {
        color: $text-color;
        padding: 0.2rem 0;
        border-bottom: 1px solid hsla(216, 8%, 75%, 0.4);
        transition: .3s;

      }

      :hover {
        color: $first-color;
        border-bottom: 1px solid $first-color-alt;
      }
    }
  }

  &__card-btn {
    position: relative;
    width: 200px;
    top: -1rem;
    left: 0rem;

    &:hover {
      a {
        color: $body-color;
      }
    }
  }
}

.about {
  &__container {
    row-gap: 6rem !important;
  }

  &__group {
    width: 100%;
    position: relative;
  }

  &__img {
    border-radius: .5rem;
  }

  &__card {
    width: 200px;
    position: absolute;
    right: 0;
    bottom: 1rem;
    padding: 1rem .75rem;
    border-radius: 1.25rem;
    background: hsla(0, 0, 100%, .1);
    backdrop-filter: blur(16px);
    text-align: center;
  }

  &__card-title {
    font-size: $h3-font-size;
    margin-bottom: .5rem;
  }

  &__card-description {
    text-align: center;
    margin-bottom: 2rem;
  }

  &__card-title {
    font-size: $h3-font-size;
    margin-bottom: .5rem;
  }

  &__card-descriptions {
    font-size: $smaller-font-size;
  }

  &__title {
    font-size: $h2-font-size;
    text-align: initial;
    margin-bottom: 2rem;
    text-align: left !important;
  }

  &__description {
    margin-bottom: 2rem;
  }
}

.hard-skils {
  position: relative;
  &__container {
    row-gap: 6rem;
  }
}

/* .bg {
  padding: 10px 15px 0 30px;
  background:#2E345880;
}
.can {
  box-sizing: border-box;
  top: 0;
  width: 100%;
  z-index: -1;
  position: absolute;
  background: linear-gradient(40deg, #0c2bdf, #2E3458);
}
h1 {
  font-size: 5rem;
}

h3 {
  margin: 0;
  padding: 0;
  color: #00ffff;
}

a {
  color: #ffffff;
  text-decoration: none;
}

.block {
  width: 300px;
  height: 100px;
  display: flex;
  flex-wrap: wrap;
  margin: 0;
}

.ml {
  margin-left: 100px;
}

.hello {
  display: block;
  align-items: center;
  margin: 0 auto;
}

.center {
  margin: auto 0;
  justify-content: center;
}

.row {
  display: flex;
  flex-direction: row;
}

.col {
  display: flex;
  flex-direction: column;
}

.title {
  display: block;
  justify-content: left;
  text-align: left;
  color: aqua;
  margin-top: 10px;
}

.title>span {
  font-size: 2rem;
}

.container {
  width: 100%;
  max-width: 600px;
  display: flex;
  justify-content: center;
}

/* card */
</style> */
