<template>
  <div>
    <nav class="navbar navbar-light">
      <img src="../../icons/treehouse48.png" alt srcset />
      <router-link class="navbar-brand mr-auto" :to="{ name: 'home' }">earthbnb</router-link>
      <router-link class="btn nav-button" :to="{ name: 'second' }">second</router-link>
    </nav>

    <div class="container mt-4 mb-4 pr-4 pl-4">
      <router-view></router-view>
    </div>
  </div>
</template>
