<template>
  <footer>
    <p>Copyright &copy; 2021</p>
    <!-- this will link to the about page without reloading the page -->
    <router-link to="/about">About</router-link> 
  </footer>
</template>

<style scoped>
a {
  color: #333;
}
footer {
  margin-top: 30px;
  text-align: center;
}
</style>