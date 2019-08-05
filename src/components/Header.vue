<template>
  <div class="header">
    <div class="header-container">
      <div class="header-logo"></div>
      <div class="header-lists">
        <ul class="header-list header-list-info">
          <li class="header-list-info-item header-list-info-item--work-time">Мы открыты</li>
          <li
            class="header-list-info-item header-list-info-item--location"
          >Смоленск, пр-т Гагарина 7</li>
          <li
            class="header-list-info-item header-list-info-item--phone"
          >(4812) 63-37-37 | (903) 649-37-37</li>
        </ul>
        <ul class="header-list header-list-nav">
          <li @click="show" v-click-outside="hide" class="header-list-nav-item">
            <div class="header-list-nav-item-text">Каталог</div>
            <div class="drop-menu" v-show="isClick">
              <ul class="drop-menu-list">
                <li class="drop-menu-list-item">
                  <a href="test">Краски</a>
                </li>
                <li class="drop-menu-list-item">
                  <a href="test">Эмали</a>
                </li>
                <li class="drop-menu-list-item">
                  <a href="test">Грунтовки и пропиткики</a>
                </li>
                <li class="drop-menu-list-item">
                  <a href="test">Лаки</a>
                </li>
                <li class="drop-menu-list-item">
                  <a href="test">Декоративные краски и шукатурки</a>
                </li>
                <li class="drop-menu-list-item">
                  <a href="test">Декоративный камень и лепнина</a>
                </li>
                <li class="drop-menu-list-item">
                  <a href="test">Фотообои и фрески</a>
                </li>
                <li class="drop-menu-list-item">
                  <a href="test">Малярный инструмент</a>
                </li>
              </ul>
            </div>
          </li>
          <li class="header-list-nav-item">
            <div class="header-list-nav-item-text">Подбор материала</div>
          </li>
          <li class="header-list-nav-item">
            <div class="header-list-nav-item-text">Услуги</div>
          </li>
          <li class="header-list-nav-item">
            <div class="header-list-nav-item-text">Акции</div>
          </li>
          <li class="header-list-nav-item">
            <div class="header-list-nav-item-text">Портфолио</div>
          </li>
          <li class="header-list-nav-item">
            <div class="header-list-nav-item-text">Контакты</div>
          </li>
        </ul>
      </div>
      <div class="header-social">
        <div class="header-social-phone">Заказать звонок</div>
        <ul class="header-social-list">
          <li class="header-social-list__item">
            <a class="header-social-list__item--vk" href></a>
          </li>
          <li class="header-social-list__item">
            <a class="header-social-list__item--fcb" href></a>
          </li>
          <li class="header-social-list__item">
            <a class="header-social-list__item--inst" href></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import ClickOutside from "vue-click-outside";

export default {
  data() {
    return {
      isClick: false
    };
  },

  methods: {
    show() {
      this.isClick = !this.isClick;
      console.log("click");
    },

    hide() {
      this.isClick = false;
      console.log("click");
    }
  },

  directives: {
    ClickOutside
  }
};
</script>


<style lang="scss">
.header {
  background: #ffffff;
  box-shadow: 0px 4px 22px rgba(17, 8, 63, 0.1);
  height: 116px;

  &-container {
    height: 100%;
    width: 1440px;
    padding: 0 135px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &-logo {
    width: 227px;
    height: 50px;
    background: url("../assets/svg/logo.svg");
  }

  &-lists {
    height: 90px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 670px;
  }

  &-list {
    display: flex;
    width: 100%;
    justify-content: space-between;
    &-info {
      font-size: 14px;
      line-height: 17px;
      color: #656f86;
      padding-left: 15px;
      padding-right: 15px;

      &-item {
        position: relative;
        &--work-time {
          padding-left: 19px;
          &::before {
            content: "";
            position: absolute;
            width: 16px;
            height: 16px;
            background: url("../assets/svg/clock.svg");
            background-repeat: no-repeat;
            left: 0;
          }
        }

        &--location {
          padding-left: 15px;
          &::before {
            content: "";
            position: absolute;
            width: 16px;
            height: 16px;
            background: url("../assets/svg/geo-point.svg");
            background-repeat: no-repeat;
            left: 0;
          }
        }

        &--phone {
          padding-left: 19px;
          &::before {
            content: "";
            position: absolute;
            width: 16px;
            height: 16px;
            background: url("../assets/svg/phone.svg");
            background-repeat: no-repeat;
            left: 0;
          }
        }
      }
    }

    &-nav {
      font-size: 16px;
      line-height: 19px;
      font-weight: 600;

      color: #3c445e;

      &-item {
        cursor: pointer;
        padding-left: 15px;
        padding-right: 18px;
        position: relative;
        &:hover {
          &::before {
            display: block;
            position: absolute;
            content: "";
            width: 100%;

            height: 2px;
            left: 0;
            bottom: -26px;
            background: #163993;
          }
        }

        &:nth-child(1),
        &:nth-child(2),
        &:nth-child(3) {
          .header-list-nav-item-text {
            position: relative;
            &::before {
              content: "";
              position: absolute;
              width: 11px;
              height: 6px;
              background: url("../assets/svg/arrow.svg");
              background-repeat: no-repeat;
              right: -14px;
              bottom: calc(50% - 5.5px);
            }
          }
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
      justify-content: space-around;
      &__item {
        a {
          display: block;
          width: 26px;
          height: 24px;
        }
        position: relative;

        &--vk {
          background: url("../assets/svg/vk-icon.svg");
          background-position: center;
          background-repeat: no-repeat;
        }
        &--fcb {
          background: url("../assets/svg/fcb-icon.svg");
          background-position: center;
          background-repeat: no-repeat;
        }
        &--inst {
          background: url("../assets/svg/inst-icon.svg");
          background-position: center;
          background-repeat: no-repeat;
        }
      }
    }
  }
}

.drop-menu {
  position: absolute;
  z-index: 20;
  width: 291px;
  height: 506px;
  top: 57px;
  left: 1px;
  background: #ffffff;

  border: 1px solid #e5e8f0;

  box-shadow: 0px 4px 30px rgba(7, 26, 68, 0.16);

  &-list {
    height: 100%;
    display: flex;
    flex-direction: column;

    &-item {
      cursor: pointer;
      margin: 0 16px;
      border-bottom: 1px solid #e5e8f0;
      text-align: left;
      font-size: 16px;
      line-height: 21px;

      a {
        text-decoration: none;
        color: #3c445e;
        display: block;
        padding: 18px 0;
      }

      &:hover {
        a {
          color: #163993;
        }
      }

      &:last-child {
        border: none;
      }
    }
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 20px;
    top: -21px;
    border: 10px solid transparent;
    border-bottom: 10px solid #e5e8f0;
  }
  &::after {
    border-bottom: 10px solid white;
    top: -19px;
  }
}
</style>

