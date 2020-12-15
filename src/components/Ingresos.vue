<template>
  <div>
    <article>
      <section>
        <div class="formulario">
          <h1>Registre sus ingresos</h1>
          <hr />

          <h4>Fecha del ingreso</h4>
          <input type="date" id="fecha" required />
          <i class="fas fa-calendar-alt"></i>
          <h4>Ingrese el valor del ingreso</h4>

          <input type="text" id="ingreso" placeholder="$0" />

          <h4>Categoria</h4>
          <input type="text" placeholder="Ingrese nombre del ingreso" />
          <h4>Indique tipo de ingreso</h4>

          <select>
            <option value="0">Ingreso fijo</option>
            <option value="1">Ingreso variable</option>
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
            >Observaciones: cualquier información importante por favor incluyala
            en este campo.</small
          >

          <div class="btn-block">
            <button type="Obtener">Obtener</button>
          </div>

          <div class="btn-block">
            <button type="Actualizar">Actualizar</button>
          </div>
        </div>
      </section>
    </article>
  </div>
</template>

<script>
export default {
  name: "ingresos",
};
</script>

<style>
</style>