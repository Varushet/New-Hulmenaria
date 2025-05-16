<style scoped>
@import '../../assets/sheet.css';

form {
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
  <form>
    <section :class="{ expanded: sheetData.isExpanded }">
      <div class="row-3">
        <label> Lvl <input type="number" min="1" name="lvl" v-model="sheetData.level" /> </label>
        <label>
          E.P.
          <input
            type="number"
            min="1"
            name="ep"
            v-model="sheetData.xpInsert"
            @keyup.enter="xpUpdate"
          />
        </label>
        <label>
          X.P.<input type="number" min="1" name="xp" :value="sheetData.xpReach" readonly />
        </label>
      </div>
      <p class="atrPoints" v-if="atrPoints > 0">{{ sheetData.atrPoints }}</p>
      <div class="con points">
        <p
          :class="{ disabled: sheetData.capCon == sheetData.attributes.con }"
          @click="addPoint('con')"
        >
          Con
        </p>
        <label> <input type="number" name="con" v-model="sheetData.attributes.con" /> </label>
        <label class="cap">
          / <input type="number" name="capCon" v-model="sheetData.capCon" />
        </label>
        <label class="buf">
          <input type="number" name="plusCon" v-model="sheetData.plusCon" />
        </label>
        <div class="dt">
          <p @click="addDower('agil')">Agil</p>
          <label> <input type="number" name="agil" v-model="sheetData.dower.agil" /></label>
          <label class="cap">
            /<input type="number" name="capAgil" v-model="sheetData.capAgil" />
          </label>
          <label class="buf">
            <input type="number" name="plusAgil" v-model="sheetData.plusAgil" />
          </label>
          <p @click="addDower('end')">End</p>
          <label> <input type="number" name="end" v-model="sheetData.dower.end" /> </label>
          <label class="cap">
            /<input type="number" name="capEnd" v-model="sheetData.capEnd" />
          </label>
          <label class="buf">
            <input type="number" name="plusEnd" v-model="sheetData.plusEnd" />
          </label>
          <p @click="addDower('strg')">Strg</p>
          <label> <input type="number" name="strg" v-model="sheetData.dower.strg" /> </label>
          <label class="cap">
            /<input type="number" name="capStrg" v-model="sheetData.capStrg" />
          </label>
          <label class="buf">
            <input type="number" name="plusStrg" v-model="sheetData.plusStrg" />
          </label>
          <p @click="addDower('rap')">Rap</p>
          <label> <input type="number" name="rap" v-model="sheetData.dower.rap" /> </label>
          <label class="cap">
            /<input type="number" name="capRap" v-model="sheetData.capRap" />
          </label>
          <label class="buf">
            <input type="number" name="plusRap" v-model="sheetData.plusRap" />
          </label>
          <label> <input type="number" name="ref" v-model="sheetData.dower.ref" /> </label>
          <label class="cap">
            /<input type="number" name="capRef" v-model="sheetData.capRef" />
          </label>
          <label class="buf">
            <input type="number" name="plusRef" v-model="sheetData.plusRef" />
          </label>
          <p @click="addDower('spd')">Spd</p>
          <label> <input type="number" name="spd" v-model="sheetData.dower.spd" /> </label>
          <label class="cap">
            /<input type="number" name="capSpd" v-model="sheetData.capSpd" />
          </label>
          <label class="buf">
            <input type="number" name="plusSpd" v-model="sheetData.plusSpd" />
          </label>
        </div>
      </div>
      <div class="int points">
        <p
          :class="{ disabled: sheetData.capInt == sheetData.attributes.int }"
          @click="addPoint('int')"
        >
          Int
        </p>
        <label> <input type="number" name="int" v-model="sheetData.attributes.int" /> </label>
        <label class="cap">
          /<input type="number" name="capInt" v-model="sheetData.capInt" />
        </label>
        <label class="buf">
          <input type="number" name="plusInt" v-model="sheetData.plusInt" />
        </label>
        <div class="dt">
          <p @click="addDower('clev')">Clev</p>
          <label> <input type="number" name="clev" v-model="sheetData.dower.clev" /> </label>
          <label class="cap">
            /<input type="number" name="capClev" v-model="sheetData.capClev" />
          </label>
          <label class="buf">
            <input type="number" name="plusClev" v-model="sheetData.plusClev" />
          </label>
          <p @click="addDower('conc')">Conc</p>
          <label> <input type="number" name="conc" v-model="sheetData.dower.conc" /> </label>
          <label class="cap">
            /<input type="number" name="capConc" v-model="sheetData.capConc" />
          </label>
          <label class="buf">
            <input type="number" name="plusConc" v-model="sheetData.plusConc" />
          </label>
          <p @click="addDower('ing')">Ing</p>
          <label><input type="number" name="ing" v-model="sheetData.dower.ing" /></label>
          <label class="cap">
            /<input type="number" name="capIng" v-model="sheetData.capIng" />
          </label>
          <label class="buf">
            <input type="number" name="plusIng" v-model="sheetData.plusIng" />
          </label>
          <p @click="addDower('wisd')">Wisd</p>
          <label><input type="number" name="wisd" v-model="sheetData.dower.wisd" /></label>
          <label class="cap">
            /<input type="number" name="capWisd" v-model="sheetData.capWisd" />
          </label>
          <label class="buf">
            <input type="number" name="plusWisd" v-model="sheetData.plusWisd" />
          </label>
          <p @click="addDower('tem')">Tem</p>
          <label><input type="number" name="tem" v-model="sheetData.dower.tem" /></label>
          <label class="cap">
            /<input type="number" name="capTem" v-model="sheetData.capTem" />
          </label>
          <label class="buf">
            <input type="number" name="plusTem" v-model="sheetData.plusTem" />
          </label>
          <p @click="addDower('will')">Will</p>
          <label><input type="number" name="will" v-model="sheetData.dower.will" /></label>
          <label class="cap">
            /<input type="number" name="capWill" v-model="sheetData.capWill" />
          </label>
          <label class="buf">
            <input type="number" name="plusWill" v-model="sheetData.plusWill" />
          </label>
        </div>
      </div>
      <div class="per points">
        <p
          :class="{ disabled: sheetData.capPer == sheetData.attributes.per }"
          @click="addPoint('per')"
        >
          Per
        </p>
        <label><input type="number" name="per" v-model="sheetData.attributes.per" /></label>
        <label class="cap">
          / <input type="number" name="capPer" v-model="sheetData.capPer" />
        </label>
        <label class="buf">
          <input type="number" name="plusPer" v-model="sheetData.plusPer" />
        </label>
        <div class="dt">
          <p @click="addDower('emp')">Emp</p>
          <label><input type="number" name="emp" v-model="sheetData.dower.emp" /></label>
          <label class="cap">
            /<input type="number" name="capEmp" v-model="sheetData.capEmp" />
          </label>
          <label class="buf">
            <input type="number" name="plusEmp" v-model="sheetData.plusEmp" />
          </label>
          <p @click="addDower('seek')">Seek</p>
          <label><input type="number" name="seek" v-model="sheetData.dower.seek" /></label>
          <label class="cap">
            /<input type="number" name="capSeek" v-model="sheetData.capSeek" />
          </label>
          <label class="buf">
            <input type="number" name="plusSeek" v-model="sheetData.plusSeek" />
          </label>
          <p @click="addDower('dizz')">Dizz</p>
          <label><input type="number" name="dizz" v-model="sheetData.dower.dizz" /></label>
          <label class="cap">
            /<input type="number" name="capDizz" v-model="sheetData.capDizz" />
          </label>
          <label class="buf">
            <input type="number" name="plusDizz" v-model="sheetData.plusDizz" />
          </label>
          <p @click="addDower('sigh')">Sigh</p>
          <label><input type="number" name="sigh" v-model="sheetData.dower.sigh" /></label>
          <label class="cap">
            /<input type="number" name="capSigh" v-model="sheetData.capSigh" />
          </label>
          <label class="buf">
            <input type="number" name="plusSigh" v-model="sheetData.plusSigh" />
          </label>
        </div>
      </div>
      <div class="car points">
        <p
          :class="{ disabled: sheetData.capCar == sheetData.attributes.car }"
          @click="addPoint('car')"
        >
          Car
        </p>
        <label><input type="number" name="car" v-model="sheetData.attributes.car" /></label>
        <label class="cap">
          /<input type="number" name="capCar" v-model="sheetData.capCar" />
        </label>
        <label class="buf">
          <input type="number" name="plusCar" v-model="sheetData.plusCar" />
        </label>
        <div class="dt">
          <p @click="addDower('pret')">Pret</p>
          <label><input type="number" name="pret" v-model="sheetData.dower.pret" /></label>
          <label class="cap">
            /<input type="number" name="capPret" v-model="sheetData.capPret" />
          </label>
          <label class="buf">
            <input type="number" name="plusPret" v-model="sheetData.plusPret" />
          </label>
          <p @click="addDower('man')">Man</p>
          <label><input type="number" name="man" v-model="sheetData.dower.man" /></label>
          <label class="cap">
            /<input type="number" name="capMan" v-model="sheetData.capMan" />
          </label>
          <label class="buf">
            <input type="number" name="plusMan" v-model="sheetData.plusMan" />
          </label>
          <p @click="addDower('sec')">Sec</p>
          <label><input type="number" name="sec" v-model="sheetData.dower.sec" /></label>
          <label class="cap">
            /<input type="number" name="capSec" v-model="sheetData.capSec" />
          </label>
          <label class="buf">
            <input type="number" name="plusSec" v-model="sheetData.plusSec" />
          </label>
          <p @click="addDower('ac')">Ac</p>
          <label><input type="number" name="ac" v-model="sheetData.dower.ac" /></label>
          <label class="cap">
            /<input type="number" name="capAc" v-model="sheetData.capAc" />
          </label>
          <label class="buf">
            <input type="number" name="plusAc" v-model="sheetData.plusAc" />
          </label>
        </div>
      </div>
      <div class="hab points">
        <p
          :class="{ disabled: sheetData.capHab == sheetData.attributes.hab }"
          @click="addPoint('hab')"
        >
          Hab
        </p>
        <label><input type="number" name="hab" v-model="sheetData.attributes.hab" /></label>
        <label class="cap">
          /<input type="number" name="capHab" v-model="sheetData.capHab" />
        </label>
        <label class="buf">
          <input type="number" name="plusHab" v-model="sheetData.plusHab" />
        </label>
        <div class="dt">
          <p @click="addDower('art')">Art</p>
          <label><input type="number" name="art" v-model="sheetData.dower.art" /></label>
          <label class="cap">
            /<input type="number" name="capArt" v-model="sheetData.capArt" />
          </label>
          <label class="buf">
            <input type="number" name="plusArt" v-model="sheetData.plusArt" />
          </label>
          <p @click="addDower('des')">Des</p>
          <label><input type="number" name="des" v-model="sheetData.dower.des" /></label>
          <label class="cap">
            /<input type="number" name="capDes" v-model="sheetData.capDes" />
          </label>
          <label class="buf">
            <input type="number" name="plusDes" v-model="sheetData.plusDes" />
          </label>
        </div>
      </div>
      <div class="especial">
        <div class="luck points">
          <p>Lk</p>
          <label class="luck">
            <select name="luckSelect" v-model="sheetData.luckSelect">
              <option>Choose</option>
              <option>Lucky</option>
              <option>Fortunate</option>
              <option>Hoodoo</option>
              <option>Unlucky</option>
            </select>
          </label>
          <label class="buf"> <input type="number" name="luck" v-model="sheetData.luck" /></label>
        </div>
        <div class="psi points">
          <p
            :class="{ disabled: sheetData.capPsi == sheetData.attributes.psi }"
            @click="addPoint('psi')"
          >
            Psi
          </p>
          <label><input type="number" name="psi" v-model="sheetData.attributes.psi" /></label>
          <label class="cap">
            /<input type="number" name="capPsi" v-model="sheetData.capPsi" />
          </label>
          <label class="buf">
            <input type="number" name="plusPsi" v-model="sheetData.plusPsi" />
          </label>
        </div>
        <div class="esp points">
          <p
            :class="{ disabled: sheetData.capEsp == sheetData.attributes.esp }"
            @click="addPoint('esp')"
          >
            Esp
          </p>
          <label><input type="number" name="esp" v-model="sheetData.attributes.esp" /></label>
          <label class="cap">
            /<input type="number" name="capEsp" v-model="sheetData.capEsp" />
          </label>
          <label class="buf">
            <input type="number" name="plusEsp" v-model="sheetData.plusEsp" />
          </label>
        </div>
      </div>
      <div class="reg">
        <p>Reg</p>
        <label class="buf">
          <input type="number" name="plusReg" v-model="sheetData.plusReg" />
        </label>
        <label>
          <select name="regSelect" v-model="sheetData.regSelect">
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
      <div class="ill" v-for="(wound, index) in sheetData.wounds" :key="wound.id">
        <img :src="woundDott" alt="Wound Icon" />
        <label class="wound">
          <input type="text" v-model="wound.name" @blur="newWound(index)" />
        </label>
        <button type="button" class="btn-down" @click="downGrade(wound)"></button>
        <label> <input type="number" v-model="wound.stadium" readonly /> </label>
        <button type="button" class="btn-up" @click="upGrade(wound)"></button>
        <p>G</p>
        <label class="grade"> <input type="number" v-model="wound.grade" min="0" readonly /></label>
      </div>
      <div class="deity">
        <p>Deity</p>
        <label>
          <select name="deityType" v-model="sheetData.deityType">
            <option>Heritage</option>
            <option>Idolic</option>
            <option>Elemental</option>
            <option>Primordial</option>
            <option>Elder</option>
            <option>Eldrich</option>
          </select>
        </label>
        <label>
          <input
            type="text"
            name="deityName"
            v-model="sheetData.deityName"
            @input="updateDeityName"
          />
        </label>
        <label
          >D.P.<input type="number" name="destinyPoints" v-model="sheetData.dp" @input="updateDP" />
        </label>
        <label>
          Devotion<input
            type="number"
            class="dev"
            v-model="sheetData.devInsert"
            @keyup.enter="devUpdate"
          />
        </label>
        <label>
          <input type="range" name="devotion" :value="sheetData.devotion" max="100" disabled />
        </label>
      </div>
      <div class="karma">
        <p>Karma</p>
        <label class="karma">
          <span>Good</span>
          <input type="range" step="10" v-model="sheetData.karmaGood" name="karmaGood" />
        </label>
        <label class="karma">
          <span>Evil</span>
          <input type="range" step="10" v-model="sheetData.karmaEvil" name="karmaEvil" />
        </label>
      </div>
      <button @click="openStats" class="expand-btn">
        View {{ sheetData.isExpanded ? 'shorten' : 'expanded' }} stats
      </button>
    </section>
  </form>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useSheetDataStore } from '@/stores/sheetDataStore'

const sheetDataStore = useSheetDataStore()
const sheetData = sheetDataStore.sheetData

//exportar valores a la principal
// // const deityName = defineModel('deityName')
// // const level = defineModel('level')
// // const dp = defineModel('dp')

//Suma el XP y calcula el nivel
// // const xpReach = ref(0)
// // const xpInsert = ref()

// Suma el XP y calcula el nivel
const xpUpdate = (event) => {
  const inputValue = Number(event.target.value) || 0
  const maxLvl = Number(sheetData.level) * 10 - 1
  sheetData.xpInsert = inputValue
  sheetData.xpReach += inputValue
  // Restaura E.P. a su valor 0
  sheetData.xpInsert = 0
  // Sube el Nv y Restaura el XP a su valor inicial
  if (sheetData.xpReach > maxLvl) {
    sheetData.level++
    sheetData.xpReach -= maxLvl + 1
  }
}

//Función para añadir los puntos de atr
// // const atrPoints = ref(0.3)

watch(sheetData.level, (newLevel, oldLevel) => {
  if (oldLevel) {
    const levelDifference = newLevel - oldLevel
    sheetData.atrPoints = Number((sheetData.atrPoints + levelDifference * 0.3).toFixed(1))
  } else {
    sheetData.atrPoints = Number((newLevel * 0.3).toFixed(1))
  }
})

// Aplicar puntos de nivel a los ATR
const addPoint = (attributeName) => {
  sheetDataStore.addPoint(attributeName)
}

// Añadir puntos 3p de dote por cada ATR
const addDower = (dowerName) => {
  sheetDataStore.addDower(dowerName)
}

// Función para añadir nueva herida
const newWound = (index) => {
  sheetDataStore.newWound(index)
}

// Función para aumentar el grade de la herida
const upGrade = (wound) => {
  sheetDataStore.upGrade(wound)
}

// Función para disminuir el grade de la herida
const downGrade = (wound) => {
  sheetDataStore.downGrade(wound)
}

// Función para aumentar la devoción
const devUpdate = (event) => {
  sheetDataStore.devUpdate(event)
}

// Abrir el menú de stats completo
const openStats = () => {
  sheetDataStore.openStats()
}

// Guardar formulario completo
const saveForm = () => {
  sheetDataStore.saveFormData()
}

// Cargar formulario completo
const loadForm = () => {
  sheetDataStore.loadFormData()
}
//Aplicar puntos de nivel a los ATR

// // const attributes = ref({
// //   con: 0,
// //   int: 0,
// //   per: 0,
// //   car: 0,
// //   hab: 0,
// //   psi: 0,
// //   esp: 0,
// // })
// // const dower = ref({
// //   // Dotes de CON
// //   agil: 0,
// //   end: 0,
// //   strg: 0,
// //   rap: 0,
// //   ref: 0,
// //   spd: 0,
// //   // Dotes de INT
// //   clev: 0,
// //   conc: 0,
// //   ing: 0,
// //   wisd: 0,
// //   tem: 0,
// //   will: 0,
// //   // Dotes de PER
// //   emp: 0,
// //   seek: 0,
// //   dizz: 0,
// //   sigh: 0,
// //   // Dotes de CAR
// //   pret: 0,
// //   man: 0,
// //   sec: 0,
// //   ac: 0,
// //   // Dotes de HAB
// //   art: 0,
// //   des: 0,
// // })
const dowerMapping = {
  con: ['agil', 'end', 'strg', 'rap', 'ref', 'spd'],
  int: ['clev', 'conc', 'ing', 'wisd', 'tem', 'will'],
  per: ['emp', 'seek', 'dizz', 'sigh'],
  car: ['pret', 'man', 'sec', 'ac'],
  hab: ['art', 'des'],
}

// // const addPoint = (attributeName) => {
// //   if (atrPoints.value >= 0.1) {
// //     attributes.value[attributeName] = Number((attributes.value[attributeName] + 0.1).toFixed(1))
// //     atrPoints.value = Number((atrPoints.value - 0.1).toFixed(1))
// //   }
// // }

//añadir puntos 3p de dote por cada ATR
const dtPoints = ref({
  con: 0,
  int: 0,
  per: 0,
  car: 0,
  hab: 0,
})

// // const addDower = (dowerName) => {
// //   // convierte el mapa en un array claves,valor y busca la coincidencia del segundo elemento, por eso _,
// //   const attribute = Object.entries(dowerMapping).find(
// //     ([_, dowers]) =>
// //       //busca en dowers el argumento de la función inicial y así saca a qué atr pertenece esta dt (para cada una)
// //       dowers.includes(dowerName),
// //     //obtiene la clave de la dt dada
// //   )?.[0]

// //   if (attribute && dtPoints.value[attribute] > 0) {
// //     // Verifica que la suma de dotes no exceda el límite
// //     const currentSum = getDowerSum(attribute)
// //     const attributeValue = attributes.value[attribute]
// //     //No permite agregar puntos si ya hay repartidos esa máxima cantidad de puntos
// //     if (currentSum < attributeValue * 3) {
// //       dower.value[dowerName]++
// //       dtPoints.value[attribute]--
// //     }
// //   }
// // }
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

// // const getDowerSum = (attribute) => {
// //   const dowers = dowerMapping[attribute] || []
// //   return dowers.reduce((sum, dowerName) => sum + dower.value[dowerName], 0)
// // }

// // const watchAttributes = () => {
// //   //Object. keys es para el objeto attributes cada clave -> atr y que para clave se ejecute con el forEach
// //   Object.keys(attributes.value).forEach((atr) => {
// //     watch(
// //       () => attributes.value[atr],
// //       (newValue, oldValue) => {
// //         const newLvl = Math.floor(newValue)
// //         const oldLvl = Math.floor(oldValue || 0)

// //         if (newLvl > oldLvl && getDowerSum(atr) < newLvl * 3) {
// //           dtPoints.value[atr] += (newLvl - oldLvl) * 3
// //         }
// //       },
// //     )
// //   })
// // }

watchAttributes()

//funcion para añadir nueva herida
// // const wounds = ref([{ id: 1, name: '', stadium: 0, grade: 1 }])

// // const newWound = (index) => {
// //   // Verificamos si el campo de nombre no está vacío
// //   if (
// //     wounds.value[index].name == '' &&
// //     wounds.value.length > 1 &&
// //     index != wounds.value.length - 1
// //   ) {
// //     wounds.value.splice(index, 1)
// //   } else if (index === wounds.value.length - 1 && wounds.value[index].name != '') {
// //     const newId = wounds.value.length + 1
// //     wounds.value.push({ id: newId, name: '', stadium: 0, grade: 0 })
// //   }
// // }
// // //Funcion para aumentar el grade de la herida
// // const upGrade = (wound) => {
// //   wound.stadium++

// //   if (wound.stadium > 3) {
// //     wound.grade++
// //     wound.stadium = 1
// //   }
// // }
// // const downGrade = (wound) => {
// //   if (wound.stadium > 0) {
// //     wound.stadium--
// //   }

// //   if (wound.stadium < 1 && wound.grade > 0) {
// //     wound.grade--
// //     wound.stadium = 3
// //   }
// // }

//Funcion para aumentar la devoción
// // const devInsert = ref()
// // const devotion = ref(0)

// // const devUpdate = (event) => {
// //   const inputValue = Number(event.target.value) || 0
// //   devInsert.value = inputValue
// //   devotion.value += devInsert.value
// //   devInsert.value = ''

// //   if (devotion.value >= 100) {
// //     dp.value++
// //     devotion.value = devotion.value - 100
// //   }
// // }

//abrir el menú de stats completo
// // const isExpanded = ref(false)
// // const openStats = () => {
// //   isExpanded.value = !isExpanded.value
// // }
</script>
