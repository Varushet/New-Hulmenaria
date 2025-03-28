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
  font-size: 1.5rem;
}
.faltr input {
  width: 4.8rem;
  border: 1px solid black;
}
.faltr input[type='text'] {
  width: 2rem;
  border: dotted;
  font-size: 1rem;
}
.invent {
  height: 20rem;
}
.invent div:first-child {
  font-size: 2rem;
  display: flex;
  justify-content: space-around;
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
    <section class="invent" id="inv">
      <div>
        <p @click="openBag" class="bag-title">Main Bag</p>
        <button type="button" @click="showDialog('bolsa')"><img src="" alt="Bag img" /></button>
      </div>
      <dialog id="bolsa">
        <p>Main Bag</p>
        <div>
          <label class="casilla-nombre"><input type="text" name="bolsa_name" /></label>
          <label class="casilla-texto">t<input type="text" name="bolsa_t" /></label>
          <label class="casilla-peso">Mx<input type="number" name="bolsa_mx" /></label>
          <label class="casilla-texto">m<input type="text" name="bolsa_m" /></label>
          <label class="casilla-numero">c<input type="number" name="bolsa_c" /></label>
          <label class="casilla-numero">r<input type="number" name="bolsa_r" /></label>
          <label class="casilla-texto">e<input type="text" name="bolsa_e" /></label>
          <label class="casilla-peso">%d<input type="number" name="bolsa_d" /></label>
        </div>
      </dialog>
      <div class="row-bolsa">
        <label><input type="text" name="objeto1Name" /></label>
        <label>u<input type="number" name="objeto1_u" /></label>
        <label>p<input type="number" name="objeto1_p" /></label>
      </div>
      <div class="row-bolsa">
        <label><input type="text" name="objeto2Name" /></label>
        <label>u<input type="number" name="objeto2_u" /></label>
        <label>p<input type="number" name="objeto2_p" /></label>
      </div>
      <div class="row-bolsa">
        <label><input type="text" name="objeto3Name" /></label>
        <label>u<input type="number" name="objeto3_u" /></label>
        <label>p<input type="number" name="objeto3_p" /></label>
      </div>
      <div class="row-bolsa">
        <label><input type="text" name="objeto4Name" @change="newItem" /></label>
        <label>u<input type="number" name="objeto4_u" /></label>
        <label>p<input type="number" name="objeto4_p" /></label>
      </div>
    </section>
  </fieldset>
</template>

<script setup>
const showDialog = (dialogId) => {
  const dialog = document.querySelector(`#${dialogId}`)
  dialog.showModal()

  dialog.addEventListener('click', (x) => {
    if (x.target === dialog) {
      dialog.close()
    }
  })
}

const newItem = () => {
  const rows = document.querySelectorAll('.row-bolsa')
  const newNum = rows.length + 1

  const rowDiv = document.createElement('div')
  rowDiv.className = 'row-bolsa'

  const labName = document.createElement('label')

  const inpName = document.createElement('input')
  inpName.setAttribute('type', 'text')
  inpName.setAttribute('name', `objeto${newNum}Name`)

  labName.appendChild(inpName)
}
</script>
