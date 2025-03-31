<style scoped>
@import '../../assets/sheet.css';

fieldset {
  background-size: 103% 109%;
}
section {
  background-image: url(../../assets/img/parchmentOld.png);
  background-size: 100% 105%;
  background-repeat: no-repeat;
  background-position: center;
}
.pouch {
  background-image: url(../../assets/img/parchmentOld.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
  padding: 1rem 0;
}
.pouch p {
  width: 100%;
  font-size: 1.5rem;
}
.pouch label {
  height: 2.5rem;
  font-size: 1rem;
}
.pouch input {
  width: 4rem;
  border: 1px solid black;
}
.pouch input[type='text'] {
  width: 2rem;
  border: dotted;
  font-size: 1rem;
}
.inv {
  height: 20rem;
}
.inv div:first-child {
  font-size: 2rem;
  display: flex;
  justify-content: space-around;
}
button {
  background: transparent;
  cursor: pointer;
  border-radius: 25%;
}
button img {
  height: 2.5rem;
}
</style>

<template>
  <fieldset>
    <div class="pouch">
      <p>Pouch:</p>
      <label>Cb<input type="number" name="cb" /></label>
      <label>Pt<input type="number" name="pt" /></label>
      <label>Or<input type="number" name="or" /></label>
      <label>Pl<input type="number" name="pl" /></label>
      <label><input type="text" name="coin1" /></label>
      <label><input type="number" name="coin1Cant" /></label>
      <label><input type="text" name="coin2" /></label>
      <label><input type="number" name="coin2Cant" /></label>
      <label><input type="text" name="coin3" /></label>
      <label><input type="number" name="coin3Cant" /></label>
    </div>
    <section class="inv" id="inv">
      <div>
        <p @click="openBag" class="bag-title">Main Bag</p>
        <button type="button" @click="showDialog('bag')">
          <img src="/src/assets/icon/pouch.png" alt="Bag img" />
        </button>
      </div>
      <dialog id="bag">
        <p>Main Bag</p>
        <div>
          <label class="box-name"><input type="text" name="bag-name" /></label>
          <label class="box-text">t<input type="text" name="bag-t" /></label>
          <label class="box-weight">Mx<input type="number" name="bag-mx" /></label>
          <label class="box-text">m<input type="text" name="bag-m" /></label>
          <label class="box-number">c<input type="number" name="bag-c" /></label>
          <label class="box-number">r<input type="number" name="bag-r" /></label>
          <label class="box-text">e<input type="text" name="bag-e" /></label>
          <label class="box-weight">%d<input type="number" name="bag-d" /></label>
        </div>
      </dialog>
      <div class="row-bag">
        <label><input type="text" name="obj1Name" /></label>
        <label>u<input type="number" name="obj1-u" /></label>
        <label>p<input type="number" name="obj1-p" /></label>
      </div>
      <div class="row-bag">
        <label><input type="text" name="obj2Name" /></label>
        <label>u<input type="number" name="obj2-u" /></label>
        <label>p<input type="number" name="obj2-p" /></label>
      </div>
      <div class="row-bag">
        <label><input type="text" name="obj3Name" /></label>
        <label>u<input type="number" name="obj3-u" /></label>
        <label>p<input type="number" name="obj3-p" /></label>
      </div>
      <div class="row-bag">
        <label><input type="text" name="obj4Name" /></label>
        <label>u<input type="number" name="obj4-u" /></label>
        <label>p<input type="number" name="obj4-p" /></label>
      </div>
    </section>
    <section class="inv2" id="inv2">
      <div>
        <p @click="openBag" class="bag-title">{{ bagName }} {{ bagType }}</p>
        <button type="button" @click="showDialog('bag2')">
          <img src="/src/assets/icon/pouch.png" alt="Bag img" />
        </button>
      </div>
      <dialog id="bag2">
        <p>{{ bagName }} {{ bagType }}</p>
        <div>
          <label class="box-name"
            ><input type="text" name="bag2-name" :value="bagName" @input="updateBagName"
          /></label>
          <label class="box-text"
            >t<input type="text" name="bg2-t" :value="bagType" @input="updateBagType"
          /></label>
          <label class="box-weight">Mx<input type="number" name="bg2-mx" /></label>
          <label class="box-text">m<input type="text" name="bg2-m" /></label>
          <label class="box-number">c<input type="number" name="bg2-c" /></label>
          <label class="box-number">r<input type="number" name="bg2-r" /></label>
          <label class="box-text">e<input type="text" name="bg2-e" /></label>
          <label class="box-weight">%d<input type="number" name="bg2-d" /></label>
        </div>
      </dialog>
      <div class="row-bag">
        <label><input type="text" name="obj1Name" /></label>
        <label>u<input type="number" name="obj1-u" /></label>
        <label>p<input type="number" name="obj1-p" /></label>
      </div>
      <div class="row-bag">
        <label><input type="text" name="obj2Name" /></label>
        <label>u<input type="number" name="obj2-u" /></label>
        <label>p<input type="number" name="obj2-p" /></label>
      </div>
      <div class="row-bag">
        <label><input type="text" name="obj3Name" /></label>
        <label>u<input type="number" name="obj3-u" /></label>
        <label>p<input type="number" name="obj3-p" /></label>
      </div>
      <div class="row-bag">
        <label><input type="text" name="obj4Name" /></label>
        <label>u<input type="number" name="obj4-u" /></label>
        <label>p<input type="number" name="obj4-p" /></label>
      </div>
    </section>
  </fieldset>
</template>

<script setup>
import { ref } from 'vue'

const showDialog = (dialogId) => {
  const dialog = document.querySelector(`#${dialogId}`)
  dialog.showModal()

  dialog.addEventListener('click', (x) => {
    if (x.target === dialog) {
      dialog.close()
    }
  })
}

const bagName = ref('')
const bagType = ref('')

const updateBagName = (event) => {
  bagName.value = event.target.value
}

const updateBagType = (event) => {
  bagType.value = event.target.value
}
</script>
