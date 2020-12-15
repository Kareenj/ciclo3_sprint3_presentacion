<template>
  <div class="formulario">
    <h1>Registre sus gastos</h1>

    <hr />

    <h4>Movimiento:</h4>
    <input id="id_gasto" type="text" placeholder="Ingrese el id del gasto" />

    <div class="btn-block">
      <button v-on:click="obtener" type="Obtener" href="/">Obtener</button>
    </div>

    <h4>Fecha del gasto:</h4>
    <input type="date" id="fecha" required />
    <i class="fas fa-calendar-alt"></i>

    <h4>Valor del gasto:</h4>
    <input type="text" id="gasto" placeholder="$0" />

    <h4>Categoria:</h4>
    <input id="categoria" type="text" placeholder="Ingrese nombre del gasto" />

    <h4>Tipo de gasto:</h4>
    <select id="tipo_gasto">
      <option value="Fijo">Gasto fijo</option>
      <option value="Variable">Gasto variable</option>
    </select>

    <h4>Observaciones:</h4>
    <textarea
      id="obs"
      name="obs"
      rows="7"
      cols="80"
      placeholder="NA"
    ></textarea>
    <small
      >Observaciones: cualquier información importante por favor incluyala en
      este campo.</small
    >

    <div class="btn-block">
      <button v-on:click="actualizar" type="Actualizar" href="/">
        Actualizar
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Egresos",
  methods: {
    obtener: function () {
      this.username = localStorage.getItem("current_username");
      this.id = document.getElementById("id_gasto").value;
      this.gasto = {
        username: "",
        id_gasto: 1,
        fecha_hora: "",
        monto: 0,
        categoria: "",
        observacion: "",
        tipo_gasto: "",
      };

      let self = this;
      axios
        .get(
          "https://finanzas-personales-5.herokuapp.com/get_egreso/" + this.username + "/" + this.id
        )
        .then((result) => {
          self.gasto = result.data;
          document.getElementById(
            "fecha"
          ).value = self.gasto.fecha_hora.substring(0, 10);
          document.getElementById("gasto").value = self.gasto.monto;
          document.getElementById("categoria").value = self.gasto.categoria;
          document.getElementById("tipo_gasto").value = self.gasto.tipo_gasto;
          document.getElementById("obs").value = self.gasto.observacion;
        })
        .catch((error) => {
          alert("ERROR Servidor");
        });
    },

    actualizar: function () {
      this.gasto_actualizar = {
        username: localStorage.getItem("current_username"),
        id_gasto: document.getElementById("id_gasto").value,
        fecha_hora: document.getElementById("fecha").value,
        monto: document.getElementById("gasto").value,
        categoria: document.getElementById("categoria").value,
        observacion: document.getElementById("obs").value,
        tipo_gasto: document.getElementById("tipo_gasto").value,
      };

      let self = this;
      axios
        .post("https://finanzas-personales-5.herokuapp.com/updated_egreso", this.gasto_actualizar)
        .then((result) => {
          alert("OK Egreso actualizado");
        })
        .catch((error) => {
          alert("ERROR Servidor");
        });
    },
  },
};
</script>

<style>
</style>