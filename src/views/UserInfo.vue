<template>
  <main class="userInfo">
    <section class="base">
      <form @submit.prevent="onSubmit">
        <h1>Åkaruppgifter</h1>
        <section class="right" :class="{error: errors.has('name')}">
          <label>Namn</label><br>
          <input type="text" minlength="2" name="name" v-validate="'required'" v-model="userInput.name">
        </section>
        <section class="right" :class="{error: errors.has('weight')}">
          <label>Vikt(kg)</label><br>
          <input type="number" minlength="2" maxlength="3" name="weight" v-validate="'required'" v-model="userInput.weight">
        </section>
        <section class="right" :class="{error: errors.has('length')}">
          <label>Längd(cm)</label><br>
          <input type="number" minlength="2" maxlength="3" name="length" v-validate="'required'" v-model="userInput.length">
        </section>
        <section class="right" :class="{error: errors.has('shoe')}">
          <label>Skostorlek</label><br>
          <input type="number" minlength="2" maxlength="2" name="shoe" v-validate="'required'" v-model="userInput.shoe">
        </section>
        <hr>
          <section class="box">
            <h1>Tillval</h1>
            <section>
              <label for="helmet">Hjälm | {{ extras.helmet }}:-</label>
              <input id="helmet" type="checkbox" value="helmet" v-model="userInput.helmet"><br>
              <label for="skigoogles">Skidglasögon | {{ extras.skigoogles }}:-</label>
              <input id="skigoogles" type="checkbox" value="skigoogles" v-model="userInput.skigoogles"><br>
              <label for="lift">Liftkort | {{ extras.lift }}:-</label>
              <input  id="lift" type="checkbox" value="lift" v-model="userInput.lift">
            </section>
          </section>
          <button id="btn" type="submit">Lägg i varukorg</button>
      </form>
    </section>
  </main>
</template>

<script>
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
    computed: {
      extras() {
        return this.$store.getters.extras;
      }
    },
    methods: {
      //On submit VeeValidate is activated
      onSubmit() {
        this.$validator.validateAll().then(result => {
          if (result) {
            this.inputFromUser();
          }
        });
      },
      //Trigger functions to add a booking and userinfo to state
      inputFromUser() {
        this.$store.dispatch('addInput', this.userInput)
        this.$store.dispatch('bookingObj', this.userInput)
        this.$router.push('/cart')
      }
    }
  }
</script>

<style lang="scss">
  @import "../scss/main";

  html {
    .userInfo {
      background-image: url('../assets/img/skier.jpg');
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

      section.error {
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
            padding: 0;
          }

          input {
            background: white;
            color: black;
            border-radius: 10px;
            padding: .7rem;
            width: 10rem;
            height: 1rem;
            border: 2px solid white;
          }
        }

        .box {
          text-align: left;
          display: flex;
          flex-direction: column;

          input {
            display: flex;
            float: left;
            margin: 0 1rem 0 4.5rem;
          }
        }
      }

      #btn {
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
