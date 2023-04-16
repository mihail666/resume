<template>
  <w-header />

  <section id="home" class="home section ">
    <div class="shape shape__big"></div>
    <div class="shape shape__small"></div>
    <div class="home__container grid container">
      <div class="home__data">
        <h1 class="home__title">Hello</h1>
        <h2 class="home__subtitle">l`m Mihail <br> Filippov </h2>
      </div>
      <div class="home-group">
        <div class="home__img">
          <img src="@/assets/img/2.png" alt="">
        </div>
        <div class="home__card">
          <ul class="home__card-content">.Contacts
            <span>{</span>
            <li>
              <a href="https://t.me/MadoneFR" target="_blank" rel="noopener">
                Telegram: <span class="card-span-2">send message;</span>
              </a>
            </li>
            <li>
              <a href="https://api.whatsapp.com/send?phone=79877933061" target="_blank" rel="noopener">
                Whatsapp: <span class="card-span-2">send message;</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/mihail666" target="_blank" rel="noopener">
                GitHub: <span class="card-span-2">github.com/mihail666;</span>
              </a>
            </li>
            <span>}</span>
          </ul>
        </div>
      </div>
      <button class="home__card-btn button">
        <a href="#hard-skills">What I Can Do {...}</a>
      </button>
    </div>
  </section>

  <section id="about" class="about section container">
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
          <i class="ri-arrow-right-s-fill"></i>
          Занимаюсь разработкой интерфейса в течение 2 лет. Использую HTML CSS JS Vue.js и я ищу
          возможность применить
          свои знания на практике.
        </p>

        <p class="about__description">
          <i class="ri-arrow-right-s-fill"></i>
          Готов выполнить Ваше задание.
        </p>
        <h2 class="section__title about__title">}</h2>
        <a href="#projects" class="button">Projects {...}</a>
      </div>
    </div>
  </section>

  <section id="hard-skills" class="hard-skils section container">
    <h2 class="section__title">#Hard-skils</h2>
    <div class="hard-skils__container grid">
      <div class="hard-skils__data">
        <div class="hard-skils__card">
          <div class="hard-skils__card-title">
            <i class="ri-vuejs-fill card-title-icon"></i>
            <span class="title">Vue {</span>
          </div>
          <ul class="hard-skils__card-description grid">
            <li>Знание VueX;</li>
            <li>Знание хуков жизненого цикла;</li>
            <li>Разработка через Vue CLI;</li>
            <li>Компонентный подход;</li>
          </ul>
          <span class="title">}</span>
        </div>
      </div>

      <div class="hard-skils__data">
        <div class="hard-skils__card">
          <div class="hard-skils__card-title">
            <i class="ri-javascript-fill card-title-icon"></i>
            <span class="title">Js {</span>
          </div>
          <ul class="hard-skils__card-description grid">
            <li>Знание базовые структуры данных JS;</li>
            <li>Умею работать с асинхронными функциями;</li>
            <li>Понимание работы событийного цикла;</li>
            <li>Работа с DOM;</li>
          </ul>
          <span class="title">}</span>
        </div>
      </div>

      <div class="hard-skils__data">
        <div class="hard-skils__card">
          <div class="hard-skils__card-title">
            <i class="ri-html5-line card-title-icon"></i>
            <span class="title">HTML {</span>
          </div>
          <ul class="hard-skils__card-description grid">
            <li>Знание потока документа;</li>
            <li>Использую HTML-теги в соответствии с их семантикой;</li>
          </ul>
          <span class="title">}</span>
        </div>
      </div>

      <div class="hard-skils__data">
        <div class="hard-skils__card">
          <div class="hard-skils__card-title">
            <i class="ri-css3-fill card-title-icon"></i>
            <span class="title">Css / Scss {</span>
          </div>
          <ul class="hard-skils__card-description grid">
            <li>Умею создавать адаптивную верстку при помощи медиа-выражений;</li>
            <li>Использую флексбокс раскладку;</li>
            <li>Знание базовых принципов БЭМ;</li>
            <li>Знание отличия блочного и строчного элементов;</li>
            <li>Специфичность;</li>
          </ul>
          <span class="title">}</span>
        </div>
      </div>

      <div class="hard-skils__data">
        <div class="hard-skils__card">
          <div class="hard-skils__card-title">
            <i class="ri-github-line card-title-icon"></i>
            <span class="title">Git {</span>
          </div>
          <ul class="hard-skils__card-description grid">
            <li>Знание основных команды git;</li>
            <li>Использую подход "один коммит, одна задача";</li>
          </ul>
          <span class="title">}</span>
        </div>
      </div>
    </div>
  </section>

  <section id="projects" class="projects section container">
    <h1 class="section__title">#Projects</h1>
    <div class="container projects__container grid">
      <h2 class="projects__title">
        Проекты оформлены <br> на рабочих доменах
      </h2>
      <p class="projects__subtitle">остальные залиты на Git</p>

      <resume-gallary />
    </div>
  </section>

  <section id="soft-skills" class="soft-skils section container">
    <h1 class="section__title">#Soft slills</h1>
    <div class="container grid soft-skils__container">
      <div class="soft-skils__data">
        <h2 class="soft-skils__title">
          <span>{</span>
        </h2>

        <p class="soft-skils__description">
          <i class="ri-arrow-right-s-fill"></i>
          Английский: Уровень B1. Читаю техническую документацию, периодически используя Google Translate.
        </p>

        <p class="soft-skils__description">
          <i class="ri-arrow-right-s-fill"></i>
          Использую Prettier и ESLint для автоматического форматирования и проверки кода;
        </p>

        <p class="soft-skils__description">
          <i class="ri-arrow-right-s-fill"></i>
          Опыт использования Figma, Photoshop для работы с дизайн-макетами;
        </p>

        <p class="soft-skils__description">
          <i class="ri-arrow-right-s-fill"></i>
          Использую Windows 11 в качестве рабочей ОС;
        </p>
        <h2 class="section__title soft-skils__title">}</h2>

      </div>
      <div class="soft-skils__data">
        <h2 class="soft-skils__title">
          <span>{</span>
        </h2>

        <p class="soft-skils__description">
          <i class="ri-arrow-right-s-fill"></i>
          Легко ориентироваться;
        </p>

        <p class="soft-skils__description">
          <i class="ri-arrow-right-s-fill"></i>
          aдаптироваться к изменениям;
        </p>

        <p class="soft-skils__description">
          <i class="ri-arrow-right-s-fill"></i>
          Творческое видение;
        </p>

        <p class="soft-skils__description">
          <i class="ri-arrow-right-s-fill"></i>
          Коммуникабельность;
        </p>
        <h2 class="section__title soft-skils__title">}</h2>

      </div>
    </div>
  </section>

  <w-footer />
</template>

<script>
import { onMounted } from 'vue'
import { initScrollReveal } from '@/assets/js/scrollReveal'
import ResumeGallary from '@/components/ResumeGallary.vue'
import WHeader from '@/components/W-Header.vue'
import WFooter from '@/components/W-Footer.vue'
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
      const bg = document.getElementById('app')
      bg.appendChild(canvas);
      // document.querySelector('body').appendChild(canvas);
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
      particle(),
      initScrollReveal()
    })
    return { particle }
  },
  components: { ResumeGallary, WHeader, WFooter },
  name: 'HelloWorld',
  props: {
    msg: String,
  }
}
</script>
