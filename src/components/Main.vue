<template>
  <div class="main">
    <div class="promo-color">
      <div class="promo-color-container">
        <div class="promo-color-title">Цвет вашего комфорта</div>
        <div class="promo-color-desc">
          Выбирайте свой цвет из 20 000 оттенков,
          <br />а если не найдете нужный, мы смешаем любой цвет и оттенок при вас.
        </div>
        <div class="btn btn--yellow btn--select-material">
          <span>Подобрать материал</span>
        </div>
      </div>

      <ul class="advantage-list">
        <li class="advantage-list__item advantage-list__item--color">
          <span>Разбираемся в краске уже 15 лет</span>
        </li>
        <li class="advantage-list__item advantage-list__item--clients">
          <span>Более 1000 довольных клиентов</span>
        </li>
        <li class="advantage-list__item advantage-list__item--brush">
          <span>Покрасили более 10 000 м2</span>
        </li>
      </ul>
    </div>

    <div class="service">
      <div class="service-title">Наши услуги</div>
      <div
        class="service-desc"
      >Предпочитаем перед продажей подробно консультировать клиентов, дабы избежать ошибок и недочетов</div>
      <ul class="service-list">
        <li class="service-list__item service-list__item--comp">
          <div class="service-list__item-container">
            <div class="service-list__item-text">Компьютерная колеровка краски</div>
            <a href="#" class="more-info">Подробнее</a>
          </div>
        </li>
        <li class="service-list__item service-list__item--help">
          <div class="service-list__item-container">
            <div class="service-list__item-text">Помощь в выборе материалов с выездом на дом</div>
          </div>
        </li>
        <li class="service-list__item service-list__item--aplication">
          <div class="service-list__item-container">
            <div class="service-list__item-text">Нанесение декоративных покрытий</div>
          </div>
        </li>
      </ul>
    </div>

    <div class="helper">
      <div class="helper-container">
        <div class="helper-title">Нужна помощь эксперта ?</div>
        <div
          class="helper-desc"
        >Оставьте свои контактные данные и наш специалист перезвонит в течение 15 минут и проконсультирует вас абсолютно бесплатно.</div>

        <div class="helper-form">
          <input class="helper-form__input" />
          <div class="btn btn--yellow btn--helper">
            <span>Позвоните мне</span>
          </div>
        </div>
      </div>
      <div class="helper__img"></div>
    </div>

    <div class="guarantees">
      <div class="guarantees-name">Мастерская Цвета</div>
      <div class="guarantees-title">Ваши гарантии и преимущества</div>
      <ul class="guarantees-list">
        <li class="guarantees-list__item guarantees-list__item--range">
          <div class="guarantees-list__item-title">Огромный ассортимент</div>
          <div
            class="guarantees-list__item-desc"
          >Выберите свой цвет из 20 000 оттенков, а если не найдете нужный, мы смешаем любой цвет и оттенок при вас</div>
        </li>
        <li class="guarantees-list__item guarantees-list__item--departure-client">
          <div class="guarantees-list__item-title">Выезд к клиенту</div>
          <div class="guarantees-list__item-desc">
            <a href>Оставьте заявку</a> и мы выедем к вам на дом, чтобы проконсультировать вас на месте и подобрать верные решения
          </div>
        </li>
        <li class="guarantees-list__item guarantees-list__item--remeber">
          <div class="guarantees-list__item-title">Помним о вас</div>
          <div
            class="guarantees-list__item-desc"
          >Даже спустя несколько лет, вы можете прийти к нам и мы найдем номер вашей краски и снова его повторим!</div>
        </li>
        <li class="guarantees-list__item guarantees-list__item--exp">
          <div class="guarantees-list__item-title">Многолетний опыт</div>
          <div
            class="guarantees-list__item-desc"
          >Все специалисты нашего салона работают в сфере колористики и дизайна более 10 лет, поэтому нам можно доверять безоговорочно.</div>
        </li>
      </ul>
    </div>

    <div class="exemple-slider">
      <div class="exemple-slider-container">
        <div class="exemple-slider-title">Нашими красками покрашены</div>
        <div class="control-container">
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </div>
      </div>

      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide>
          <div class="slider-img">
            <div class="slider-img-text-container">
              <div class="slider-text">Смоленский областной театр кукол имени Д.Н. Светильникова</div>
              <a href="#" class="more-info">Подробнее</a>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="slider-img">
            <div class="slider-img-text-container">
              <div class="slider-text">Смоленский областной театр кукол имени Д.Н. Светильникова</div>
              <a href="#" class="more-info">Подробнее</a>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="slider-img">
            <div class="slider-img-text-container">
              <div class="slider-text">Смоленский областной театр кукол имени Д.Н. Светильникова</div>
              <a href="#" class="more-info">Подробнее</a>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: "carrousel",
  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  }
};
</script>


<style lang="scss">
.main {
  margin-bottom: 100px;
}
//PROMO
.promo-color {
  position: relative;
  height: 765px;
  max-width: 1440px;
  margin: 0 auto;
  background: url("../assets/back.jpg");
  background-position: center;
  background-repeat: no-repeat;

  margin-bottom: 100px;

  &-container {
    padding: 189px 0 0 135px;
    width: 610px;
  }

  &-title {
    font-weight: 600;
    margin-bottom: 22px;
    font-size: 42px;
    line-height: 50px;

    color: #1f3744;
  }

  &-desc {
    margin-bottom: 50px;
    width: 435px;
    font-size: 18px;
    line-height: 32px;

    color: #3c445e;
  }
}

.advantage-list {
  position: absolute;
  bottom: 50px;
  left: calc(50% - 585px);
  width: 1170px;
  height: 100px;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(8px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 5px;

  display: flex;
  align-items: center;

  &__item {
    position: relative;
    height: 56px;
    width: 33.33%;
    border-right: 1px solid #ccd1dd;
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 14px;
    line-height: 20px;

    color: #3c445e;

    span {
      padding-left: 38px;
    }

    &::before {
      left: 53px;
    }

    &--color {
      &::before {
        content: "";
        position: absolute;
        width: 36px;
        height: 36px;
        background: url("../assets/svg/color-icon.svg");
        background-repeat: no-repeat;
        background-position: center;
      }
    }

    &--clients {
      &::before {
        content: "";
        position: absolute;
        width: 41px;
        height: 36px;
        background: url("../assets/svg/people-icon.svg");
        background-repeat: no-repeat;
        background-position: center;
      }
    }

    &--brush {
      &::before {
        content: "";
        position: absolute;
        width: 36px;
        height: 36px;
        background: url("../assets/svg/brush.svg");
        background-repeat: no-repeat;
        background-position: center;
        left: 72px;
      }
    }

    &:last-child {
      border: none;
    }
  }
}

.btn {
  user-select: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 17px;
  line-height: 20px;
  font-weight: 600;

  color: #1f3744;

  &--yellow {
    background: linear-gradient(180deg, #ffcf41 0%, #f6be1a 100%);
    border-radius: 34px;
  }

  &--select-material {
    width: 270px;
    height: 68px;
    transition: 0.3s ease-in-out;
    &:hover {
      transition: 0.3s ease-in-out;
      transform: scale(1.1);
    }
  }

  &--helper {
    position: absolute;
    right: 45px;
    bottom: 0;
    height: 68px;
    width: 228px;
  }
}

//SERVICE
.service {
  width: 1170px;
  margin: 0 auto;

  margin-bottom: 100px;

  &-title {
    font-size: 34px;
    line-height: 41px;

    text-align: center;

    color: #1f3744;

    font-weight: 600;
    margin-bottom: 18px;
  }

  &-desc {
    font-size: 18px;
    line-height: 33px;

    text-align: center;

    color: #3c445e;
    width: 570px;
    margin: 0 auto;
    margin-bottom: 49px;
  }

  &-list {
    display: flex;
    justify-content: space-between;
    &__item {
      width: 370px;
      height: 450px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      &:nth-child(1) {
        .service-list__item-container {
          height: 133px;
        }

        .service-list__item-text {
          margin-bottom: 22px;
        }

        .more-info {
          display: block;
          text-decoration: none;
          width: 89px;
          position: relative;
          font-weight: 600;
          font-size: 16px;
          line-height: 19px;

          text-align: center;

          color: #163993;
          margin-left: 20px;

          &::before {
            width: calc(100% - 14px);
            display: block;
            content: "";
            position: absolute;
            opacity: 0.3;

            border: 7px solid #ffb932;
            border-top-width: 4px;
            border-bottom-width: 2px;
            top: 14px;
          }
        }
      }

      &--comp {
        background: url("../assets/service-1.jpg");
        background-position: center;
        background-repeat: no-repeat;
      }

      &--help {
        background: url("../assets/service-2.jpg");
        background-position: center;
        background-repeat: no-repeat;
      }

      &--aplication {
        background: url("../assets/service-3.jpg");
        background-position: center;
        background-repeat: no-repeat;
      }

      &-container {
        width: 330px;
        height: 90px;
        margin: 0 auto;

        background: rgba(255, 255, 255, 0.8);
        backdrop-filter: blur(6px);

        border-radius: 5px;
        margin-bottom: 20px;
      }

      &-text {
        font-weight: 600;
        font-size: 19px;
        line-height: 26px;
        color: #1f3744;
        padding: 20px 20px 0 20px;
      }
    }
  }
}

.helper {
  max-width: 1440px;
  margin: 0 auto;
  background: #eff6fb;
  height: 452px;
  display: flex;

  margin-bottom: 100px;

  &-title {
    font-weight: 600;
    font-size: 34px;
    line-height: 41px;

    color: #1f3744;

    margin-bottom: 20px;
  }

  &-desc {
    font-size: 18px;
    line-height: 33px;

    color: #3c445e;
    width: 490px;

    margin-bottom: 45px;
  }

  &-container {
    margin: 90px 70px 0 135px;
    width: 530px;
  }

  &-form {
    position: relative;
    &__input {
      width: 315px;
      outline: none;
      padding: 24px 57px 24px 30px;
      background: #ffffff;
      border-radius: 34px;
      border: 1px solid rgba(60, 73, 76, 0.1);
      box-shadow: inset 0px 0px 4px rgba(90, 88, 99, 0.15);

      font-size: 16px;
      line-height: 16px;

      text-align: left;
      letter-spacing: 1px;
      color: #656f86;
    }
  }

  &__img {
    width: 631px;
    height: 437px;
    background: url("../assets/girl.jpg");
    background-position: center;
    background-repeat: no-repeat;
  }
}
//GUARANTEES
.guarantees {
  max-width: 1170px;
  height: 654px;
  margin: 0 auto;
  background: #eff6fb;

  margin-bottom: 100px;

  position: relative;

  &-name {
    font-size: 16px;
    line-height: 20px;

    text-align: center;

    color: #163993;
    padding-top: 80px;
    margin-bottom: 14px;
  }

  &-title {
    font-weight: 600;
    font-size: 34px;
    line-height: 41px;

    text-align: center;

    color: #1f3744;

    margin-bottom: 69px;
  }

  &-list {
    display: flex;
    flex-wrap: wrap;
    width: 970px;
    margin: 0 auto;
    justify-content: space-between;
    &__item {
      position: relative;
      width: 430px;
      height: 122px;
      padding-left: 96px;

      margin-bottom: 78px;

      &:last-child {
        height: 150px;
        width: 420px;
      }

      &--range {
        &::before {
          content: "";
          position: absolute;
          width: 66px;
          height: 58px;
          background: url("../assets/svg/color-range-icon.svg");
          background-repeat: no-repeat;
          background-position: center;
          left: 0;
        }
      }

      &--departure-client {
        &::before {
          content: "";
          position: absolute;
          width: 66px;
          height: 58px;
          background: url("../assets/svg/car-icon.svg");
          background-repeat: no-repeat;
          background-position: center;
          left: 0;
        }

        a {
          font-weight: 600;
          text-decoration: none;
        }
      }

      &--remeber {
        &::before {
          content: "";
          position: absolute;
          width: 66px;
          height: 58px;
          background: url("../assets/svg/picture.svg");
          background-repeat: no-repeat;
          background-position: center;
          left: 0;
        }
      }

      &--exp {
        &::before {
          content: "";
          position: absolute;
          width: 66px;
          height: 58px;
          background: url("../assets/svg/exp-icon.svg");
          background-repeat: no-repeat;
          background-position: center;
          left: 0;
        }
      }

      &-title {
        font-weight: 600;
        font-size: 20px;
        line-height: 26px;

        color: #1f3744;
        margin-bottom: 13px;
      }

      &-desc {
        font-size: 16px;
        line-height: 28px;

        color: #3c445e;
      }
    }
  }
}

.slider-img {
  width: 570px;
  height: 430px;

  background: url("../assets/slide-1.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
}

.swiper-container {
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  list-style: none;
  padding: 0;
  z-index: 1;
  height: 430px;
}
.swiper-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  box-sizing: content-box;
}

.swiper-slide {
  flex-shrink: 0;
  width: 570px !important;
  height: 100%;
  position: relative;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-button {
  &-prev {
    transform: rotate(180deg);
    position: relative;
    border: 1px solid #ffb932;
    border-radius: 100px;
    box-sizing: border-box;
    width: 62px;
    height: 62px;
    &::before {
      content: "";
      position: absolute;
      width: 18px;
      height: 19px;
      background: url("../assets/svg/arrow-slide.svg");
      background-repeat: no-repeat;
      background-position: center;
      left: calc(50% - 9px);
      top: calc(50% - 9px);
    }
  }

  &-next {
    position: relative;
    border: 1px solid #ffb932;
    border-radius: 100px;
    box-sizing: border-box;
    width: 62px;
    height: 62px;

    &::before {
      content: "";
      position: absolute;
      width: 18px;
      height: 19px;
      background: url("../assets/svg/arrow-slide.svg");
      background-repeat: no-repeat;
      background-position: center;
      left: calc(50% - 9px);
      top: calc(50% - 9px);
    }
  }
}

.exemple-slider {
  &-container {
    display: flex;
    justify-content: space-between;
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 135px;

    margin-bottom: 48px;

    .control-container {
      display: flex;
      width: 154px;
      justify-content: space-between;
    }
  }
  &-title {
    font-size: 34px;
    line-height: 41px;

    color: #1f3744;
  }
}

.slider-img-text-container {
  width: 530px;
  height: 139px;
  left: 155px;
  top: 371px;

  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(6px);

  border-radius: 5px;

  margin-bottom: 20px;

  .more-info {
    display: block;
    text-decoration: none;
    width: 89px;
    position: relative;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;

    text-align: center;

    color: #163993;
    margin-left: 20px;

    &::before {
      width: calc(100% - 14px);
      display: block;
      content: "";
      position: absolute;
      opacity: 0.3;

      border: 7px solid #ffb932;
      border-top-width: 4px;
      border-bottom-width: 2px;
      top: 14px;
    }
  }
}

.slider-text {
  font-size: 20px;
  line-height: 26px;

  text-align: left;

  color: #1f3744;
  padding: 26px 20px 22px 20px;
}
</style>

