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
    <section :class="{ expanded: sheetData.atr.isExpanded }">
      <div class="row-3">
        <label>
          Lvl <input type="number" min="1" name="lvl" v-model="sheetData.atr.level" />
        </label>
        <label>
          E.P.
          <input
            type="number"
            min="1"
            name="ep"
            v-model="sheetData.atr.xpInsert"
            @keyup.enter="xpUpdate"
          />
        </label>
        <label>
          X.P.<input type="number" min="1" name="xp" :value="sheetData.atr.xpReach" readonly />
        </label>
      </div>
      <p class="atrPoints" v-if="sheetData.atr.atrPoints > 0">{{ sheetData.atr.atrPoints }}</p>
      <div class="con points">
        <p
          :class="{ disabled: sheetData.atr.capCon == sheetData.atr.attributes.con }"
          @click="addPoint('con')"
        >
          Con
        </p>
        <label> <input type="number" name="con" v-model="sheetData.atr.attributes.con" /> </label>
        <label class="cap">
          / <input type="number" name="capCon" v-model="sheetData.atr.capCon" />
        </label>
        <label class="buf">
          <input type="number" name="plusCon" v-model="sheetData.atr.plusCon" />
        </label>
        <div class="dt">
          <p @click="addDower('agil')">Agil</p>
          <label> <input type="number" name="agil" v-model="sheetData.atr.dower.agil" /></label>
          <label class="cap">
            /<input type="number" name="capAgil" v-model="sheetData.atr.capAgil" />
          </label>
          <label class="buf">
            <input type="number" name="plusAgil" v-model="sheetData.atr.plusAgil" />
          </label>
          <p @click="addDower('end')">End</p>
          <label> <input type="number" name="end" v-model="sheetData.atr.dower.end" /> </label>
          <label class="cap">
            /<input type="number" name="capEnd" v-model="sheetData.atr.capEnd" />
          </label>
          <label class="buf">
            <input type="number" name="plusEnd" v-model="sheetData.atr.plusEnd" />
          </label>
          <p @click="addDower('strg')">Strg</p>
          <label> <input type="number" name="strg" v-model="sheetData.atr.dower.strg" /> </label>
          <label class="cap">
            /<input type="number" name="capStrg" v-model="sheetData.atr.capStrg" />
          </label>
          <label class="buf">
            <input type="number" name="plusStrg" v-model="sheetData.atr.plusStrg" />
          </label>
          <p @click="addDower('rap')">Rap</p>
          <label> <input type="number" name="rap" v-model="sheetData.atr.dower.rap" /> </label>
          <label class="cap">
            /<input type="number" name="capRap" v-model="sheetData.atr.capRap" />
          </label>
          <label class="buf">
            <input type="number" name="plusRap" v-model="sheetData.atr.plusRap" />
          </label>
          <label> <input type="number" name="ref" v-model="sheetData.atr.dower.ref" /> </label>
          <label class="cap">
            /<input type="number" name="capRef" v-model="sheetData.atr.capRef" />
          </label>
          <label class="buf">
            <input type="number" name="plusRef" v-model="sheetData.atr.plusRef" />
          </label>
          <p @click="addDower('spd')">Spd</p>
          <label> <input type="number" name="spd" v-model="sheetData.atr.dower.spd" /> </label>
          <label class="cap">
            /<input type="number" name="capSpd" v-model="sheetData.atr.capSpd" />
          </label>
          <label class="buf">
            <input type="number" name="plusSpd" v-model="sheetData.atr.plusSpd" />
          </label>
        </div>
      </div>
      <div class="int points">
        <p
          :class="{ disabled: sheetData.atr.capInt == sheetData.atr.attributes.int }"
          @click="addPoint('int')"
        >
          Int
        </p>
        <label> <input type="number" name="int" v-model="sheetData.atr.attributes.int" /> </label>
        <label class="cap">
          /<input type="number" name="capInt" v-model="sheetData.atr.capInt" />
        </label>
        <label class="buf">
          <input type="number" name="plusInt" v-model="sheetData.atr.plusInt" />
        </label>
        <div class="dt">
          <p @click="addDower('clev')">Clev</p>
          <label> <input type="number" name="clev" v-model="sheetData.atr.dower.clev" /> </label>
          <label class="cap">
            /<input type="number" name="capClev" v-model="sheetData.atr.capClev" />
          </label>
          <label class="buf">
            <input type="number" name="plusClev" v-model="sheetData.atr.plusClev" />
          </label>
          <p @click="addDower('conc')">Conc</p>
          <label> <input type="number" name="conc" v-model="sheetData.atr.dower.conc" /> </label>
          <label class="cap">
            /<input type="number" name="capConc" v-model="sheetData.atr.capConc" />
          </label>
          <label class="buf">
            <input type="number" name="plusConc" v-model="sheetData.atr.plusConc" />
          </label>
          <p @click="addDower('ing')">Ing</p>
          <label><input type="number" name="ing" v-model="sheetData.atr.dower.ing" /></label>
          <label class="cap">
            /<input type="number" name="capIng" v-model="sheetData.atr.capIng" />
          </label>
          <label class="buf">
            <input type="number" name="plusIng" v-model="sheetData.atr.plusIng" />
          </label>
          <p @click="addDower('wisd')">Wisd</p>
          <label><input type="number" name="wisd" v-model="sheetData.atr.dower.wisd" /></label>
          <label class="cap">
            /<input type="number" name="capWisd" v-model="sheetData.atr.capWisd" />
          </label>
          <label class="buf">
            <input type="number" name="plusWisd" v-model="sheetData.atr.plusWisd" />
          </label>
          <p @click="addDower('tem')">Tem</p>
          <label><input type="number" name="tem" v-model="sheetData.atr.dower.tem" /></label>
          <label class="cap">
            /<input type="number" name="capTem" v-model="sheetData.atr.capTem" />
          </label>
          <label class="buf">
            <input type="number" name="plusTem" v-model="sheetData.atr.plusTem" />
          </label>
          <p @click="addDower('will')">Will</p>
          <label><input type="number" name="will" v-model="sheetData.atr.dower.will" /></label>
          <label class="cap">
            /<input type="number" name="capWill" v-model="sheetData.atr.capWill" />
          </label>
          <label class="buf">
            <input type="number" name="plusWill" v-model="sheetData.atr.plusWill" />
          </label>
        </div>
      </div>
      <div class="per points">
        <p
          :class="{ disabled: sheetData.atr.capPer == sheetData.atr.attributes.per }"
          @click="addPoint('per')"
        >
          Per
        </p>
        <label><input type="number" name="per" v-model="sheetData.atr.attributes.per" /></label>
        <label class="cap">
          / <input type="number" name="capPer" v-model="sheetData.atr.capPer" />
        </label>
        <label class="buf">
          <input type="number" name="plusPer" v-model="sheetData.atr.plusPer" />
        </label>
        <div class="dt">
          <p @click="addDower('emp')">Emp</p>
          <label><input type="number" name="emp" v-model="sheetData.atr.dower.emp" /></label>
          <label class="cap">
            /<input type="number" name="capEmp" v-model="sheetData.atr.capEmp" />
          </label>
          <label class="buf">
            <input type="number" name="plusEmp" v-model="sheetData.atr.plusEmp" />
          </label>
          <p @click="addDower('seek')">Seek</p>
          <label><input type="number" name="seek" v-model="sheetData.atr.dower.seek" /></label>
          <label class="cap">
            /<input type="number" name="capSeek" v-model="sheetData.atr.capSeek" />
          </label>
          <label class="buf">
            <input type="number" name="plusSeek" v-model="sheetData.atr.plusSeek" />
          </label>
          <p @click="addDower('dizz')">Dizz</p>
          <label><input type="number" name="dizz" v-model="sheetData.atr.dower.dizz" /></label>
          <label class="cap">
            /<input type="number" name="capDizz" v-model="sheetData.atr.capDizz" />
          </label>
          <label class="buf">
            <input type="number" name="plusDizz" v-model="sheetData.atr.plusDizz" />
          </label>
          <p @click="addDower('sigh')">Sigh</p>
          <label><input type="number" name="sigh" v-model="sheetData.atr.dower.sigh" /></label>
          <label class="cap">
            /<input type="number" name="capSigh" v-model="sheetData.atr.capSigh" />
          </label>
          <label class="buf">
            <input type="number" name="plusSigh" v-model="sheetData.atr.plusSigh" />
          </label>
        </div>
      </div>
      <div class="car points">
        <p
          :class="{ disabled: sheetData.atr.capCar == sheetData.atr.attributes.car }"
          @click="addPoint('car')"
        >
          Car
        </p>
        <label><input type="number" name="car" v-model="sheetData.atr.attributes.car" /></label>
        <label class="cap">
          /<input type="number" name="capCar" v-model="sheetData.atr.capCar" />
        </label>
        <label class="buf">
          <input type="number" name="plusCar" v-model="sheetData.atr.plusCar" />
        </label>
        <div class="dt">
          <p @click="addDower('pret')">Pret</p>
          <label><input type="number" name="pret" v-model="sheetData.atr.dower.pret" /></label>
          <label class="cap">
            /<input type="number" name="capPret" v-model="sheetData.atr.capPret" />
          </label>
          <label class="buf">
            <input type="number" name="plusPret" v-model="sheetData.atr.plusPret" />
          </label>
          <p @click="addDower('man')">Man</p>
          <label><input type="number" name="man" v-model="sheetData.atr.dower.man" /></label>
          <label class="cap">
            /<input type="number" name="capMan" v-model="sheetData.atr.capMan" />
          </label>
          <label class="buf">
            <input type="number" name="plusMan" v-model="sheetData.atr.plusMan" />
          </label>
          <p @click="addDower('sec')">Sec</p>
          <label><input type="number" name="sec" v-model="sheetData.atr.dower.sec" /></label>
          <label class="cap">
            /<input type="number" name="capSec" v-model="sheetData.atr.capSec" />
          </label>
          <label class="buf">
            <input type="number" name="plusSec" v-model="sheetData.atr.plusSec" />
          </label>
          <p @click="addDower('ac')">Ac</p>
          <label><input type="number" name="ac" v-model="sheetData.atr.dower.ac" /></label>
          <label class="cap">
            /<input type="number" name="capAc" v-model="sheetData.atr.capAc" />
          </label>
          <label class="buf">
            <input type="number" name="plusAc" v-model="sheetData.atr.plusAc" />
          </label>
        </div>
      </div>
      <div class="hab points">
        <p
          :class="{ disabled: sheetData.atr.capHab == sheetData.atr.attributes.hab }"
          @click="addPoint('hab')"
        >
          Hab
        </p>
        <label><input type="number" name="hab" v-model="sheetData.atr.attributes.hab" /></label>
        <label class="cap">
          /<input type="number" name="capHab" v-model="sheetData.atr.capHab" />
        </label>
        <label class="buf">
          <input type="number" name="plusHab" v-model="sheetData.atr.plusHab" />
        </label>
        <div class="dt">
          <p @click="addDower('art')">Art</p>
          <label><input type="number" name="art" v-model="sheetData.atr.dower.art" /></label>
          <label class="cap">
            /<input type="number" name="capArt" v-model="sheetData.atr.capArt" />
          </label>
          <label class="buf">
            <input type="number" name="plusArt" v-model="sheetData.atr.plusArt" />
          </label>
          <p @click="addDower('des')">Des</p>
          <label><input type="number" name="des" v-model="sheetData.atr.dower.des" /></label>
          <label class="cap">
            /<input type="number" name="capDes" v-model="sheetData.atr.capDes" />
          </label>
          <label class="buf">
            <input type="number" name="plusDes" v-model="sheetData.atr.plusDes" />
          </label>
        </div>
      </div>
      <div class="especial">
        <div class="luck points">
          <p>Lk</p>
          <label class="luck">
            <select name="luckSelect" v-model="sheetData.atr.luckSelect">
              <option>Choose</option>
              <option>Lucky</option>
              <option>Fortunate</option>
              <option>Hoodoo</option>
              <option>Unlucky</option>
            </select>
          </label>
          <label class="buf">
            <input type="number" name="luck" v-model="sheetData.atr.luck"
          /></label>
        </div>
        <div class="psi points">
          <p
            :class="{ disabled: sheetData.atr.capPsi == sheetData.atr.attributes.psi }"
            @click="addPoint('psi')"
          >
            Psi
          </p>
          <label><input type="number" name="psi" v-model="sheetData.atr.attributes.psi" /></label>
          <label class="cap">
            /<input type="number" name="capPsi" v-model="sheetData.atr.capPsi" />
          </label>
          <label class="buf">
            <input type="number" name="plusPsi" v-model="sheetData.atr.plusPsi" />
          </label>
        </div>
        <div class="esp points">
          <p
            :class="{ disabled: sheetData.atr.capEsp == sheetData.atr.attributes.esp }"
            @click="addPoint('esp')"
          >
            Esp
          </p>
          <label><input type="number" name="esp" v-model="sheetData.atr.attributes.esp" /></label>
          <label class="cap">
            /<input type="number" name="capEsp" v-model="sheetData.atr.capEsp" />
          </label>
          <label class="buf">
            <input type="number" name="plusEsp" v-model="sheetData.atr.plusEsp" />
          </label>
        </div>
      </div>
      <div class="reg">
        <p>Reg</p>
        <label class="buf">
          <input type="number" name="plusReg" v-model="sheetData.atr.plusReg" />
        </label>
        <label>
          <select name="regSelect" v-model="sheetData.atr.regSelect">
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
      <div class="ill" v-for="(wound, index) in sheetData.atr.wounds" :key="wound.id">
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
          <select name="deityType" v-model="sheetData.atr.deityType">
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
            v-model="sheetData.atr.deityName"
            @input="updateDeityName"
          />
        </label>
        <label
          >D.P.<input
            type="number"
            name="destinyPoints"
            v-model="sheetData.atr.dp"
            @input="updateDP"
          />
        </label>
        <label>
          Devotion<input
            type="number"
            class="dev"
            v-model="sheetData.atr.devInsert"
            @keyup.enter="devUpdate"
          />
        </label>
        <label>
          <input type="range" name="devotion" :value="sheetData.atr.devotion" max="100" disabled />
        </label>
      </div>
      <div class="karma">
        <p>Karma</p>
        <label class="karma">
          <span>Good</span>
          <input type="range" step="10" v-model="sheetData.atr.karmaGood" name="karmaGood" />
        </label>
        <label class="karma">
          <span>Evil</span>
          <input type="range" step="10" v-model="sheetData.atr.karmaEvil" name="karmaEvil" />
        </label>
      </div>
      <button @click="openStats" class="expand-btn">
        View {{ sheetData.atr.isExpanded ? 'shorten' : 'expanded' }} stats
      </button>
    </section>
  </form>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useSheetDataStore } from '@/stores/sheetDataStore'

const sheetDataStore = useSheetDataStore()
const sheetData = sheetDataStore.sheetData

// Suma el XP y calcula el nivel
const xpUpdate = (event) => {
  const inputValue = Number(event.target.value) || 0
  const maxLvl = Number(sheetData.atr.level) * 10 - 1
  sheetData.atr.xpInsert = inputValue
  sheetData.atr.xpReach += inputValue
  // Restaura E.P. a su valor 0
  sheetData.atr.xpInsert = 0
  // Sube el Nv y Restaura el XP a su valor inicial
  if (sheetData.atr.xpReach > maxLvl) {
    sheetData.atr.level++
    sheetData.atr.xpReach -= maxLvl + 1
  }
}

//Función para añadir los puntos de atr
// // const atrPoints = ref(0.3)

watch(sheetData.atr.level, (newLevel, oldLevel) => {
  if (oldLevel) {
    const levelDifference = newLevel - oldLevel
    sheetData.atr.atrPoints = Number((sheetData.atr.atrPoints + levelDifference * 0.3).toFixed(1))
  } else {
    sheetData.atr.atrPoints = Number((newLevel * 0.3).toFixed(1))
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

//devolver los dtPoints cuando son borrados manualmente
watch(
  () => ({ ...sheetData.atr.dower }),
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
</script>
