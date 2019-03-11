<template>
  <main class="userInfo">
    <div class="heading">
        <h3>Och lite uppgifter om den åkade...</h3>
    </div>
  <form class="text"> 
         <div class="right">
          <label for="name">Namn *</label>
          <input id="form_name" type="text"  value="Namn" required="required" data-error=" Lägg till Namn." v-model="userInput.name">
         </div>
         <div class="right">
          <label for="form_weight">Vikt *</label>
          <input id="form_weight" type="Number" value="Vikt"  required="required" data-error=" Lägg till din vikt." v-model="userInput.weight">
         </div>
         <div class="right">
          <label for="form_lenght">Längd *</label>
          <input id="form_length" type="Number" value="Läng"  required="required" data-error=" Lägg till din längd." v-model="userInput.length">
         </div>
         <div class="right">
          <label for="form_shoe">Skostorlek *</label>
          <input id="form_shoe" type="Number" value="shoe"  required="required" data-error=" Lägg till din skostorlek." v-model="userInput.shoe">
         </div>
  </form>
        <hr/>
  <form class="box">
    <div class="right">
      <label for="helmet">Hjälm? | Gratis</label>
      <input id="helmet" type="checkbox"  value="helmet"  v-model="userInput.helmet"><br>
      <label for="skigoogles">Skidglasögon? | + 49:-</label>
      <input id="skigoogles" type="checkbox" value="skigoogles"  v-model="userInput.skigoogles"><br>
      <label for="lift">Liftkort? | + 1099 :-</label>
      <input id="lift" type="checkbox" value="lift"  v-model="userInput.lift"><br>
    </div>
  </form>
  {{userInput}}
  <div><input id="btn" type="button" value="Lägg till" @click="inputFromUser()"></div>
  </main>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'userInfo',
  data() {
    return{
      userInput: {
        name: '',
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
    inputFromUser: function (){
      this.$store.dispatch('addInput', this.userInput)
      }
}
}

</script>

<style lang="scss">

@import "../scss/main";

html{

main {
  .heading {
    h3 {
      font-size: 1rem;
      font-weight: 900;
    }
  }
  .text {
    flex-direction: column;
      .right{
      text-align: right;
      padding: .5rem 15vw 0 0;
     }
      label {
        font-size: 1.1rem;
        font-weight: 900;
      }
      input {
        width: 50%;
        background: rgb(51, 57, 112);
        color:white;
        font-weight: 800;
        border-radius: 10px;
        padding: .5rem;
      }
    }
    .box {
      label {
      font-size: 1.1rem;
      font-weight: 900;
      padding: 0 1rem;
      }
      .right{
      text-align: right;
      padding-right: 15vw;
     }
    }
    #btn {
      padding: .5rem 1rem;
      background: cornflowerblue;
      color: white;
    }
}
.bot {
  bottom:0px;
}
}
</style>
