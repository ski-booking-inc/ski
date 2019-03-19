<template>
  <div class="home">
    <p>Hej!</p>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
/*  created(){
     setTimeout( () => this.$router.push({ path: '/Main1'}), 8000);
   }*/
}
</script>
<style scoped lang="scss">

  .home {
    background-image:url('../assets/img/mountains.jpg');

background-size: cover;
background-position: center;
margin: 0;
height: 100vh;
width: 100vw;


  }

</style>
