<template>
    <main class="admin">
      <section>
        <a href="#" class="btn" @click="$router.push('/adminProducts')">Produkter</a>
        <a href="#" class="btn" @click="$router.push('/adminBooking')">Bokningar</a>
        <a href="#" class="btn" @click="$router.push('/adminAdd')">Lägg till produkt</a>
      </section>
      <router-view/>
    </main>
</template>

<script>
  export default {
    name: 'admin',
    beforeMount() {
      this.$store.dispatch('getProducts');
      this.$store.dispatch('dbBookings');
    }
  }
</script>
<style lang="scss">
  @import "../scss/main";
  $baseline: 100px;

  body {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    @extend%center;
    max-width: 768px;

    .admin {
      a {
        &.btnAdmin {
          padding: 1rem 3rem;
          color: #fff;
          background: rgb(62, 80, 129);
          text-decoration: none;
          border-radius: 4px;
        }

        &.btnAdmin:hover {
          background: rgb(139, 28, 115);
        }
      }

      .bookingAdmin {
        background: rgba($color: #000000, $alpha: 0.3);
        border: 5px solid rgba(255, 255, 255, 0.336);
        margin: 1rem;
      }

      .productAdmin {
        background: rgba($color: #000000, $alpha: 0.3);
        border: 5px solid rgba(255, 255, 255, 0.336);
        margin: 1rem;
      }

      .adminTable {
         h3 {
            margin: .5rem 0 0 0;
          }

         table {
            grid-area: table;
            padding: .1rem;
            margin: 0 auto;
            thead {
                tr {
                    th {
                        color: darkmagenta;
                        font-weight: 500;
                        font-size: 1.1rem !important;
                        border-bottom: 1px solid #fff;
                        padding:1.5rem;

                    }
                }
            }
          }

          tbody {
            tr {
              td {
                color: rgba($color: #fff, $alpha: 0.8);
              }

              &:nth-child(2n) {
                background: #ffffff2c;
              }
            }
          }
        }
      }

      .editAdmin {
        grid-area: editAdmin;
        padding: 0 1rem 1rem 1rem;
        background: rgba($color: #000000, $alpha: 0.3);
        border: 5px solid rgba(255, 255, 255, 0.336);
        margin: 1rem;
        @extend%center;
        display: block;

        h3 {
          margin: .5rem 0 0 0;
          padding-bottom: 1.5rem;
        }

        input,
        textarea {
          width: 80%;
          padding: .5rem;
          margin: .4rem;
          border-radius: 3px;
          max-width: 200px;
          max-height: 50px;
          min-width: 200px;
          min-height: 20px;
        }

        textarea {
          margin-bottom: 2rem;
        }
      }
    

}
</style>
