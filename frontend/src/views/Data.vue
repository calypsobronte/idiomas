<template>
  <v-container fill-height>
    <v-row align="center" justify="center">
      <v-card class="py-2" width="700" elevation="18">
        <!-- List -->
        <v-card-title class="text-center d-flex flex-column">
          <h3 class="text-h3 py-3 black--text">Idiomas</h3>

          <v-card-text class="px-0">
            <!-- agregar nombre  -->
            <v-row>
              <v-col sm="8" class="py-0 pr-0">
                <v-text-field
                  v-model="nameTask"
                  label="Ingrese su nombre"
                  solo
                  dense
                ></v-text-field>
              </v-col>
            </v-row>
          </v-card-text>
          <hr />
          <v-radio-group v-model="row" row>
            <v-radio label="Ingles" value="radio-1"></v-radio>
            <v-radio label="Español" value="radio-2"></v-radio>
          </v-radio-group>
          <!-- /agregar nombre  -->
          <v-row no-gutters>
            <!-- Campo para saldar Ejem: Hola Lina o Hello Lina-->
            <v-col class="px-1">
              <v-btn
                color="secondary"
                class="text-capitalize"
              >
                Saludar
              </v-btn>
            </v-col>
            <!-- Boton para mostrar nombre Ejem: Mi nombre es Lina o My name is Lina -->
            <v-col class="px-1">
              <v-btn
                color="secondary"
                class="text-capitalize"
              >
                Nombre
              </v-btn>
            </v-col>
            <!-- Boton para mostrar la despedida Ejem: Que de vaya muy bien Lina o All the best Lina-->
            <v-col class="px-1">
              <v-btn
                color="secondary"
                class="text-capitalize"
              >
                Despedir
              </v-btn>
            </v-col>
          </v-row>
          <hr/>
          <hr/><hr/><hr/><hr/><hr/><hr/><hr/>
           <p>Acaba lo que debe mostrarse cuando mande el nombre Ejem: My name is Lina</p>
        </v-card-title>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
//import {  getDataApi, createDataApi,} from "../services/index.js";

export default {
  name: "Data",
  
};
</script>
