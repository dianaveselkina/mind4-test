<template>
  <div class="service">
    <h1>
      вызов<br />
      официанта
    </h1>
    <form @submit.prevent="submitForm">
      <div class="form">
        <label>Имя</label>
        <input
          v-model="name"
          type="text"
          placeholder="Константин Константинов"
        />
      </div>
      <div class="form">
        <label>Телефон</label>
        <input
          type="tel"
          name="phone"
          placeholder="+7(...) ...-..-.."
          pattern="^\+7\([1-9]{3}\)[1-9]{3}-[1-9]{2}-[1-9]{2}$"
          required
          v-model="phone"
        />
      </div>
      <div class="form">
        <label>Локация</label>
        <input placeholder="Piazetta" v-model="location" />
      </div>
      <div class="form">
        <label>Комментарий</label>
        <textarea
          placeholder="введите текст сообщения..."
          v-model="comment"
        ></textarea>
      </div>
      <button type="submit" class="service__button">Вызвать</button>
    </form>
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
import { ref } from 'vue';
import axios from 'axios';

const name = ref('');
const phone = ref('');
const location = ref('');
const comment = ref('');

function submitForm() {
  axios({
    method: 'post',
    url: 'https://webhook.site/994c8d78-82a5-4981-bc1a-3f00cfea293f',
    params: {
      user_key_id: 'USER_KEY_ID',
    },
    data: {
      name: 'name.value',
      phone: 'phone.value',
      location: 'location.value',
      comment: 'comment.value',
    },
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(function (response) {
      console.log('Ответ сервера успешно получен!');
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}
</script>
<style scoped>
.service {
  width: 393px;
  height: 852px;
  background-color: #496172;
}
h1 {
  font-family: Journal Sans New;
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
  font-family: Journal Sans New;
  font-size: 16px;
}
input {
  width: 363px;
  background: transparent;
  border: 0;
  padding: 12px 0;
  font-family: Journal Sans New;
  font-size: 18px;
}
textarea {
  font-family: Journal Sans New;
  font-size: 18px;
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
  font-family: Journal Sans New;
  font-size: 18px;
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
  margin-top: 110px;
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
  font-family: Journal Sans New;
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
