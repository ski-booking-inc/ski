<template>
  <div class="home">
    <img src="../assets/img/skilogo.png" alt="logo">
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  created(){
     setTimeout( () => this.$router.push({ path: '/Main1'}), 2500);
   }
}
</script>
<style scoped lang="scss">
  @import "../scss/main";

  .home {
    background-image:url('../assets/img/mountains.jpg');
    background-size: cover;
    background-position: center;
    margin: 0;
    height: 100vh;
    width: 100vw;
    @extend %center;

    img {
      width: 13rem;
      margin-top: -5rem;
    }
  }

</style>
