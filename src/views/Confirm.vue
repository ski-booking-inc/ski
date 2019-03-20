<template>
  <div class="confirm">
  <section class="textbox">
    <img src="../assets/img/skilogo.png" alt="logo">
    <section>
      <h1>Tack för din bokning!</h1>
      <p>Välkommen, vi ser fram emot att se dig i backen! Din bekräftelse finns under Mina bokningar!</p>
    </section>
    <a class="knapp" href="#" @click="$router.push('/main1')">X</a>
    </section>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: "confirm"
};
</script>

<style lang="scss">
@import "../scss/main";

.confirm {
  background-image:url('../assets/img/mountains.jpg');
  background-size: cover;
  background-position: center;
  margin: 0;
  height: 100vh;
  width: 100vw;
  @extend %center;
  flex-direction: column;

  .textbox {
    background: #ffff;
    opacity: .9;
    flex: 1;
    margin: 2rem 1.5rem 2rem 1.5rem;
    border-radius: 15px;
    padding: .5rem;
  }

  img {
    width: 13rem;
    margin-top: 4rem;
  }
  p {
    margin-bottom: 5rem;
  }

}

p {
  margin: 2em;
}
  .knapp {
    border-radius: 50%;
    background: #ff794f;
    padding: 12px 18px;
    text-decoration: none;
    color: white;
    font-weight: bold;
    font-size: 1.7rem;
    box-shadow: 0 0 3px #7cd1f9;
  }

</style>
