<template>
  <main class="signup">
  <img src="../assets/img/snowboarder.jpg" alt="skier">
    <article>
      <input v-model="username" type="text" class="username" placeholder="Användarnamn" :class="{ valid : validUsername, rejected : rejected}">
      <input v-model="password" type="password" placeholder="Lösenord" :class="{ valid : validPassword }">
      <p>Fyll i och tryck Registrera för att skapa konto.</p>
    </article>
    <a href="#" class="btn" @click="signup" :class="{ ready : validPassword && validUsername }">Registrera</a>
  </main>
</template>

<script>
export default {
  name: "signup",
  data() {
    return {
      username: "",
      password: "",
      validUsername: false,
      validPassword: false
    };
  },
  methods: {
    signup() {
      if (this.validUsername && this.validPassword) {
        this.$store.dispatch("signup", {
          username: this.username,
          password: this.password,
          role: 'user'
        });

        if (this.checkBooking == false) {
          this.$router.push('/main1')
        } else {
          this.$router.push('/cart')
        }
      }
    }
  },
  watch: {
    username(val) {
      if (val.length >= 3) {
        this.validUsername = true;
      } else {
        this.validUsername = false;
      }
    },
    password(val) {
      if (val.length > 3) {
        this.validPassword = true;
      } else {
        this.validPassword = false;
      }
    }
  },
  computed: {
    rejected() {
      return this.$store.state.rejected;
    },
    checkBooking () {
      return this.$store.getters.userBookings;
    },
    activeUser () {
      return this.$store.getters.getActiveUser;
    }
  }
};
</script>

<style lang="scss">
@import "../scss/main";

  .signup {
    @extend %center;
    flex-direction: column;
    justify-content: flex-end;
    background: white;
    height: 100vh;

    article {
      flex:1;
    }

    img {
      left: 0;
      width: 100vw;
      flex: 1;
    }

    .valid {
      background: rgba(0, 128, 0, 0.212);
    }
    .rejected{
      background: rgba(255, 0, 0, 0.151);
    }
    input {
      border: none;
      padding: .5rem;
      font-size: 1rem;
      height: 2rem;
      border-top: 1px solid gray;
      border-radius: 4px;
      background: lightgray;
      margin: .5rem;
      border: 1px solid black;

    }
  }

</style>
