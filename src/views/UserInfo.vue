<template>
  <main class="userInfo">
    <div class="heading">
        <h3>Och lite uppgifter om den åkade...</h3>
    </div>
    <form class="text" @submit.prevent="onSubmit">
      <div class="right" :class="{error: errors.has('name')}">
        <label>Name:</label>
        <input type="text" name="name" v-validate="'required'" v-model="userInput.name">
      </div>
      <div class="right" :class="{error: errors.has('weight')}">
        <label>Vikt:</label>
        <input type="number" name="weight" v-validate="'required'" v-model="userInput.weight">
      </div>
      <div class="right" :class="{error: errors.has('length')}">
        <label>Längd: </label>
        <input type="number" name="length" v-validate="'required'" v-model="userInput.length">
      </div>
      <div class="right" :class="{error: errors.has('shoe')}">
        <label>Skostorlek</label>
        <input type="number" name="shoe" v-validate="'required'" v-model="userInput.shoe">
      </div>
        <hr/>
        <div class="box">
          <label for="helmet">Hjälm? Gratis</label>
          <input id="helmet" type="checkbox"  value="helmet"  v-model="userInput.helmet"><br>
          <label for="skigoogles">Skidglasögon? + 49:-</label>
          <input id="skigoogles" type="checkbox" value="skigoogles"  v-model="userInput.skigoogles"><br>
          <label for="lift">Liftkort? + 1099:-</label>
          <input id="lift" type="checkbox" value="lift"  v-model="userInput.lift"><br>
        </div> 
      <button type="submit">Lägg till</button>
    </form>
  </main>
</template>

<script>
  // @ is an alias to /src
import VeeValidate from "vee-validate";

export default {
    name: 'userInfo',
    data() {
      return {
        userInput: {
          name: '',
          weight: null,
          length: null,
          shoe: null,
          helmet: false,
          skigoogles: false,
          lift: false,
        }
      }
    },
  methods: {
    onSubmit() {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.inputFromUser();
        }
      });
    },
    inputFromUser: function() {
      this.$store.dispatch('addInput', this.userInput)
      this.$store.dispatch('testing', this.userInput)
      this.$router.push('/cart')
    }
  }
}
</script>

<style lang="scss">
  @import "../scss/main";

  html {

    main {
      div.error {
        color: #be0300;
      }
      .heading {
        h3 {
          font-size: 1rem;
          font-weight: 900;
        }
      }

      .text {
        flex-direction: column;

        .right {
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
          color: white;
          font-weight: 800;
          border-radius: 10px;
          padding: .5rem;
        }
      }

      .box {
        display: flex;
        label {
          font-size: 1rem;
          font-weight: 900;
          padding: 0 1rem;
        }

        .right {
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
    #btn {
      padding: .5rem 1rem;
      background: rgb(130, 150, 218);
      color: white;
    }
}

</style>
