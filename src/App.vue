<template>
  <div class="hero">
    <Login ></Login>
  </div>
</template>

<script>
import Login from './components/Login'
import isHide from './assets/js/script'

import { onMounted } from 'vue'


export default {
  name: 'App',
  components: {
    Login,
  },
  setup() {

    onMounted(() => {
      isHide
    })
            
    
    return {
      
    }
  }
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
  section {
    padding: 3rem 2rem;
  }
  .hero {
    width: 100%;
    min-height: 100vh;
    background:#efdcd6;
    display: flex;
    align-items: center;
    justify-content: center;
  }
 
</style>
