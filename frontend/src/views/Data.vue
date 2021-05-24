<template>
  <v-container fill-height>
    <v-row align="center" justify="center">
      <v-card class="py-2" width="700" elevation="18">
        <!-- List -->
        <v-card-title class="text-center d-flex flex-column">
          <h3 class="text-h3 py-3 black--text">IDIOMAS</h3>
          <br />
          <br />

          <v-card-text class="px-0">
            <!-- agregar nombre  -->
            <v-row>
              <v-col sm="12" class="py-0 pr-0">
                <v-text-field
                  v-model="name"
                  label="Ingrese su nombre"
                  solo
                  dense
                ></v-text-field>
              </v-col>
            </v-row>
          </v-card-text>
          <hr />
          <v-radio-group v-model="idioma" row>
            <v-radio label="Ingles" value="ingles"></v-radio>
            <v-radio label="Español" value="español"></v-radio>
          </v-radio-group>

          <!-- /agregar nombre  -->
          <v-row no-gutters>
            <!-- Campo para saldar Ejem: Hola Lina o Hello Lina-->
            <v-col class="px-1">
              <v-btn
                @click="saludar"
                tile
                color="secondary"
                class="text-capitalize"
              >
                Saludar
              </v-btn>
            </v-col>
            <!-- Boton para mostrar nombre Ejem: Mi nombre es Lina o My name is Lina -->
            <v-col class="px-1">
              <v-btn
                @click="nombre"
                tile
                color="secondary"
                block
                class="text-capitalize"
              >
                Nombre
              </v-btn>
            </v-col>
            <!-- Boton para mostrar la despedida Ejem: Que de vaya muy bien Lina o All the best Lina-->
            <v-col class="px-1">
              <v-btn
                @click="despedir"
                tile
                color="secondary"
                class="text-capitalize"
              >
                Despedir
              </v-btn>
            </v-col>
          </v-row>
          <br />
          <br />
          <p>{{ result }}</p>
        </v-card-title>
      </v-card>
      <v-dialog v-model="dialog" width="500">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">
            Mostrar datos almacenados
          </v-btn>
        </template>

        <v-card>
          <v-card-title class="headline grey lighten-2"> Idiomas </v-card-title>

          <v-card-text>
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">Nombre</th>
                    <th class="text-left">Idioma</th>
                    <th class="text-left">Mensaje</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in apiData" :key="item._id">
                    <td>{{ item.name }}</td>
                    <td>{{ item.idioma }}</td>
                    <td>{{ item.message }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="dialog = false"> cerrar </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
    
  </v-container>
</template>

<script>
import { getDataApi, createDataApi } from "../services/index.js";

export default {
  //name: "Data",

  data() {
    return {
      apiData: [],
      name: "",
      idioma: null,
      status: "all",
      result: "",
      dialog: false,
    };
  },
  created() {
    this.getData();
  },
  beforeMount() {
    this.getData();
  },
  methods: {
    getData() {
      getDataApi().then((data) => {
        this.apiData = data;
        console.log(this.apiData);
      });
    },
    mountDataServer() {
      this.getData();
    },
    saludar() {
      if (!this.name == "" || !this.idioma == null || !this.result == "") {
        if (this.idioma === "ingles") {
          this.result = `Hello ${this.name}`;
        } else {
          this.result = `Hola ${this.name}`;
        }
        createDataApi({
          name: this.name,
          idioma: this.idioma,
          message: this.result,
        }).then((response) => {
          console.log("response", response);
          this.getData();
        });
      }
    },
    despedir() {
      if (!this.name == "" || !this.idioma == null || !this.result == "") {
        if (this.idioma === "ingles") {
          this.result = `Bye ${this.name}`;
        } else {
          this.result = `Adios ${this.name}`;
        }
        createDataApi({
          name: this.name,
          idioma: this.idioma,
          message: this.result,
        }).then((response) => {
          console.log("response", response);
          this.getData();
        });
      }
    },
    nombre() {
      if (!this.name == "" || !this.idioma == null || !this.result == "") {
        if (this.idioma === "ingles") {
          this.result = `My name is ${this.name}`;
        } else {
          this.result = `Mi nombre es ${this.name}`;
        }
        createDataApi({
          name: this.name,
          idioma: this.idioma,
          message: this.result,
        }).then((response) => {
          console.log("response", response);
          this.getData();
        });
      }
    },
  },
};
</script>
