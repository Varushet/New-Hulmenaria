<style scoped>
@import '../../assets/sheet.css';

fieldset {
  background-size: 205% 102%;
  background-position: left 0.8rem;
  position: absolute;
  top: 4rem;
  width: 100vw;
  height: 93%;
}
section {
  display: flex;
  flex-wrap: wrap;
  margin: 3rem 0;
  padding: 0 0.5rem;
  box-sizing: border-box;
  overflow: scroll;
}
.points {
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding-left: 0.4rem;
  box-sizing: border-box;
}
.points label {
  width: 2.5rem;
}
.points label input {
  margin: 0rem;
  width: 100%;
}
.cap input {
  border: dashed;
}
.points .deb {
  width: 2.8rem;
}
.points .deb input {
  width: 2.8rem;
}
.points .dt {
  font-size: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.points .luck {
  width: 55%;
}
.luck select {
  width: 100%;
  margin: 0;
}
.dt p {
  width: 2rem;
  text-align: center;
  align-content: center;
}
section .row-3 {
  flex-wrap: nowrap;
}
.dtPoints {
  width: 100%;
  text-align: center;
}
.reg {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
.reg .deb {
  width: 5rem;
}
.reg select {
  width: 8rem;
}
.ill {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.wound {
  width: 10rem;
}
.grade {
  width: 3.5rem;
}
.deity {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.deity p {
  width: 100%;
  text-align: center;
}
.deity select {
  width: 7rem;
}
.deity input[type='text'] {
  width: 14.5rem;
}
.deity input[type='number'] {
  width: 2.5rem;
}
.deity label .dev {
  width: 4rem;
}
.deity input[type='range'] {
  width: 22rem;
}
</style>

<template>
  <fieldset>
    <section>
      <div class="row-3">
        <label>
          Lvl <input type="number" min="1" name="lvl" :value="level" @input="updateLvl" />
        </label>
        <label>
          E.P. <input type="number" min="1" name="ep" v-model="xpInsert" @keyup.enter="xpUpdate" />
        </label>
        <label>X.P.<input type="number" min="1" name="xp" :value="xpReach" readonly /></label>
      </div>
      <p class="dtPoints">{{ dtPoints }}</p>
      <div class="cons points">
        <p>Cons</p>
        <label><input type="number" name="cons" /></label>
        <label class="cap">/<input type="number" name="capCons" /></label>
        <label class="deb"><input type="number" name="plusCons" /></label>
        <div class="dt">
          <p>Agil</p>
          <label><input type="number" name="agil" /></label>
          <label class="cap">/<input type="number" name="capAgil" /></label>
          <label class="deb"><input type="number" name="plusAgil" /></label>

          <p>End</p>
          <label><input type="number" name="con" /></label>
          <label class="cap">/<input type="number" name="capCon" /></label>
          <label class="deb"><input type="number" name="plusCon" /></label>

          <p>Strg</p>
          <label><input type="number" name="strg" /></label>
          <label class="cap">/<input type="number" name="capStrg" /></label>
          <label class="deb"><input type="number" name="plusStrg" /></label>

          <p>Rap</p>
          <label><input type="number" name="rap" /></label>
          <label class="cap">/<input type="number" name="capRap" /></label>
          <label class="deb"><input type="number" name="plusRap" /></label>

          <p>Ref</p>
          <label><input type="number" name="ref" /></label>
          <label class="cap">/<input type="number" name="capRef" /></label>
          <label class="deb"><input type="number" name="plusRef" /></label>

          <p>Spd</p>
          <label><input type="number" name="spd" /></label>
          <label class="cap">/<input type="number" name="capSpd" /></label>
          <label class="deb"><input type="number" name="plusSpd" /></label>
        </div>
      </div>
      <div class="int points">
        <p>Int</p>
        <label><input type="number" name="int" /></label>
        <label class="cap">/<input type="number" name="capInt" /></label>
        <label class="deb"><input type="number" name="plusInt" /></label>
        <div class="dt">
          <p>Clev</p>
          <label><input type="number" name="ast" /></label>
          <label class="cap">/<input type="number" name="capAst" /></label>
          <label class="deb"><input type="number" name="plusAst" /></label>

          <p>Conc</p>
          <label><input type="number" name="conc" /></label>
          <label class="cap">/<input type="number" name="capConc" /></label>
          <label class="deb"><input type="number" name="plusConc" /></label>

          <p>Ing</p>
          <label><input type="number" name="ing" /></label>
          <label class="cap">/<input type="number" name="capIng" /></label>
          <label class="deb"><input type="number" name="plusIng" /></label>

          <p>Wisd</p>
          <label><input type="number" name="sab" /></label>
          <label class="cap">/<input type="number" name="capSab" /></label>
          <label class="deb"><input type="number" name="plusSab" /></label>

          <p>Tem</p>
          <label><input type="number" name="tem" /></label>
          <label class="cap">/<input type="number" name="capTem" /></label>
          <label class="deb"><input type="number" name="plusTem" /></label>

          <p>Will</p>
          <label><input type="number" name="vol" /></label>
          <label class="cap">/<input type="number" name="capVol" /></label>
          <label class="deb"><input type="number" name="plusVol" /></label>
        </div>
      </div>
      <div class="per points">
        <p>Per</p>
        <label><input type="number" name="per" /></label>
        <label class="cap">/<input type="number" name="capPer" /></label>
        <label class="deb"><input type="number" name="plusPer" /></label>
        <div class="dt">
          <p>Emp</p>
          <label><input type="number" name="emp" /></label>
          <label class="cap">/<input type="number" name="capEmp" /></label>
          <label class="deb"><input type="number" name="plusEmp" /></label>

          <p>Seek</p>
          <label><input type="number" name="seek" /></label>
          <label class="cap">/<input type="number" name="capSeek" /></label>
          <label class="deb"><input type="number" name="plusSeek" /></label>

          <p>Dizz</p>
          <label><input type="number" name="dizz" /></label>
          <label class="cap">/<input type="number" name="capDizz" /></label>
          <label class="deb"><input type="number" name="plusDizz" /></label>

          <p>Sigh</p>
          <label><input type="number" name="sigh" /></label>
          <label class="cap">/<input type="number" name="capSigh" /></label>
          <label class="deb"><input type="number" name="plusSigh" /></label>
        </div>
      </div>
      <div class="car points">
        <p>Car</p>
        <label><input type="number" name="car" /></label>
        <label class="cap">/<input type="number" name="capCar" /></label>
        <label class="deb"><input type="number" name="plusCar" /></label>
        <div class="dt">
          <p>Pret</p>
          <label><input type="number" name="pret" /></label>
          <label class="cap">/<input type="number" name="capPret" /></label>
          <label class="deb"><input type="number" name="plusPret" /></label>

          <p>Mani</p>
          <label><input type="number" name="mani" /></label>
          <label class="cap">/<input type="number" name="capMani" /></label>
          <label class="deb"><input type="number" name="plusMani" /></label>

          <p>Sec</p>
          <label><input type="number" name="sec" /></label>
          <label class="cap">/<input type="number" name="capSec" /></label>
          <label class="deb"><input type="number" name="plusSec" /></label>
          <p>Ac</p>
          <label><input type="number" name="ac" /></label>
          <label class="cap">/<input type="number" name="capAc" /></label>
          <label class="deb"><input type="number" name="plusAc" /></label>
        </div>
      </div>
      <div class="hab points">
        <p>Hab</p>
        <label><input type="number" name="hab" /></label>
        <label class="cap">/<input type="number" name="capHab" /></label>
        <label class="deb"><input type="number" name="plusHab" /></label>
        <div class="dt">
          <p>Art</p>
          <label><input type="number" name="art" /></label>
          <label class="cap">/<input type="number" name="capArt" /></label>
          <label class="deb"><input type="number" name="plusArt" /></label>
          <p>Des</p>
          <label><input type="number" name="des" /></label>
          <label class="cap">/<input type="number" name="capDes" /></label>
          <label class="deb"><input type="number" name="plusDes" /></label>
        </div>
      </div>
      <div class="points">
        <p>Psi</p>
        <label><input type="number" name="psi" /></label>
        <label class="cap">/<input type="number" name="capPsi" /></label>
        <label class="deb"><input type="number" name="plusPsi" /></label>

        <p>Esp</p>
        <label><input type="number" name="esp" /></label>
        <label class="cap">/<input type="number" name="capEsp" /></label>
        <label class="deb"><input type="number" name="plusEsp" /></label>

        <p>Lk</p>
        <label class="luck">
          <select name="luckSelect">
            <option>Choose</option>
            <option>Lucky</option>
            <option>Fortunate</option>
            <option>Hoodoo</option>
            <option>Unlucky</option>
          </select></label
        >
        <label class="deb"><input type="number" name="luck" /></label>
      </div>
      <div class="reg">
        <p>Reg</p>
        <label class="deb"><input type="number" name="plusReg" /></label>
        <label>
          <select name="regSelect">
            <option>None</option>
            <option>Superficial</option>
            <option>Scarred</option>
            <option>Visceral</option>
            <option>Structural</option>
            <option>Integral</option>
            <option>Hydra</option>
          </select></label
        >
      </div>
      <div class="ill" v-for="(wound, index) in wounds" :key="wound.id">
        <label class="wound">
          <input type="text" v-model="wound.name" @blur="newWound(index)" />
        </label>
        <label class="grade"><input type="number" v-model="wound.stadium" readonly /></label>
        <p>G</p>
        <label class="grade"><input type="number" v-model="wound.grade" /></label>
      </div>
      <div class="deity">
        <p>Deity</p>
        <label>
          <select name="deityType">
            <option>Heritage</option>
            <option>Idolic</option>
            <option>Elemental</option>
            <option>Primordial</option>
            <option>Elder</option>
            <option>Eldrich</option>
          </select>
        </label>
        <label><input type="text" name="deityName" /></label>
        <label>D.P.<input type="number" name="deityFavor" /></label>
        <label
          >Devotion<input type="number" class="dev" v-model="devInsert" @keyup.enter="devUpdate"
        /></label>
        <label><input type="range" name="devotion" :value="devotion" disabled /></label>
      </div>
    </section>
    <section></section>
  </fieldset>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['update:level'])

//actualizar los valores a la plantilla
const updateLvl = (event) => {
  level.value = Number(event.target.value)
  emit('update:level', level.value)
}

const level = ref(1)
const xpReach = ref(0)
const xpInsert = ref()

//Suma el XP y calcula el nivel
const xpUpdate = (event) => {
  const inputValue = Number(event.target.value) || 0
  const maxLvl = Number(level.value) * 10 - 1
  xpInsert.value = inputValue
  xpReach.value = xpInsert.value + Number(xpReach.value)
  //restaura E.P. a su valor 0
  xpInsert.value = 0
  //Suve el Nv y Restaura el XP a su valor inicial
  if (xpReach.value > maxLvl) {
    level.value++
    xpReach.value -= maxLvl
    emit('update:level', level.value)
  }
}

//funcion para añadir nueva herida
const wounds = ref([{ id: 1, name: '', stadium: 0, grade: 0 }])

const newWound = (index) => {
  // Verificamos si el campo de nombre no está vacío
  if (wounds.value[index].name == '') {
    wounds.value.splice(index, 1)
  } else if (index === wounds.value.length - 1) {
    const newId = wounds.value.length + 1
    wounds.value.push({ id: newId, name: '', stadium: 0, grade: 0 })
  }
}

const devInsert = ref()
const devotion = ref(0)

const devUpdate = (event) => {
  const inputValue = Number(event.target.value) || 0
  devInsert.value = inputValue
  devotion.value += devInsert.value
  devInsert.value = 0
}
</script>
