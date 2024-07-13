<template>
  <router-view />
</template>

<style>
#app {
  font-family: Journal Sans New, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
@font-face {
  font-family: 'Journal Sans New';
  src: url('@/assets/fonts/journal-sans-new.ttf') format('truetype');
}
s body {
  max-width: 1800px;
  margin: 50px auto;
}
* {
  outline: none;
}
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
