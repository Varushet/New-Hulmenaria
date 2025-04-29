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
  /* height: 2.5rem; */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding-left: 0.4rem;
  box-sizing: border-box;
  overflow: hidden;
  margin: 0.5rem 0;
  cursor: pointer;
}
.points label {
  width: 2.5rem;
}
.points label input {
  margin: 0rem;
}
.cap input {
  border: dashed;
}
.points .buf {
  width: 2.8rem;
}
.points .buf input {
  width: 2.8rem;
}
.points .dt {
  font-size: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.dt p {
  width: 2rem;
  text-align: center;
  align-content: center;
}
section .row-3 {
  flex-wrap: nowrap;
}
.atrPoints {
  position: sticky;
  top: 0rem;
  margin: 0 40%;
  border-width: 20px;
  border-style: solid;
  border-image: url(../../assets/decor/frame.png) 100 100 stretch;
  background-image: url(../../assets/img/parchment.png);
  background-size: 400% 400%;
  background-repeat: no-repeat;
  background-position: center;
}
.especial {
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding-left: 0.4rem;
  box-sizing: border-box;
}
.luck,
.psi,
.esp {
  margin: 0;
  width: 100%;
}

section .especial .luck label {
  width: unset;
}
section .especial .luck select {
  width: 6rem;
  margin: 0;
}
.reg {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
.reg .buf {
  width: 5rem;
}
.reg select {
  width: 8rem;
}
.ill {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.ill input[type='number'] {
  width: 2rem;
  border: none;
  font-size: 2rem;
  margin: 0;
}
.ill img {
  width: 1rem;
  height: 1rem;
  margin: 0;
  background-color: aqua;
  overflow: hidden;
}
.ill button[class*='btn'] {
  width: 1.5rem;
  height: 2rem;
}
.wound {
  width: 10rem;
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
  border: none;
}
.deity input[type='range']::-moz-range-track {
  background: linear-gradient(to right, #4c95af, #f1fc15);
  height: 1.7rem;
  border-radius: 1rem;
  border: 2px inset var(--bgLatte);
}
.deity input[type='range']::-moz-range-thumb {
  width: 3rem;
  height: 3rem;
  background: transparent;
  background-image: url(../../assets/selector/selector.svg);
  background-size: cover;
  border: none;
  border-radius: 50%;
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
      <p class="atrPoints" v-if="atrPoints > 0">{{ atrPoints }}</p>
      <div class="con points">
        <p :class="{ disabled: capCon == con }" @click="addPoint('con')">Con</p>
        <label><input type="number" name="con" v-model="attributes.con" /></label>
        <label class="cap">/<input type="number" name="capCon" v-model="capCon" /></label>
        <label class="buf"><input type="number" name="plusCon" v-model="plusCon" /></label>
        <div class="dt">
          <p @click="addDower('agil')">Agil</p>
          <label><input type="number" name="agil" v-model="dower.agil" /></label>
          <label class="cap">/<input type="number" name="capAgil" /></label>
          <label class="buf"><input type="number" name="plusAgil" /></label>

          <p @click="addDower('end')">End</p>
          <label><input type="number" name="end" v-model="dower.end" /></label>
          <label class="cap">/<input type="number" name="capEnd" /></label>
          <label class="buf"><input type="number" name="plusEnd" /></label>

          <p @click="addDower('strg')">Strg</p>
          <label><input type="number" name="strg" v-model="dower.strg" /></label>
          <label class="cap">/<input type="number" name="capStrg" /></label>
          <label class="buf"><input type="number" name="plusStrg" /></label>

          <p @click="addDower('rap')">Rap</p>
          <label><input type="number" name="rap" v-model="dower.rap" /></label>
          <label class="cap">/<input type="number" name="capRap" /></label>
          <label class="buf"><input type="number" name="plusRap" /></label>

          <p @click="addDower('ref')">Ref</p>
          <label><input type="number" name="ref" v-model="dower.ref" /></label>
          <label class="cap">/<input type="number" name="capRef" /></label>
          <label class="buf"><input type="number" name="plusRef" /></label>

          <p @click="addDower('spd')">Spd</p>
          <label><input type="number" name="spd" v-model="dower.spd" /></label>
          <label class="cap">/<input type="number" name="capSpd" /></label>
          <label class="buf"><input type="number" name="plusSpd" /></label>
        </div>
      </div>
      <div class="int points">
        <p :class="{ disabled: capInt == int }" @click="addPoint('int')">Int</p>
        <label><input type="number" name="int" v-model="attributes.int" /></label>
        <label class="cap">/<input type="number" name="capInt" /></label>
        <label class="buf"><input type="number" name="plusInt" /></label>
        <div class="dt">
          <p @click="addDower('clev')">Clev</p>
          <label><input type="number" name="clev" v-model="dower.clev" /></label>
          <label class="cap">/<input type="number" name="capClev" /></label>
          <label class="buf"><input type="number" name="plusClev" /></label>

          <p @click="addDower('conc')">Conc</p>
          <label><input type="number" name="conc" v-model="dower.conc" /></label>
          <label class="cap">/<input type="number" name="capConc" /></label>
          <label class="buf"><input type="number" name="plusConc" /></label>

          <p @click="addDower('ing')">Ing</p>
          <label><input type="number" name="ing" v-model="dower.ing" /></label>
          <label class="cap">/<input type="number" name="capIng" /></label>
          <label class="buf"><input type="number" name="plusIng" /></label>

          <p @click="addDower('wisd')">Wisd</p>
          <label><input type="number" name="wisd" v-model="dower.wisd" /></label>
          <label class="cap">/<input type="number" name="capWisd" /></label>
          <label class="buf"><input type="number" name="plusWisd" /></label>

          <p @click="addDower('tem')">Tem</p>
          <label><input type="number" name="tem" v-model="dower.tem" /></label>
          <label class="cap">/<input type="number" name="capTem" /></label>
          <label class="buf"><input type="number" name="plusTem" /></label>

          <p @click="addDower('will')">Will</p>
          <label><input type="number" name="will" v-model="dower.will" /></label>
          <label class="cap">/<input type="number" name="capWill" /></label>
          <label class="buf"><input type="number" name="plusWill" /></label>
        </div>
      </div>
      <div class="per points">
        <p :class="{ disabled: capPer == per }" @click="addPoint('per')">Per</p>
        <label><input type="number" name="per" v-model="attributes.per" /></label>
        <label class="cap">/<input type="number" name="capPer" /></label>
        <label class="buf"><input type="number" name="plusPer" /></label>
        <div class="dt">
          <p @click="addDower('emp')">Emp</p>
          <label><input type="number" name="emp" v-model="dower.emp" /></label>
          <label class="cap">/<input type="number" name="capEmp" /></label>
          <label class="buf"><input type="number" name="plusEmp" /></label>

          <p @click="addDower('seek')">Seek</p>
          <label><input type="number" name="seek" v-model="dower.seek" /></label>
          <label class="cap">/<input type="number" name="capSeek" /></label>
          <label class="buf"><input type="number" name="plusSeek" /></label>

          <p @click="addDower('dizz')">Dizz</p>
          <label><input type="number" name="dizz" v-model="dower.dizz" /></label>
          <label class="cap">/<input type="number" name="capDizz" /></label>
          <label class="buf"><input type="number" name="plusDizz" /></label>

          <p @click="addDower('sigh')">Sigh</p>
          <label><input type="number" name="sigh" v-model="dower.sigh" /></label>
          <label class="cap">/<input type="number" name="capSigh" /></label>
          <label class="buf"><input type="number" name="plusSigh" /></label>
        </div>
      </div>
      <div class="car points">
        <p :class="{ disabled: capCar == car }" @click="addPoint('car')">Car</p>
        <label><input type="number" name="car" v-model="attributes.car" /></label>
        <label class="cap">/<input type="number" name="capCar" /></label>
        <label class="buf"><input type="number" name="plusCar" /></label>
        <div class="dt">
          <p @click="addDower('pret')">Pret</p>
          <label><input type="number" name="pret" v-model="dower.pret" /></label>
          <label class="cap">/<input type="number" name="capPret" /></label>
          <label class="buf"><input type="number" name="plusPret" /></label>

          <p @click="addDower('man')">Man</p>
          <label><input type="number" name="man" v-model="dower.man" /></label>
          <label class="cap">/<input type="number" name="capMan" /></label>
          <label class="buf"><input type="number" name="plusMan" /></label>

          <p @click="addDower('sec')">Sec</p>
          <label><input type="number" name="sec" v-model="dower.sec" /></label>
          <label class="cap">/<input type="number" name="capSec" /></label>
          <label class="buf"><input type="number" name="plusSec" /></label>

          <p @click="addDower('ac')">Ac</p>
          <label><input type="number" name="ac" v-model="dower.ac" /></label>
          <label class="cap">/<input type="number" name="capAc" /></label>
          <label class="buf"><input type="number" name="plusAc" /></label>
        </div>
      </div>
      <div class="hab points">
        <p :class="{ disabled: capHab == hab }" @click="addPoint('hab')">Hab</p>
        <label><input type="number" name="hab" v-model="attributes.hab" /></label>
        <label class="cap">/<input type="number" name="capHab" /></label>
        <label class="buf"><input type="number" name="plusHab" /></label>
        <div class="dt">
          <p @click="addDower('art')">Art</p>
          <label><input type="number" name="art" v-model="dower.art" /></label>
          <label class="cap">/<input type="number" name="capArt" /></label>
          <label class="buf"><input type="number" name="plusArt" /></label>

          <p @click="addDower('des')">Des</p>
          <label><input type="number" name="des" v-model="dower.des" /></label>
          <label class="cap">/<input type="number" name="capDes" /></label>
          <label class="buf"><input type="number" name="plusDes" /></label>
        </div>
      </div>
      <div class="especial">
        <div class="luck points">
          <p>Lk</p>
          <label class="luck">
            <select name="luckSelect">
              <option>Choose</option>
              <option>Lucky</option>
              <option>Fortunate</option>
              <option>Hoodoo</option>
              <option>Unlucky</option>
            </select>
          </label>
          <label class="buf"><input type="number" name="luck" /></label>
        </div>
        <div class="psi points">
          <p :class="{ disabled: capPsi == psi }" @click="addPoint('psi')">Psi</p>
          <label><input type="number" name="psi" v-model="attributes.psi" /></label>
          <label class="cap">/<input type="number" name="capPsi" /></label>
          <label class="buf"><input type="number" name="plusPsi" /></label>
        </div>
        <div class="esp points">
          <p :class="{ disabled: capEsp == esp }" @click="addPoint('esp')">Esp</p>
          <label><input type="number" name="esp" v-model="attributes.esp" /></label>
          <label class="cap">/<input type="number" name="capEsp" /></label>
          <label class="buf"><input type="number" name="plusEsp" /></label>
        </div>
      </div>
      <div class="reg">
        <p>Reg</p>
        <label class="buf"><input type="number" name="plusReg" /></label>
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
        <img :src="woundDott" alt="Wound Icon" />
        <label class="wound">
          <input type="text" v-model="wound.name" @blur="newWound(index)" />
        </label>
        <button type="button" class="btn-down" @click="downGrade(wound)"></button>
        <label>
          <input type="number" v-model="wound.stadium" readonly />
        </label>
        <button type="button" class="btn-up" @click="upGrade(wound)"></button>
        <p>G</p>
        <label class="grade"><input type="number" v-model="wound.grade" min="0" readonly /></label>
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
        <label>D.P.<input type="number" name="deityFavor" v-model="dp" /></label>
        <label
          >Devotion<input type="number" class="dev" v-model="devInsert" @keyup.enter="devUpdate" />
        </label>
        <label>
          <input type="range" name="devotion" :value="devotion" max="100" disabled />
        </label>
      </div>
    </section>
    <section></section>
  </fieldset>
</template>

<script setup>
import { ref, watch } from 'vue'

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
    xpReach.value -= maxLvl + 1
    emit('update:level', level.value)
  }
}

//Función para añadir los puntos de dote
const atrPoints = ref(0.3)

watch(level, (newLevel, oldLevel) => {
  if (oldLevel) {
    const levelDifference = newLevel - oldLevel
    atrPoints.value = Number((atrPoints.value + levelDifference * 0.3).toFixed(1))
  } else {
    atrPoints.value = Number((newLevel * 0.3).toFixed(1))
  }
})
if (level.value) {
}

//Aplicar puntos de nivel a los ATR

const attributes = ref({
  con: 0,
  int: 0,
  per: 0,
  car: 0,
  hab: 0,
  psi: 0,
  esp: 0,
})
const dower = ref({
  // Dotes de CON
  agil: 0,
  end: 0,
  strg: 0,
  rap: 0,
  ref: 0,
  spd: 0,
  // Dotes de INT
  clev: 0,
  conc: 0,
  ing: 0,
  wisd: 0,
  tem: 0,
  will: 0,
  // Dotes de PER
  emp: 0,
  seek: 0,
  dizz: 0,
  sigh: 0,
  // Dotes de CAR
  pret: 0,
  man: 0,
  sec: 0,
  ac: 0,
  // Dotes de HAB
  art: 0,
  des: 0,
})
const dowerMapping = {
  con: ['agil', 'end', 'strg', 'rap', 'ref', 'spd'],
  int: ['clev', 'conc', 'ing', 'wisd', 'tem', 'will'],
  per: ['emp', 'seek', 'dizz', 'sigh'],
  car: ['pret', 'man', 'sec', 'ac'],
  hab: ['art', 'des'],
}

const addPoint = (attributeName) => {
  if (atrPoints.value >= 0.1) {
    attributes.value[attributeName] = Number((attributes.value[attributeName] + 0.1).toFixed(1))
    atrPoints.value = Number((atrPoints.value - 0.1).toFixed(1))
  }
}

//añadir puntos 3p de dote por cada ATR
const dtPoints = ref({
  con: 0,
  int: 0,
  per: 0,
  car: 0,
  hab: 0,
})

const addDower = (dowerName) => {
  const attribute = Object.entries(dowerMapping).find(([_, dowers]) =>
    dowers.includes(dowerName),
  )?.[0]

  if (attribute && dtPoints.value[attribute] > 0) {
    dower.value[dowerName]++
    dtPoints.value[attribute]--
  }
}

const watchAttributes = () => {
  Object.keys(attributes.value).forEach((atr) => {
    watch(
      () => attributes.value[atr],
      (newValue, oldValue) => {
        const newLvl = Math.floor(newValue)
        const oldLvl = Math.floor(oldValue || 0)

        if (newLvl > oldLvl) {
          dtPoints.value[atr] += (newLvl - oldLvl) * 3
        }
      },
    )
  })
}
watchAttributes()

//funcion para añadir nueva herida
const wounds = ref([{ id: 1, name: '', stadium: 0, grade: 1 }])

const newWound = (index) => {
  // Verificamos si el campo de nombre no está vacío
  if (
    wounds.value[index].name == '' &&
    wounds.value.length > 1 &&
    index != wounds.value.length - 1
  ) {
    wounds.value.splice(index, 1)
  } else if (index === wounds.value.length - 1 && wounds.value[index].name != '') {
    const newId = wounds.value.length + 1
    wounds.value.push({ id: newId, name: '', stadium: 0, grade: 0 })
  }
}
//Funcion para aumentar el grade de la herida
const upGrade = (wound) => {
  wound.stadium++

  if (wound.stadium > 3) {
    wound.grade++
    wound.stadium = 1
  }
}
const downGrade = (wound) => {
  if (wound.stadium > 0) {
    wound.stadium--
  }

  if (wound.stadium < 1 && wound.grade > 0) {
    wound.grade--
    wound.stadium = 3
  }
}

//Funcion para aumentar la devoción
const devInsert = ref()
const devotion = ref(0)
const dp = ref(0)

const devUpdate = (event) => {
  const inputValue = Number(event.target.value) || 0
  devInsert.value = inputValue
  devotion.value += devInsert.value
  devInsert.value = ''

  if (devotion.value >= 100) {
    dp.value++
    devotion.value = devotion.value - 100
  }
}
</script>
