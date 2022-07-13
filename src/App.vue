<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import logoUrl from '@/assets/logo.svg'
import resolveOrigin from '@/origin.js'
</script>

<template>
  <div id="vue-remote-app-wrapper">
    <header>
      <img alt="Vue logo" class="logo" :src="resolveOrigin(logoUrl)" width="125" height="125" />

      <div class="wrapper">
        <HelloWorld msg="You did it!" />
      </div>
    </header>

    <main>
      <TheWelcome />
    </main>    
  </div>
</template>

<style>
@import './assets/base.css';

#lfr-vue-remote-app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

#vue-remote-app-wrapper header {
  line-height: 1.5;
}

#vue-remote-app-wrapper .logo {
  display: block;
  margin: 0 auto 2rem;
}

#vue-remote-app-wrapper a,
#vue-remote-app-wrapper .green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  #vue-remote-app-wrapper a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

@media (min-width: 1024px) {
  #lfr-vue-remote-app {
    display: flex;
    place-items: center;
  }

  #lfr-vue-remote-app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  #lfr-vue-remote-app header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--vt-section-gap) / 2);
  }

  #lfr-vue-remote-app header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  #lfr-vue-remote-app .logo {
    margin: 0 2rem 0 0;
  }
}
</style>
