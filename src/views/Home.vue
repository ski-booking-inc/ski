<template>
  <div class="home">

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  created(){
     setTimeout( () => this.$router.push({ path: '/Main'}), 3000);
   }
}
</script>
