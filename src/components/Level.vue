<template>
  <section class="level">
    <h2>Välj din åknivå</h2>
    <a class="btn" href="#">Nybörjare</a>
    <a class="btn" href="#">Medelmåtta</a>
    <a class="btn" href="#">Proffs</a>
  </section>
</template>

<script>
export default {
  name: "level"
};
</script>

<style lang="scss">
@import "../scss/main";

.level {
  @extend %center;
  flex-direction: column;
}
</style>
