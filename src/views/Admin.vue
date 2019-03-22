<template>
    <main class="admin">
      <section id="adminButtons">
      <img src="../assets/img/skilogo.png" alt="logo">
        <a href="#" class="btn" @click="$router.push('/adminProducts')">Produkter</a>
        <a href="#" class="btn" @click="$router.push('/adminBooking')">Bokningar</a>
        <a href="#" class="btn" @click="$router.push('/adminAdd')">Lägg till produkt</a>
        <a href="#" class="btn" @click="$router.push('/home')">Tillbaka</a>
      </section>
      <section class="container">
      <router-view/>
      </section>
    </main>
</template>

<script>
  export default {
    name: 'admin',
    //Get bookings and products
    beforeMount() {
      this.$store.dispatch('getProducts');
      this.$store.dispatch('dbBookings');
    }
  }
</script>
<style lang="scss">
  @import "../scss/main";

  .admin {
    @extend%center;
    background-image: url('../assets/img/mountains-big.jpg');
    background-position: center;
    background-size: cover;
    width: 100vw;
    height: 100vh;

    .container {
      background: #22447a;
      opacity: .9;
      margin: 0rem 1.5rem 0 1.5rem;
      border-radius: 15px;
    }

    #adminButtons {
      flex-direction: row;

      img {
        width: 12rem;
      }

      a {
        margin: 1rem;

        &.btn {
          width: 15rem;
        }

        &.btnAdmin:hover {
          background: rgb(139, 28, 115);
        }
      }
    }

    .adminTable {
      h3 {
        margin: .5rem 0 0 0;
      }

      table {
        padding: .1rem;
        margin: 0 auto;

        thead {
          tr {
            @extend%center;
            justify-content: space-between;
            border-bottom: 1px solid gray;


            th {
              font-weight: 800;
              font-size: .9rem;
              padding: .5rem;

            }
          }
        }
      }

      tbody {
        tr {
          border-bottom: 1px solid gray;

          td {
            border-bottom: 1px solid gray;
            font-size: .8rem;
            padding: .4rem;
          }

          &:nth-child(2n) {
            background: #ffffff2c;
          }
        }
      }
    }
  }
</style>
