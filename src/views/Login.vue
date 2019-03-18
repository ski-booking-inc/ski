<template>
  <main id="login">
    <article class="login">
      <input v-model="username" type="text" class="username" placeholder="username" :class="{ valid : validUsername, rejected : rejected}">
      <input v-model="password" type="password" placeholder="password" :class="{ valid : validPassword }">
      <p>Fyll i och tryck logga in för att börja boka.</p>
      <a href="#" class="btn" @click="login" :class="{ ready : validPassword && validUsername }">Logga in</a>
      <p>Har du inget konto? Fyll i och tryck Registrera för att skapa konto.</p>
      <a href="#" class="btn" @click="signup" :class="{ ready : validPassword && validUsername }">Registrera</a>
    </article>
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
    },
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

  .login {
    background: white;
    border-radius: 3px;
    width: 18rem;
    display: grid;
    grid-template-columns: 1fr;
    box-shadow: 0 0 2rem pink;

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
      border-top: 1px solid yellow;
      background: lightblue;
 
    }
  }

</style>
