<template>
  <main id="login">
    <article class="modal">
      <input
        v-model="username"
        type="text"
        class="username"
        placeholder="username"
        :class="{ valid : validUsername, rejected : rejected}"
      >
      <input
        v-model="password"
        type="password"
        placeholder="password"
        :class="{ valid : validPassword }"
      >
      <a
        href="#"
        class="btn"
        @click="login"
        :class="{ ready : validPassword && validUsername }"
      >Login</a>
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
      validUsername: true,
      validPassword: true
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
          if (this.checkBooking == null) { 
            this.$router.push('/admin')
          } else {
            this.$router.push('/confirm')
            // route till admin
          }
        } else {
          console.log(this.checkBooking)
          if (this.checkBooking == false) {
            this.$router.push('/main')
            // route till confirm 
          } else {
            this.$router.push('/confirm')
            // route till main
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

#login {
  @extend %center;
  background: #222;

  .modal {
    background: white;
    border-radius: 3px;
    width: 18rem;
    display: grid;
    grid-template-columns: 1fr;
    box-shadow: 0 0 2rem pink;

    @keyframes shake {
      0% {
        transform: translateX(0);
      }
      25%,
      50% {
        transform: translateX(-0.5rem);
      }
      75%,
      100% {
        transform: translateX(0.5rem);
      }
    }

    &.rejected {
      animation: shake 0.2s ease;
      animation-iteration-count: 4;
    }

    input {
      border: none;
      padding: 1rem;
      font-size: 1rem;
      height: 2rem;
      box-sizing: border-box;
      background: pink;
      border-top: 1px solid yellow;
      transition: red 0.2s ease;

      // &:focus {
      //   outline: none;
      //   background: rgba($color: $red, $alpha: 0.2);
      // }

      // &.valid {
      //   background: rgba($color: $green, $alpha: 0.2);
      // }
    }
  }
}
</style>

