<template>
  <div class="main">
    <section>
      <h1>Välkommen till Fjällgårdens skidanläggning</h1>
      <p>Hyr din utrustning hos oss på Fjällgården och få mer utav din semester. Vi anpassar utrustningen efter dina behov och du hämtar enkelt ut den precis vid backen.</p>
    </section>
    <section>
      <a class="btn" href="#" @click="$router.push('/products')">Boka utrustning</a>
      <a class="btn" href="#" @click="$router.push('/login')">Mina bokningar</a>
    </section>
    <section class="logo">
      <img src="../assets/img/Vector.png" alt="admin" @click="$router.push('/login')">
    </section>
    <router-view/>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../scss/main";

.main {
  margin: 0 1.5rem;
  @extend %center;
  flex-direction: column;
  max-height: 100vh;
  color: white;
}

.logo {
  align-self: start;
  margin-top: 3rem;
}

</style>
