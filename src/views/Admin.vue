<template>
    <main class="admin">
      <AdminProducts/>
      <AdminAdd/>
      <AdminBooking/>
    </main>
</template>

<script>
  import AdminProducts from "@/components/AdminProducts.vue";
  import AdminBooking from "@/components/AdminBooking.vue";
  import AdminAdd from "@/components/AdminAdd.vue";

export default {
  name: 'admin',
  components:{
    AdminProducts,
    AdminBooking,
    AdminAdd
  },
 beforeMount(){
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
      display: grid;
      grid-template-columns: 2fr 1fr;
      grid-template-rows:auto auto;
      grid-template-areas:
      "productAdmin editAdmin"
      "bookingAdmin editAdmin";
      width: 100vw;
      

      .productAdmin{
        grid-area: productAdmin;
        background: rgba($color: #000000, $alpha: 0.3);

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
            tbody {
                tr {
                    td {
                        color: rgba($color: #fff, $alpha: 0.8);
                    }
                    &:nth-child(2n){
                        background:  #ffffff2c;
                    }
                }
            }
        }

      }

      .editAdmin{
        grid-area: editAdmin;
        margin: 0 auto;
        padding: 0 1rem 1rem 1rem;
        background: rgba($color: #000000, $alpha: 0.3);

        h3 {
          margin: .5rem 0 0 0;
          padding-bottom: 1.5rem;
        }

        input, textarea {
          width: 80%;
          padding: .5rem;
          margin: .4rem;
          border-radius: 3px;
          max-width: 200px;
          max-height: 50px;
          min-width: 200px;
          min-height: 20px;
          display: block;
        }
        .btn {
          width:inherit;
        }
      }

      .bookingAdmin {
        background: fuchsia;
        grid-area: bookingAdmin;
      }
    }
  @media screen and (max-width: 650px){
  .admin{
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-template-areas: 
    "productAdmin"
    "bookingAdmin"
    "editAdmin";
    }
  }
}
</style>

