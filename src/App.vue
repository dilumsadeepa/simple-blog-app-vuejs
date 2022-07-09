<script setup>
import { RouterLink, RouterView } from 'vue-router'
import './assets/boostrap/bootstrap.bundle.min.js'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <!--header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header-->
  <NavBar />

  <RouterView />
</template>

<style>
  @import './assets/boostrap/bootstrap.min.css';

</style>
