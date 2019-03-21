<template>
  <main class="signup">
    <article class="field">
      <h2>Fyll i för att registrera dig</h2>
      <input v-model="username" type="text" class="username" placeholder="Användarnamn" :class="{ valid : validUsername, rejected : rejected}">
      <input v-model="password" type="password" placeholder="Lösenord" :class="{ valid : validPassword }">
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
          this.$router.push('/home')
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
  background-image:url('../assets/img/skier.jpg');
  background-size: cover;
  background-position: left;
  height: 100vh;
  width: 100vw;
  @extend %center;
  flex-direction: column;

.field {
    background: #fd825c;
    opacity: .9;
    flex: 1;
    color: white;
    margin: 5rem 1.5rem 0 1.5rem;
    border-radius: 15px;
    padding: 4rem 3rem 0 3rem;
  }

  .valid {
    background: rgb(229, 249, 218);
  }
  .rejected{
    background: rgba(255, 0, 0, 0.151);
  }
  input {
    border: none;
    padding: .5rem;
    font-size: 1rem;
    height: 2rem;
    border-top: 1px solid white;
    border-radius: 4px;
    background: white;
    margin: .5rem;
  }
}

</style>
