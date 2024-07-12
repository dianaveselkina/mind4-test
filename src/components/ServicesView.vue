<template>
  <div class="service">
    <h1>
      вызов<br />
      официанта
    </h1>
    <div class="form">
      <label>Имя</label>
      <input type="text" placeholder="Константин Константинов" />
    </div>
    <div class="form">
      <label>Телефон</label>
      <input
        type="tel"
        name="phone"
        placeholder="(...) ...-..-.."
        pattern="[(][0-9]{3}[)] [0-9]{3}-[0-9]{2}-[0-9]{2}"
        required
      />
    </div>
    <div class="form">
      <label>Локация</label>
      <input type="text" placeholder="Piazetta" />
    </div>
    <div class="form">
      <label>Комментарий</label>
      <textarea placeholder="введите текст сообщения..."></textarea>
    </div>

    <button class="service__button">Вызвать</button>
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
  width: 393px;
  height: 852px;
  background-color: #496172;
}
h1 {
  font-size: 32px;
  color: #fff;
  padding-top: 39px;
  text-transform: uppercase;
}
.form {
  margin: 12px 15px;
  padding: 12px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-bottom: 1px solid #e7bda6;
}
label {
  color: #f4f1ed;
  font-size: 16px;
}
input {
  width: 363px;
  background: transparent;
  border: 0;
  padding: 12px 0;
}
textarea {
  width: 363px;
  height: 50px;
  background: transparent;
  overflow: hidden;
  resize: none;
  border: 0;
}
::placeholder {
  color: #f4f1ed;
  font-size: 18px;
}
.service__button {
  width: 363px;
  height: 60px;
  border-radius: 12px;
  margin-top: 20px;
  color: #415263;
  background-color: #e7bda6;
}
nav {
  border-top: 1px solid #e7bda6;
  display: flex;
  flex-direction: row;
  margin-top: 130px;
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
