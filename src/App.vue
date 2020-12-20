<template>
  <div id="app">
    <div id="content">
      <div class="header">
        <title>Finanzas Personales</title>

        <b-navbar id="b-navbar" variant="faded" type="light">
          <img v-on:click="init" src="./assets/finanzas.png" />
          <b-navbar-brand href="#"></b-navbar-brand>

          <b-button v-on:click="ingresos_form" id="button" variant="primary"
            >Ingresos</b-button
          >
          <b-button v-on:click="egresos_form" id="button" variant="primary"
            >Egresos</b-button
          >
          <b-button id="button" variant="primary">Reportes</b-button>

          

        </b-navbar>
      </div>

      <div id="main-components">
        <router-view> </router-view>
      </div>
    </div>
    <div id="footer">
      <h2>MisionTic2022</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  beforeCreate: function () {
    this.$router.push({ name: "home" });
  },
  computed: {
    loggingIn() {
      return this.$store.state.authentication.status.loggingIn;
    },
    loggedIn() {
      return this.$store.state.authentication.status.loggedIn;
    }
  },
  methods: {
    init: function () {
      if (this.$route.name != "home") {
        this.$router.push({ name: "home" });
      }
    },
    login: function () {
      if (this.$route.name != "log") {
        this.$router.push({ name: "log" });
      }
    },
    egresos_form: function () {
      if (this.$route.name != "egresos") {
        this.$router.push({ name: "egresos" });
      }
    },
    ingresos_form: function () {
      if (this.$route.name != "ingresos") {
        this.$router.push({ name: "ingresos" });
      }
    },
  },
};
</script>

<style>
body {
  background-color: #004aad;
  display: flex;
  flex-direction: column;
  min-height: 100%;
}
#content {
  flex: 1;
}
#footer {
  padding: 20px;
  background-color: #004aad;
  color: #e5e7e9;
}
small {
  display: block;
  line-height: 16px;
  opacity: 0.7;
}

.btn-block {
  text-align: center;
}
button {
  width: 9em;
  padding: 0.5em;
  border: none;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  background-color: #095484;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
}
button:hover {
  background-color: #0666a3;
}
#app {
  font-family: Roboto, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#header {
  width: 100%;
  min-height: 100px;
  background-color: #004aad;
}

#b-navbar {
  background-color: #004aad;
}

#main-components {
  background-image: url("./assets/download.jpg");
}

h1 {
  display: block;
  font-family: Roboto, Arial, sans-serif;
  margin: 20px 0;
  font-weight: 600;
  font-size: 30 px;
}

h2 {
  display: block;
  font-family: Roboto, Arial, sans-serif;
  margin: 20px 0;
  font-weight: 600;
  font-size: 20 px;
}

h4 {
  display: block;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-right: 5px;
  margin-left: 5px;
}

.formulario {
  position: relative;
  padding: 20px;
  background: #fff;
  box-shadow: 0 2px 5px #ccc;
  text-align: center;
  width: 75%;
  margin-left: auto;
  margin-right: auto;
}

input,
select {
  position: relative;
  margin: 10px 5px 10px 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  background: transparent;
}

input:hover,
textarea:hover,
select:hover {
  outline: none;
  border: 1px solid #095484;
}

textarea {
  margin: 10px 5px 10px 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  background: transparent;
}
</style>
