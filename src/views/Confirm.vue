<template>
  <div class="confirm">
    <img src="../assets/img/circle.png" alt="logo">
    <section>
      <p>Välkommen, vi ser fram emot att se dig i backen! Din bekräftelse finns inne på mina sidor!</p>
    </section>
    <section class="back">
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
  margin: 7em 3rem 0 3em;
  border-radius: 3em;
  flex-direction: column;
  max-height: 100vh;
  color: white;
  background: hsla(0, 0%, 100%, 0.62);
}

p {
  margin: 2em;
}

.back {
  align-self: center;
  margin-top: 3rem;
  .knapp {
    border-radius: 50%;
    background: #86d6f8;
    padding: 10px 15px;
    text-decoration: none;
    color: white;
    font-weight: bold;
    box-shadow: 0 0 3px #7cd1f9;
  }
}

img {
  padding: 5em 0 0 0;
  height: 5em;
  width: 5em;
}
</style>