<template>
  <div class="footer">
    <div class="footer-container">
      <div class="footer-left">
        <div class="footer-logo"></div>

        <ul class="footer-list footer-list-info">
          <li class="footer-list-info-item footer-list-info-item--work-time">Мы открыты</li>
          <li
            class="footer-list-info-item footer-list-info-item--phone"
          >(4812) 63-37-37 | (903) 649-37-37</li>
          <li
            class="footer-list-info-item footer-list-info-item--location"
          >Смоленск, пр-т Гагарина 7</li>
        </ul>
        <ul class="footer-social-list">
          <li class="footer-social-list__item">
            <a class="footer-social-list__item--vk" href></a>
          </li>
          <li class="footer-social-list__item">
            <a class="footer-social-list__item--fcb" href></a>
          </li>
          <li class="footer-social-list__item">
            <a class="footer-social-list__item--inst" href></a>
          </li>
        </ul>
      </div>
      <div class="footer-right">
        <ul class="footer-list footer-list-nav">
          <li class="footer-list-nav__item">
            <a href class="footer-list-nav__item-text">Каталог</a>
          </li>
          <li class="footer-list-nav__item">
            <a href class="footer-list-nav__item-text">Подбор материала</a>
          </li>
          <li class="footer-list-nav__item">
            <a href class="footer-list-nav__item-text">Акции</a>
          </li>
          <li class="footer-list-nav__item">
            <a href class="footer-list-nav__item-text">Услуги</a>
          </li>
          <li class="footer-list-nav__item">
            <a href class="footer-list-nav__item-text">Портфолио</a>
          </li>
          <li class="footer-list-nav__item">
            <a href class="footer-list-nav__item-text">Блог</a>
          </li>
          <li class="footer-list-nav__item">
            <a href class="footer-list-nav__item-text">О нас</a>
          </li>
          <li class="footer-list-nav__item">
            <a href class="footer-list-nav__item-text">Контакты</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer-bot">
      <div class="footer-bot-copiright">© 2019 «Мастерская цвета» Смоленск</div>
      <a href class="footer-bot-conf">Политика конфиденциальности</a>
      <div class="footer-bot-develop-logo"></div>
    </div>
  </div>
</template>

<style lang="scss">
.footer {
  height: 440px;
  background: linear-gradient(106.99deg, #163993 0%, #0c4f9d 100%);

  &-container {
    padding-top: 80px;
    width: 1170px;
    margin: 0 auto;
    display: flex;

    margin-bottom: 48px;
  }

  &-left,
  &-right {
    width: 50%;
  }
  &-logo {
    width: 227px;
    height: 50px;
    background: url("../assets/svg/logo-white.svg");
    margin-bottom: 38px;
  }

  &-list {
    display: flex;
    flex-direction: column;
    width: 100%;

    &-info {
      font-size: 14px;
      line-height: 17px;
      color: #656f86;
      margin-bottom: 14px;

      &-item {
        position: relative;
        font-size: 18px;
        line-height: 22px;
        margin-bottom: 16px;

        color: #ffffff;
        padding-left: 25px;

        &::before {
          bottom: calc(50% - 8px);
          left: 0;
        }
        &--work-time {
          &::before {
            content: "";
            position: absolute;
            width: 16px;
            height: 16px;
            background: url("../assets/svg/clock-footer.svg");
            background-repeat: no-repeat;
          }
        }

        &--location {
          &::before {
            content: "";
            position: absolute;
            width: 16px;
            height: 16px;
            background: url("../assets/svg/geo-footer.svg");
            background-repeat: no-repeat;
          }
        }

        &--phone {
          &::before {
            content: "";
            position: absolute;
            width: 16px;
            height: 16px;
            background: url("../assets/svg/phone-footer.svg");
            background-repeat: no-repeat;
          }
        }
      }
    }

    &-nav {
      flex-wrap: wrap;
      height: 205px;
      &__item {
        margin-bottom: 26px;

        &-text {
          text-decoration: none;
          display: block;
          font-size: 18px;
          line-height: 21px;

          color: #9fb4ff;
        }
      }
    }
  }

  &-social {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    height: 90px;
    width: 144px;
    &-phone {
      width: 144px;
      position: relative;
      font-weight: 600;
      font-size: 18px;
      line-height: 21px;

      text-align: center;

      color: #163993;

      &::before {
        width: calc(100% - 14px);
        display: block;
        content: "";
        position: absolute;
        opacity: 0.3;
        /* Decor / Orange */

        border: 7px solid #ffb932;
        border-top-width: 4px;
        border-bottom-width: 2px;
        top: 14px;
      }
    }

    &-list {
      display: flex;
      width: 114px;
      justify-content: space-between;
      &__item {
        a {
          display: block;
          width: 26px;
          height: 24px;
        }
        position: relative;

        &--vk {
          background: url("../assets/svg/vk-footer.svg");
          background-position: center;
          background-repeat: no-repeat;
        }
        &--fcb {
          background: url("../assets/svg/fcb-footer.svg");
          background-position: center;
          background-repeat: no-repeat;
        }
        &--inst {
          background: url("../assets/svg/inst-footer.svg");
          background-position: center;
          background-repeat: no-repeat;
        }
      }
    }
  }

  &-bot {
    width: 1170px;
    margin: 0 auto;
    display: flex;
    align-items: center;

    &-copiright {
      font-size: 14px;
      line-height: 18px;

      color: #6b83da;
      margin-right: 28px;
    }

    &-conf {
      text-decoration: none;
      display: block;
      font-size: 14px;
      line-height: 18px;

      color: #9fb4ff;
    }

    &-develop-logo {
      margin-left: auto;
      position: relative;
      width: 139px;
      height: 33px;
      background: url("../assets/develop-text.png");
      &::after {
        position: absolute;
        width: 26px;
        height: 26px;
        content: "";
        display: block;
        background: url("../assets/svg/develop-logo.svg");
        left: -33px;
        bottom: calc(50% - 13px);
        background-repeat: no-repeat;
        background-position: center;
      }
    }
  }
}
</style>

