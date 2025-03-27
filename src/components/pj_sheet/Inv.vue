<style scoped>
@import '../../assets/sheet.css';

fieldset {
  background-size: 103% 109%;
}
section {
  background-image: url(../../assets/img/pergaminoViejo.png);
  background-size: 100% 105%;
  background-repeat: no-repeat;
  background-position: center;
}
.faltr {
  background-image: url(../../assets/img/pergamino);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
  padding: 1rem 0;
}
.faltr p {
  width: 100%;
  font-size: 1.5rem;
}
.faltr label {
  height: 2.5rem;
}
.faltr input {
  border: 1px solid black;
}
.faltr input[type='text'] {
  width: 2rem;
  border: dotted;
  font-size: 1rem;
}
.bag {
  border: 5px double black;
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 4rem;
}

.bolsa {
  width: 100%;
  height: 6rem;
  display: flex;
}
.inv .expand,
.inv2 .expand {
  width: 15%;
  border: none;
  background-image: url(../assets/iconos/casilla.svg);
  background-size: contain;
  background-repeat: no-repeat;
  margin: 0 1rem;
}
.casilla-nombre {
  width: 95%;
  height: auto;
}
.casilla-texto {
  width: 65%;
  height: auto;
}
.casilla-numero {
  width: 15%;
  height: auto;
}
.casilla-peso {
  width: 35%;
  height: auto;
}
</style>

<template>
  <fieldset>
    <div class="faltr">
      <p>Pouch:</p>
      <label>Cb<input type="number" name="cb" /></label>
      <label>Pt<input type="number" name="pt" /></label>
      <label>Or<input type="number" name="or" /></label>
      <label>Pl<input type="number" name="pl" /></label>
      <label><input type="text" name="moneda1" /></label>
      <label><input type="number" name="moneda1Cant" /></label>
      <label><input type="text" name="moneda2" /></label>
      <label><input type="number" name="moneda2Cant" /></label>
      <label><input type="text" name="moneda3" /></label>
      <label><input type="number" name="moneda3Cant" /></label>
    </div>
    <section class="inv" id="inv">
      <p>Main Bag</p>
    </section>
  </fieldset>
</template>

<script setup></script>
