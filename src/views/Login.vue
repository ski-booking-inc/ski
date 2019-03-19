<template>
  <main class="login">
    <img src="../assets/img/snowboarder.jpg" alt="skier">
    <article >
      <input v-model="username" type="text" class="username" placeholder="Användarnamn" :class="{ valid : validUsername, rejected : rejected}">
      <input v-model="password" type="password" placeholder="Lösenord" :class="{ valid : validPassword }">
      <p>Har du inget konto?, <a href="#" @click="$router.push('./signup')">tryck här</a> </p>
    </article>
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
      margin-top: 1rem;

    }
  }

</style>
