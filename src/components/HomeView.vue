<template>
  <div class="service">
    <h1>услуги</h1>
    <button class="service__button" @click="router.push({ path: '/services' })">
      Вызвать официанта
    </button>
    <nav>
      <button class="home__button" @click="router.push({ path: '/' })">
        Главная
      </button>
      <button class="orders__button" @click="router.push({ path: '' })">
        Мои заказы
      </button>
    </nav>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
</script>
<style scoped>
.service {
  position: relative;
  width: 393px;
  height: 852px;
  background-color: #496172;
}
.service__button {
  width: 363px;
  height: 60px;
  border-radius: 12px;
  margin-top: 20px;
  color: #415263;
}
h1 {
  font-size: 32px;
  color: #fff;
  padding-top: 39px;
  text-transform: uppercase;
}

nav {
  border-top: 1px solid #e7bda6;
  display: flex;
  flex-direction: row;
  margin-top: 561px;
}
.home__button,
.orders__button {
  cursor: pointer;
  color: #fff;
  background-color: #496172;
  position: relative;
  padding-top: 15px;
  width: 177px;
  height: 82px;
  border: none;
  font-size: 18px;
}
.home__button {
  color: #e7bda6;
}
.home__button:after {
  content: '';
  position: absolute;
  top: 10px;
  left: 76px;
  width: 24px;
  height: 24px;
  background: url(/public/img/home-icon.png) center no-repeat;
}
.orders__button:after {
  content: '';
  position: absolute;
  top: 10px;
  left: 76px;
  width: 24px;
  height: 24px;
  background: url(/public/img/view-list-icon.png) center no-repeat;
}
</style>
