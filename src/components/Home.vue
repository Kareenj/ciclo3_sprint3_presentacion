<template>
  <div id="padre">
    <b-card-group deck class="textos">
      <b-card
        bg-variant="primary"
        text-variant="white"
        header="¿Que hacemos?"
        class="text-center"
      >
        <b-card-text
          >En Finanzas soluciones personales ofrecemos una herramienta que le
          permita realizar el control de sus ingresos y egresos con el fin de
          darle un mayor control en la forma en que maneja su dinero.
        </b-card-text>
      </b-card>
    </b-card-group>

    <div class="mt-3">
      <b-card-group deck class="textos">
        <b-card
          bg-variant="light"
          header="Egresos e ingresos"
          class="text-center"
        >
          <b-card-text
            >Por medio de estos dos modulos podra ingresar sus ingresos totales
            y los gastos que presenta mes a mes.</b-card-text
          >
        </b-card>
      </b-card-group>
    </div>

    <div class="mt-3">
      <b-card-group deck class="textos">
        <b-card
          bg-variant="info"
          text-variant="white"
          header="Reportes"
          class="text-center"
        >
          <b-card-text
            >En este módulo podra consultar el comportamiento de sus ingresos y
            gastos tanto por periodos de tiempo como por categorias.
          </b-card-text>
        </b-card>
      </b-card-group>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "home",
};
</script>

<style>
.textos {
}
#padre {
  text-align: center;
}
</style>