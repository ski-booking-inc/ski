<template>
  <div class="main1">
    <Who/>
    <section>
      <h1>Välkommen till Fjällgårdens skidanläggning</h1>
      <p>Hyr din utrustning hos oss på Fjällgården och få mer utav din semester. Vi anpassar utrustningen efter dina behov och du hämtar enkelt ut den precis vid backen.</p>
    </section>
    <section>
      <a class="btn" href="#" @click="$router.push('/products')">Boka utrustning</a>
      <a class="btn" v-if="showIsAdmin" href="#" @click="$router.push('/admin')">Admin</a>
      <a class="btn" v-if="!showIsLogin" href="#" @click="$router.push('/login')">Logga in</a>
      <a class="btn" v-if="showIsLogin" href="#" @click="logOut">Logga ut</a>
      
    </section>
    <router-view/>
  </div>
</template>

<script>

import Who from "@/components/Who.vue";

export default {
  name: 'main1',
  components: {
    Who
  },
  data(){
    return {
      showIsLogin: false,
      showIsAdmin: false
    }
  },
  computed: {
    activeUser(){
      return this.$store.getters.getActiveUser;
    }
  },
  methods: {
     logOut(activeUser){
      this.$store.dispatch("logOut")
      this.showIsLogin = false
      this.showIsAdmin = false
      this.$store.state.activeUser.name=null
      this.$router.push('/main1')
    }
  },
  watch: {
    activeUser() {
    if(this.activeUser.role) {
      console.log(this.activeUser.role)
      this.showIsLogin = true
    } else {
      this.showIsLogin = false
    }
    if(this.activeUser.role == 'admin') {
      this.showIsAdmin = true
    } else {
      this.showIsAdmin = false
    }
  }
  }
};
</script>

<style lang="scss">
@import "../scss/main";

.main1 {
  margin: 0 1.5rem;
  @extend %center;
  flex-direction: column;
  max-height: 100vh;
  color: white;
}


</style>
