<template>
  <div class="formulario">
    <h1>Registro de usuario</h1>
    <form @submit.prevent="handleSubmit">
      <label class="sr-only" for="username">Usuario</label>
      <b-form-input
        id="username"
        class="mb-2 mr-sm-2 mb-sm-0"
        placeholder="Escribe tu usuario"
        v-model="username"
      >
      </b-form-input>

      <label class="sr-only" for="pass">Contraseña</label>
      <b-form-input
        id="pass"
        class="mb-2 mr-sm-2 mb-sm-0"
        placeholder="Escribe tu contraseña"
        v-model="password"
        type="password"
      >
      </b-form-input>

      <label class="sr-only" for="inline-form2-input-name">Nombre</label>
      <b-form-input
        class="mb-2 mr-sm-2 mb-sm-0"
        placeholder="Escribe tu nombre"
        v-model="nombre"
      >
      </b-form-input>

      <label class="sr-only" for="inline-form2-input-name">Apellido</label>
      <b-form-input
        class="mb-2 mr-sm-2 mb-sm-0"
        placeholder="Escribe tu apellido"
        v-model="apellido"
      >
      </b-form-input>

      <label class="sr-only" for="inline-form2-input-correo">Correo</label>
      <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
        <b-form-input placeholder="Escribe tu correo" v-model="email">
        </b-form-input>
      </b-input-group>

      <b-button type="submit" id="button_ingresar" variant="primary"
        >Registrarse</b-button
      >
    </form>

    <br />
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      nombre: "",
      apellido: "",
      email: "",
    };
  },
  methods: {
    handleSubmit(e) {
      this.submitted = true;
      const { username, password, nombre, apellido, email } = this;
      const { dispatch } = this.$store;
      if (username && password && nombre && apellido && email) {
        var axios = require("axios");

        var data_registro = {
          username: username,
          password: password,
          nombre: nombre,
          apellido: apellido,
          email: email,
        };

        var config = {
          method: "post",
          url: "http://127.0.0.1:8000/crear_usuario",
          headers: {
            "Content-Type": "application/json",
          },
          data: data_registro,
        };

        axios(config).then((result) => {
          alert("Usuario creado exitosamente");
        })
        .catch((error) => {
          alert("Usuario ya existe");
        });
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
