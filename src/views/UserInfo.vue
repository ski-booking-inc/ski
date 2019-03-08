<template>
  <main class="userInfo">
    <div class="heading">
        <h1>User Info</h1>
    </div>
  <form class="text"> 
         <div>
          <label for="form_firstname">Förnamn </label>
          <input id="form_firstname" type="text"  value="Förnamn" placeholder="Förnamn *" required="required" data-error=" Lägg till förnamn." v-model="userInput.firstName">
         </div>
         <div>
          <label for="form_lastname">Efternamn </label>
          <input id="form_lastname" type="text" value="Efternamn" placeholder="Efternamn *" required="required" data-error=" Lägg till efternamn." v-model="userInput.lastName">
         </div>
        <hr/>
         <div>
          <label for="form_weight">Vikt </label>
          <input id="form_weight" type="Number" value="Vikt" placeholder="Vikt *" required="required" data-error=" Lägg till din vikt." v-model="userInput.weight">
         </div>
         <div>
          <label for="form_lenght">Längd </label>
          <input id="form_length" type="Number" value="Läng" placeholder="Längd *" required="required" data-error=" Lägg till din längd." v-model="userInput.length">
         </div>
         <div>
          <label for="form_shoe">Skostorlek </label>
          <input id="form_shoe" type="Number" value="shoe" placeholder="Skostorlek *" required="required" data-error=" Lägg till din skostorlek." v-model="userInput.shoe">
         </div>
  </form>
  <form class="box">
    <div>
      <h3>Hjälm? | Gratis</h3><input type="checkbox"  value="helmet"  v-model="userInput.helmet"><br>
      <h3>Skidglasögon? | + 49:-</h3><input type="checkbox" value="skigoogles"  v-model="userInput.skigoogles"><br>
      <h3>Liftkort? | + 1099 :-</h3><input type="checkbox" value="lift"  v-model="userInput.lift"><br>
    </div>
  </form>
  {{userInput}}
  <div><input type="button" value="Lägg till" @click="inputFromUser()"></div>
  </main>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'userInfo',
  data() {
    return{
      userInput: {
        firstName: '',
        lastName: '',
        weight: null,
        length: null,
        shoe:null,
        helmet: false,
        skigoogles: false,
        lift: false,
      }
    }
  },
  methods: {
    inputFromUser: function (userInput){
      console.log(this.userInput);
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
