<template>
  <main class="userInfo">
    <div class="heading">
        <h1>User Info</h1>
    </div>
  <form class="text"> 
         <div>
          <label for="form_firstname">Förnamn </label>
          <input id="form_firstname" type="text" name="firstname" placeholder="Förnamn *" required="required" data-error=" Lägg till förnamn." v-model="userInput.firstName">
         </div>
         <div>
          <label for="form_lastname">Efternamn </label>
          <input id="form_lastname" type="text" name="surname" placeholder="Efternamn *" required="required" data-error=" Lägg till efternamn." v-model="userInput.lastName">
         </div>
        <hr/>
         <div>
          <label for="form_weight">Vikt </label>
          <input id="form_weight" type="Number" name="weight" placeholder="Vikt *" required="required" data-error=" Lägg till din vikt." v-model="userInput.weight">
         </div>
         <div>
          <label for="form_lenght">Längd </label>
          <input id="form_length" type="Number" name="lenght" placeholder="Längd *" required="required" data-error=" Lägg till din längd." v-model="userInput.lenght">
         </div>
         <div>
          <label for="form_shoe">Skostorlek </label>
          <input id="form_shoe" type="text" name="Number" placeholder="Skostorlek *" required="required" data-error=" Lägg till din skostorlek." v-model="userInput.shoe">
         </div>
  </form>
  <form class="box">
    <div>
      <h3>Hjälm? | Gratis</h3><input type="checkbox"  value="helmet" name="helmet" id="form_helmet" v-model="userInput.helmet"><br>
      <h3>Skidglasögon? | + 49:-</h3><input type="checkbox" value="skigoogles" name="skigoogles" id="form_skigoogles" v-model="userInput.skigoogles"><br>
      <h3>Liftkort? | + 1099 :-</h3><input type="checkbox" value="lift" name="lift" id="form_lift" v-model="userInput.lift"><br>
    </div>
  </form>
    {{userInput}}
  </main>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'userInfo',
  data() {
    return{
      userInput: {}
    }
  }
}
</script>

<style lang="scss" scoped>

main {
  display: grid;
  grid-template-areas: 
  "heading"
  "text"
  "box";

    .heading {
      grid-area: heading;
    }
    .text {
      grid-area: text;
    }
    .box {
      grid-area: box;
      display: flex;
      justify-content: center;
      align-items: center;

      h3 {
        padding: 0 1rem 0 1rem;
        display: inline;
    }
  }
}
</style>
