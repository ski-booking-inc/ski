<template>
  <div class="home">
    <Who class="who"/>
    <section class="textbox">
      <h1>Välkommen till Fjällgården!</h1>
      <p>Hyr din utrustning hos oss på Fjällgården och få mer utav din semester. Vi anpassar utrustningen efter dina behov och du hämtar enkelt ut den precis vid liften.</p>
      <p>Vi är nyöppnade, har noll erfarenhet, men vi har skitsnygga grejer som gör dig awesome i backen</p>
    </section>
    <section>
      <a class="btn" href="#" @click="$router.push('/products')">Boka utrustning</a>
      <a class="btn" v-if="showIsAdmin" href="#" @click="$router.push('/admin')">Admin</a>
      <a class="btn" v-if="showIsLogin" href="#" @click="$router.push('/userPage')">Mina bokningar</a>
      <a class="btn" v-if="!showIsLogin" href="#" @click="$router.push('/login')">Logga in</a>
      <a class="btn" v-if="showIsLogin" href="#" @click="logOut">Logga ut</a>
    </section>
    <router-view/>
  </div>
</template>

<script>
  import Who from "@/components/Who.vue";

  export default {
    name: 'home',
    components: {
      Who
    },
    data() {
      return {
        showIsLogin: null,
        showIsAdmin: null
      }
    },
    computed: {
      activeUser() {
        return this.$store.getters.getActiveUser;
      }
    },
    methods: {
      logOut() {
        this.$store.dispatch("logOut")
        this.$router.push('/home')
      }
    },

    watch: {
      //Check which role is logged in and show different buttons
      activeUser() {
        if (this.activeUser.role) {
          this.showIsLogin = true
        } else {
          this.showIsLogin = false
        }
        if (this.activeUser.role == 'admin') {
          this.showIsAdmin = true
        } else {
          this.showIsAdmin = false
        }
      }
    },
    //Check if somebody i logged in and show different button from beginning
    beforeMount() {
      if (this.activeUser.role) {
        this.showIsLogin = true
      }
      if (this.activeUser.role == 'admin') {
        this.showIsAdmin = true
      }
    }
  };
</script>

<style lang="scss">
  @import "../scss/main";

  .home {
    margin: 0 1.5rem;
    @extend %center;
    flex-direction: column;
    background-image: url('../assets/img/mountains.jpg');
    background-size: cover;
    background-position: center;
    margin: 0;
    height: 100vh;
    width: 100vw;
    justify-content: flex-end;

    .textbox {
      background: #ffff;
      opacity: .9;
      flex: 1;
      margin: 1rem 1.5rem 0 1.5rem;
      border-radius: 15px;
      padding: .5rem;
    }

    @media screen and (min-width: 480px) {
      .textbox {
        width: 400px;
      }
    }
  }
</style>
