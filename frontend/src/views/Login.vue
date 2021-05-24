<template>
<v-card
    class="mx-auto"
    max-width="500"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <br><br><br><br><br>
        <div class="overline mb-4">
          Bienvenido a la aplicacion.
        </div>
        <v-list-item-title class="headline mb-1">
          Iniciar sesion con Google
        </v-list-item-title>
        <v-list-item-subtitle></v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-actions>
      <GoogleLogin :params="params" :renderParams="renderParams" :onSuccess="onSuccess" :onFailure="onFailure"></GoogleLogin>
      
    </v-card-actions>
    
    <v-alert
      border="left"
      color="indigo"
      dark
    >
    <v-list-item-subtitle>{{name}}</v-list-item-subtitle>
    </v-alert>
  </v-card>
</template>

<script>
//import Data from "./views/Data";
// It can also be imported as { GoogleLogin }
import GoogleLogin from "vue-google-login";
import { setTimeout } from 'timers';
export default {
  //name: "Login",
  components: {
    GoogleLogin,
  },
  methods: {
        onSuccess(googleUser) {
         setTimeout(() => this.redirect(), 2000)
         this.name = "Hola " + googleUser.getBasicProfile().getName() + " te estamos redirigiendo a idiomas";
            console.log("Entre acaaaaa" + googleUser);
 
            // This only gets the user information: id, name, imageUrl and email
            console.log(googleUser.getBasicProfile());
        },
        redirect() {
            this.$router.push({name: 'data'})
        }
    },
  data: () => ({
    //
    // client_id is the only required property but you can add several more params, full list down bellow on the Auth api section
      params: {
        client_id: "30390575932-nuecd7t2co5qhbo6bdtal152j618mdjm.apps.googleusercontent.com",
      },
      // only needed if you want to render the button with the google ui
      renderParams: {
        width: 250,
        height: 50,
        longtitle: true,
      },
      name: "",
  }),
};
</script>
