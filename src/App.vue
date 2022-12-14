<template>
  <div class="hero">
    <Login ></Login>
  </div>
</template>

<script>
import Login from './components/Login'

export default {
  name: 'App',
  components: {
    Login,
  },

}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;300;400;500;700;900&display=swap');

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Noto Sans TC', sans-serif;
    outline: none;
    border: none;
    text-decoration: none;
  }
  html {
    font-size: 62.5%;
  }
  .hero {
    width: 100%;
    min-height: 100vh;
    background-image: linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%);
    align-items: center;
    justify-content: center;
  }
 
</style>
