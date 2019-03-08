<template>
  <section class="age">
    <h2>Välj ålder</h2>
    <a class="btn" href="#" @click="$router.push(`/age/level`)">Vuxen 16+</a>
    <a class="btn" href="#" @click="$router.push(`/age/level`)">Ungdom 7-15år</a>
    <a class="btn" href="#" @click="$router.push(`/age/level`)">Barn 0-6år</a>
    <router-view/>
  </section>
</template>

<script>
export default {
  name: "age"
};
</script>

<style lang="scss">
@import "../scss/main";

.age {
  @extend %center;
  flex-direction: column;
}
</style>
