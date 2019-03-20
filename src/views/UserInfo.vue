<template>
  <main class="userInfo">
    <section class="base">
      <form @submit.prevent="onSubmit">
        <h1>Åkaruppgifter</h1>
        <div class="right" :class="{error: errors.has('name')}">
          <label>Namn</label><br>
          <input type="text" minlength="2" name="name" v-validate="'required'" v-model="userInput.name">
        </div>
        <div class="right" :class="{error: errors.has('weight')}">
          <label>Vikt(kg)</label><br>
          <input type="number" minlength="2" maxlength="3" name="weight" v-validate="'required'" v-model="userInput.weight">
        </div>
        <div class="right" :class="{error: errors.has('length')}">
          <label>Längd(cm)</label><br>
          <input type="number" minlength="2" maxlength="3" name="length" v-validate="'required'" v-model="userInput.length">
        </div>
        <div class="right" :class="{error: errors.has('shoe')}">
          <label>Skostorlek</label><br>
          <input type="number" minlength="2" maxlength="2" name="shoe" v-validate="'required'" v-model="userInput.shoe">
        </div>
        <hr>
          <div class="box">
            <h1>Tillval</h1>
            <div>
              <label for="helmet">Hjälm | 49:-</label>
              <input id="helmet" type="checkbox" value="helmet" v-model="userInput.helmet"><br>
              <label for="skigoogles">Skidglasögon | 69:-</label>
              <input id="skigoogles" type="checkbox" value="skigoogles" v-model="userInput.skigoogles"><br>
              <label for="lift">Liftkort | 499:-</label>
              <input  id="lift" type="checkbox" value="lift" v-model="userInput.lift">
            </div>
          </div>
          <button id="btn" type="submit">Lägg i varukorg</button>
      </form>
    </section>
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
  .userInfo {
    background-image:url('../assets/img/skier.jpg');
    background-size: cover;
    background-position: left;
    height: 100vh;
    width: 100vw;
    @extend %center;
    flex-direction: column;

    hr {
      border: 0;
      margin-top: 1em;
      height: 2px;
      background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(255, 255, 255, 0.75), rgba(0, 0, 0, 0));
    }

    h1 {
      margin-top: 0;
      text-align: center;
    }

    div.error {
      color: #ff794f;
    }

    .base {
    background: #6e94d1;
    opacity: .9;
    border-radius: 5px;
    color: white;
    margin: .5rem 1.5rem 0 1.5rem;
    padding: 1rem 0 0 0;

      .right {
        label {
          font-size: 1.1rem;
        }
        input {
          background: white;
          color:black;
          border-radius: 10px;
          padding: .7rem;
          width: 10rem;
          height: 1rem;
          border:2px solid white;
        }
      }
      .box {
        text-align: left;
        display: flex;
        flex-direction: column;

        label {
          font-size: 1rem;
          padding: 0;
        }
        input {
          display: flex;
          float: left;
          margin: 0 1rem 0 4.5rem;
        }
      }
    }
    #btn{
      align-self: flex-end;
      width: 20rem;
      font-size: 1rem;
      background: #ff794f;
      margin-top: 2.5em;
      height: 3.8rem;
      color: white;
      text-decoration: none;
      text-transform: uppercase;
      border: none;
    }
  }
}

</style>
