<template>
  <main class="login">
    <section class="place">
      <h1>Logga in</h1>
      <input v-model="username" type="text" placeholder="Användarnamn" :class="{ valid : validUsername, rejected : rejected}">
      <input v-model="password" type="password" placeholder="Lösenord" :class="{ valid : validPassword }">
      <p>Har du inget konto?, <a href="#" @click="$router.push('./signup')">tryck här</a> </p>
    </section>
    <a href="#" class="btn" @click="login" :class="{ ready : validPassword && validUsername }">Logga in</a>
  </main>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
      validUsername: false,
      validPassword: false
    };
  },
  methods: {
    login() {
      if (this.validUsername && this.validPassword) {
        this.$store.dispatch("login", {
          username: this.username,
          password: this.password
        });
        if (this.activeUser.role == 'admin') {
          if (this.checkBooking == false) {
            this.$router.push('/admin')
          } else {
            this.$router.push('/cart')
          }
        } else {
          if (this.checkBooking == false) {
            this.$router.push('/main1')
          } else {
            this.$router.push('/cart')
          }
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

.login {
  background-image:url('../assets/img/skier.jpg');
  background-size: cover;
  background-position: left;
  height: 100vh;
  width: 100vw;
  @extend %center;
  flex-direction: column;

.place {
    background: #6e94d1;
    opacity: .9;
    flex: 1;
    color: white;
    margin: 10rem 1.5rem 13rem 1.5rem;
    border-radius: 15px;
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