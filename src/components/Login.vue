<template>
  <div class="formulario">
    <h1>Iniciar sesion</h1>
    <form @submit.prevent="handleSubmit">
      <label class="sr-only" for="inline-form-input-username">Usuario</label>
      <b-form-input
        id="inline-form-input-username"
        class="mb-2 mr-sm-2 mb-sm-0"
        placeholder="Escribe tu username"
        v-model="username"
      >

      <br/>

      </b-form-input>
      <label class="sr-only" for="inline-form-input-contrasena"
        >Contraseña</label
      >
      <b-form-input
        id="inline-form-input-contrasena"
        class="mb-2 mr-sm-2 mb-sm-0"
        placeholder="Escribe tu contraseña"
        type="password"
        v-model="password"
      >
      </b-form-input>

      <b-button type="submit" id="button_ingresar" variant="primary"
        >Ingresar</b-button
      >
    </form>

    <br />

    <b-button v-on:click="registrarse" variant="primary">Registrarse</b-button>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      submitted: false,
    };
  },
  methods: {
    registrarse: function () {
      if (this.$route.name != "registro") {
        this.$router.push({ name: "registro" });
      }
    },
    handleSubmit(e) {
      this.submitted = true;
      const { username, password } = this;
      const { dispatch } = this.$store;
      if (username && password) {
        dispatch("authentication/login", { username, password });
      }
    },
  },
};
</script>

<style>
#form_registro {
  text-align: center;
}

#inline-form-input-username,
#inline-form-input-contrasena {
  margin: 0px 0px 0px 0px;
  position: relative;
}

#inline-form2-input-name {
  margin: 143px 20px 10px 10px;
  position: relative;
}

#inline-form2-input-apellido {
  margin: 143px 20px 10px 10px;
  position: relative;
}

#inline-form2-input-correo {
  margin: 20px 20px 40px 0px;
  left: 3%;
  top: -5px;
  width: 180%;
  height: 35px;
}

#button_ingresar {
  font-family: Roboto, Arial, sans-serif;
}

#button_registro {
  font-family: Roboto, Arial, sans-serif;
  margin: 9px 20px 20px 0px;
  left: 3%;
}
</style>
