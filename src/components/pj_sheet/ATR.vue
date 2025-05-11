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
  max-height: 2.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding-left: 0.4rem;
  box-sizing: border-box;
  overflow: hidden;
  margin: 0.5rem 0;
  cursor: pointer;
  transition: 2s;
}
.expanded .points {
  max-height: 50rem;
}
.expand-btn {
  background-color: transparent;
  height: 3rem;
  padding: 1rem;
  margin: 2rem auto;
  line-height: 0rem;
  border-width: 20px;
  border-style: solid;
  border-image: url(../../assets/decor/frame.png) 100 100 stretch;
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
.karma {
  text-align: center;
}
.karma input[type='range'] {
  height: 4rem;
  width: 18rem;
  border: none;
}
.karma input[type='range']::-moz-range-track {
  background: linear-gradient(to right, #4caf50, #f44336);
  height: 1.7rem;
  border-radius: 1rem;
  border: 2px inset var(--bgLatte);
}
.karma input[type='range']::-moz-range-thumb {
  width: 3rem;
  height: 3rem;
  background: transparent;
  background-image: url(../../src/assets/selector/selector.svg);
  background-size: cover;
  border: none;
  border-radius: 50%;
}
</style>

<template>
  <fieldset>
    <section :class="{ expanded: isExpanded }">
      <div class="row-3">
        <label> Lvl <input type="number" min="1" name="lvl" v-model="level" /> </label>
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
          </select>
        </label>
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
        <label
          ><input type="text" name="deityName" v-model="deityName" @input="updateDeityName"
        /></label>
        <label
          >D.P.<input type="number" name="destinyPoints" v-model="dp" @input="updateDP"
        /></label>
        <label>
          Devotion<input type="number" class="dev" v-model="devInsert" @keyup.enter="devUpdate" />
        </label>
        <label>
          <input type="range" name="devotion" :value="devotion" max="100" disabled />
        </label>
      </div>
      <div class="karma">
        <p>Karma</p>
        <label class="karma"
          ><span>Good</span><input type="range" step="10" value="0" name="karmaGood"
        /></label>
        <label class="karma"
          ><span>Evil</span><input type="range" step="10" value="0" name="karmaEvil"
        /></label>
      </div>
      <button @click="openStats" class="expand-btn">
        View {{ isExpanded ? 'shorten' : 'expanded' }} stats
      </button>
    </section>
  </fieldset>
</template>

<script setup>
import { ref, watch } from 'vue'

//exportar valores a la principal
const deityName = defineModel('deityName')
const level = defineModel('level')
const dp = defineModel('dp')

//Suma el XP y calcula el nivel
const xpReach = ref(0)
const xpInsert = ref()

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
  }
}

//Función para añadir los puntos de atr
const atrPoints = ref(0.3)

watch(level, (newLevel, oldLevel) => {
  if (oldLevel) {
    const levelDifference = newLevel - oldLevel
    atrPoints.value = Number((atrPoints.value + levelDifference * 0.3).toFixed(1))
  } else {
    atrPoints.value = Number((newLevel * 0.3).toFixed(1))
  }
})
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
  // convierte el mapa en un array claves,valor y busca la coincidencia del segundo elemento, por eso _,
  const attribute = Object.entries(dowerMapping).find(
    ([_, dowers]) =>
      //busca en dowers el argumento de la función inicial y así saca a qué atr pertenece esta dt (para cada una)
      dowers.includes(dowerName),
    //obtiene la clave de la dt dada
  )?.[0]

  if (attribute && dtPoints.value[attribute] > 0) {
    // Verifica que la suma de dotes no exceda el límite
    const currentSum = getDowerSum(attribute)
    const attributeValue = attributes.value[attribute]
    //No permite agregar puntos si ya hay repartidos esa máxima cantidad de puntos
    if (currentSum < attributeValue * 3) {
      dower.value[dowerName]++
      dtPoints.value[attribute]--
    }
  }
}
//devolver los dtPoints cuando son borrados manualmente
watch(
  () => ({ ...dower.value }),
  (newDower, oldDower) => {
    Object.keys(dower.value).forEach((dot) => {
      const newValue = newDower[dot]
      const oldValue = oldDower[dot]

      if (oldValue > newValue) {
        const attribute = Object.entries(dowerMapping).find(([_, dowers]) =>
          dowers.includes(dot),
        )?.[0]

        if (attribute) {
          dtPoints.value[attribute] += oldValue - newValue
        }
      }
    })
  },
  //watch si cualquier propiedad del objeto cambia
  { deep: true },
)

const getDowerSum = (attribute) => {
  const dowers = dowerMapping[attribute] || []
  return dowers.reduce((sum, dowerName) => sum + dower.value[dowerName], 0)
}

const watchAttributes = () => {
  //Object. keys es para el objeto attributes cada clave -> atr y que para clave se ejecute con el forEach
  Object.keys(attributes.value).forEach((atr) => {
    watch(
      () => attributes.value[atr],
      (newValue, oldValue) => {
        const newLvl = Math.floor(newValue)
        const oldLvl = Math.floor(oldValue || 0)

        if (newLvl > oldLvl && getDowerSum(atr) < newLvl * 3) {
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

//abrir el menú de stats completo
const isExpanded = ref(false)
const openStats = () => {
  isExpanded.value = !isExpanded.value
}
</script>
