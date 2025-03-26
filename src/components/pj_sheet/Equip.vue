<style scoped>
@import '../../assets/sheet.css';

/*Botonera*/
.equipo {
  height: 100%;
  display: grid;
  grid-template: repeat(12, 1fr) / repeat(7, 1fr);
}
.equipo aside {
  display: flex;
  align-items: center;
  justify-content: center;
}
.equipo button {
  background: transparent;
  background-color: rgba(150, 80, 22, 0.405);
  border: none;
  border-radius: 1rem;
}
.equipo button img {
  width: 3rem;
  height: 3rem;
  opacity: 0;
  transition: 0.5s;
}
.equipo button:hover img {
  opacity: 1;
}
.largo,
aside .largo img {
  height: 5rem;
}
.corto,
aside .corto img {
  height: 3rem;
}
.abalorio,
aside .abalorio img {
  height: 2rem;
  width: 2rem;
}

.casilla-pircing-izq {
  grid-area: 2/3/2/3;
  background-color: rgba(0, 255, 255, 0.356);
}
.casilla-pircing-dch {
  grid-area: 2/5;
}
.casilla-cabeza {
  grid-area: 3/1/3/8;
  background-color: rgba(0, 255, 255, 0.356);
}
.casilla-tatoo {
  grid-area: 2/3/5/3;
}

.casilla-cara {
  grid-area: 2/5/5/5;
}
/* aside[class*='casilla'] {
  position: relative;
}



.casilla-torso {
  top: 30rem;
  left: 35rem;
}
.casilla-cintura {
  top: 42rem;
  left: 35rem;
}
.casilla-hombro-izq {
  top: 18rem;
  left: 22rem;
}
.casilla-hombro-dch {
  top: 18rem;
  right: 22rem;
}
.casilla-brazo-izq {
  top: 30rem;
  left: 20rem;
}
.casilla-brazo-dch {
  top: 30rem;
  left: 50rem;
}
.casilla-mano-izq {
  top: 42rem;
  left: 20rem;
}
.casilla-mano-dch {
  top: 42rem;
  left: 50rem;
}
.casilla-pierna-izq {
  top: 56rem;
  left: 29rem;
}
.casilla-pierna-dch {
  top: 56rem;
  left: 41rem;
}
.casilla-pie-izq {
  top: 68rem;
  left: 29rem;
}
.casilla-pie-dch {
  top: 68rem;
  left: 41rem;
}

.casilla-collar {
  top: 15rem;
  left: 31rem;
}

.casilla-kenwa {
  top: 28rem;
  left: 45.5rem;
}
.casilla-pulsera-izq {
  top: 39rem;
  left: 30.5rem;
}
.casilla-pulsera-dch {
  top: 39rem;
  left: 45.5rem;
}
.casilla-anillo-izq {
  top: 50rem;
  left: 30.5rem;
}
.casilla-anillo-dch {
  top: 50rem;
  left: 45.5rem;
}

.casilla-arma {
  bottom: 1rem;
  left: 1rem;
}
.casilla-escudo {
  bottom: 1rem;
  left: 20rem;
}
.casilla-vaina {
  bottom: 17rem;
  left: 1rem;
}
.casilla-magic {
  bottom: 1rem;
  right: 20rem;
}
.casilla-range {
  bottom: 1rem;
  right: 1rem;
}
.casilla-carcaj {
  bottom: 17rem;
  right: 1rem;
}

.casilla-arma button {
  background-image: url(../assets/);
}
.casilla-escudo button {
  background-image: url(../assets/);
}
.casilla-vaina button {
  background-image: url(../assets/);
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
} */

.faltr {
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
  grid-column: 1/8;
}
.faltr p {
  width: 100%;
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
  font-size: 30px;
}
</style>

<template>
  <fieldset class="equipo" id="equipo">
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
    <aside class="casilla-pircing-izq">
      <button
        type="button"
        class="abalorio"
        onclick="document.querySelector('#pircing-izq').showModal()"
      >
        <img src="../assets/adornos/casilla.png" alt="" />
      </button>
      <dialog id="pircing-izq">
        <p>Left earring</p>
        <div>
          <label class="casilla-nombre"><input type="text" name="izqPir_name" /></label>
          <label class="casilla-texto">t<input type="text" name="izqPir_t" /></label>
          <label class="casilla-numero">c<input type="number" name="izqPir_c" /></label>
          <label class="casilla-numero">r<input type="number" name="izqPir_r" /></label>
          <label class="casilla-texto">e<input type="text" name="izqPir_e" /></label>
          <label class="casilla-peso">u<input type="number" name="izqPir_u" /></label>
        </div>
      </dialog>
    </aside>
    <aside class="casilla-pircing-dch">
      <button
        type="button"
        class="abalorio"
        onclick="document.querySelector('#pircing-dch').showModal()"
      >
        <img src="../assets/adornos/casilla.png" alt="" />
      </button>
      <dialog id="pircing-dch">
        <p>Right earring</p>
        <div>
          <label class="casilla-nombre"><input type="text" name="dchPir_name" /></label>
          <label class="casilla-texto">t<input type="text" name="dchPir_t" /></label>
          <label class="casilla-numero">c<input type="number" name="dchPir_c" /></label>
          <label class="casilla-numero">r<input type="number" name="dchPir_r" /></label>
          <label class="casilla-texto">e<input type="text" name="dchPir_e" /></label>
          <label class="casilla-peso">u<input type="number" name="dchPir_u" /></label>
        </div>
      </dialog>
    </aside>
    <aside class="casilla-cara">
      <button type="button" class="abalorio" onclick="document.querySelector('#cara').showModal()">
        <img src="../assets/adornos/casilla.png" alt="" />
      </button>
      <dialog id="cara">
        <p>Face</p>
        <div>
          <label class="casilla-nombre"><input type="text" name="cara_name" /></label>
          <label class="casilla-texto">t<input type="text" name="cara_t" /></label>
          <label class="casilla-numero">c<input type="number" name="cara_c" /></label>
          <label class="casilla-numero">r<input type="number" name="cara_r" /></label>
          <label class="casilla-texto">e<input type="text" name="cara_e" /></label>
          <label class="casilla-peso">u<input type="number" name="cara_u" /></label>
        </div>
      </dialog>
    </aside>
    <aside class="casilla-collar">
      <button
        type="button"
        class="abalorio"
        onclick="document.querySelector('#collar').showModal()"
      >
        <img src="../assets/adornos/casilla.png" alt="" />
      </button>
      <dialog id="collar">
        <p>Necklace</p>
        <div>
          <label class="casilla-nombre"><input type="text" name="collar_name" /></label>
          <label class="casilla-texto">t<input type="text" name="collar_t" /></label>
          <label class="casilla-numero">c<input type="number" name="collar_c" /></label>
          <label class="casilla-numero">r<input type="number" name="collar_r" /></label>
          <label class="casilla-texto">e<input type="text" name="collar_e" /></label>
          <label class="casilla-peso">u<input type="number" name="collar_u" /></label>
        </div>
      </dialog>
    </aside>
    <aside class="casilla-tatoo">
      <button type="button" class="abalorio" onclick="document.querySelector('#tatoo').showModal()">
        <img src="../assets/adornos/casilla.png" alt="" />
      </button>
      <dialog id="tatoo">
        <p>Tatoo</p>
        <div>
          <label class="casilla-nombre"><input type="text" name="tatoo_name" /></label>
          <label class="casilla-texto">t<input type="text" name="tatoo_t" /></label>
          <label class="casilla-numero">c<input type="number" name="tatoo_c" /></label>
          <label class="casilla-numero">r<input type="number" name="tatoo_r" /></label>
          <label class="casilla-texto">e<input type="text" name="tatoo_e" /></label>
          <label class="casilla-peso">u<input type="number" name="tatoo_u" /></label>
        </div>
      </dialog>
    </aside>
    <aside class="casilla-kenwa">
      <button type="button" class="abalorio" onclick="document.querySelector('#kenwa').showModal()">
        <img src="../assets/adornos/casilla.png" alt="" />
      </button>
      <dialog id="kenwa">
        <p>Kenwa</p>
        <div>
          <label class="casilla-nombre"><input type="text" name="kenwa_name" /></label>
          <label class="casilla-texto">t<input type="text" name="kenwa_t" /></label>
          <label class="casilla-numero">c<input type="number" name="kenwa_c" /></label>
          <label class="casilla-numero">r<input type="number" name="kenwa_r" /></label>
          <label class="casilla-texto">e<input type="text" name="kenwa_e" /></label>
          <label class="casilla-peso">u<input type="number" name="kenwa_u" /></label>
        </div>
      </dialog>
    </aside>
    <aside class="casilla-pulsera-izq">
      <button
        type="button"
        class="abalorio"
        onclick="document.querySelector('#pulsera-izq').showModal()"
      >
        <img src="../assets/adornos/casilla.png" alt="" />
      </button>
      <dialog id="pulsera-izq">
        <p>Left bracelet</p>
        <div>
          <label class="casilla-nombre"><input type="text" name="izqPulsera_name" /></label>
          <label class="casilla-texto">t<input type="text" name="izqPulsera_t" /></label>
          <label class="casilla-numero">c<input type="number" name="izqPulsera_c" /></label>
          <label class="casilla-numero">r<input type="number" name="izqPulsera_r" /></label>
          <label class="casilla-texto">e<input type="text" name="izqPulsera_e" /></label>
          <label class="casilla-peso">u<input type="number" name="izqPulsera_u" /></label>
        </div>
      </dialog>
    </aside>
    <aside class="casilla-pulsera-dch">
      <button
        type="button"
        class="abalorio"
        onclick="document.querySelector('#pulsera-dch').showModal()"
      >
        <img src="../assets/adornos/casilla.png" alt="" />
      </button>
      <dialog id="pulsera-dch">
        <p>Right bracelet</p>
        <div>
          <label class="casilla-nombre"><input type="text" name="dchPulsera_name" /></label>
          <label class="casilla-texto">t<input type="text" name="dchPulsera_t" /></label>
          <label class="casilla-numero">c<input type="number" name="dchPulsera_c" /></label>
          <label class="casilla-numero">r<input type="number" name="dchPulsera_r" /></label>
          <label class="casilla-texto">e<input type="text" name="dchPulsera_e" /></label>
          <label class="casilla-peso">u<input type="number" name="dchPulsera_u" /></label>
        </div>
      </dialog>
    </aside>
    <aside class="casilla-anillo-izq">
      <button
        type="button"
        class="abalorio"
        onclick="document.querySelector('#anillo-izq').showModal()"
      >
        <img src="../assets/adornos/casilla.png" alt="" />
      </button>
      <dialog id="anillo-izq">
        <p>Left ring</p>
        <div>
          <label class="casilla-nombre"><input type="text" name="izqAnillo_name" /></label>
          <label class="casilla-texto">t<input type="text" name="izqAnillo_t" /></label>
          <label class="casilla-numero">c<input type="number" name="izqAnillo_c" /></label>
          <label class="casilla-numero">r<input type="number" name="izqAnillo_r" /></label>
          <label class="casilla-texto">e<input type="text" name="izqAnillo_e" /></label>
          <label class="casilla-peso">u<input type="number" name="izqAnillo_u" /></label>
        </div>
      </dialog>
    </aside>
    <aside class="casilla-anillo-dch">
      <button
        type="button"
        class="abalorio"
        onclick="document.querySelector('#anillo-dch').showModal()"
      >
        <img src="../assets/adornos/casilla.png" alt="" />
      </button>
      <dialog id="anillo-dch">
        <p>Right ring</p>
        <div>
          <label class="casilla-nombre"><input type="text" name="dchAnillo_name" /></label>
          <label class="casilla-texto">t<input type="text" name="dchAnillo_t" /></label>
          <label class="casilla-numero">c<input type="number" name="dchAnillo_c" /></label>
          <label class="casilla-numero">r<input type="number" name="dchAnillo_r" /></label>
          <label class="casilla-texto">e<input type="text" name="dchAnillo_e" /></label>
          <label class="casilla-peso">u<input type="number" name="dchAnillo_u" /></label>
        </div>
      </dialog>
    </aside>
    <aside class="casilla-cabeza">
      <button type="button" onclick="document.querySelector('#cabeza').showModal()">
        <img src="../assets/adornos/casilla.png" alt="" />
      </button>
      <dialog id="cabeza">
        <p>Head</p>
        <div>
          <label class="casilla-nombre"><input type="text" name="cabeza_name" /></label>
          <label class="casilla-texto">t<input type="text" name="cabeza_t" /></label>
          <label class="casilla-numero">a<input type="number" name="cabeza_a" /></label>
          <label class="casilla-numero">p<input type="number" name="cabeza_p" /></label>
          <label class="casilla-texto">m<input type="text" name="cabeza_m" /></label>
          <label class="casilla-numero">c<input type="number" name="cabeza_c" /></label>
          <label class="casilla-numero">r<input type="number" name="cabeza_r" /></label>
          <label class="casilla-texto">e<input type="text" name="cabeza_e" /></label>
          <label class="casilla-peso">%d<input type="number" name="cabeza_d" /></label>
        </div>
      </dialog>
    </aside>
    <aside class="casilla-torso">
      <button type="button" onclick="document.querySelector('#torso').showModal()">
        <img src="../assets/adornos/casilla.png" alt="" />
      </button>
      <dialog id="torso">
        <p>Chest</p>
        <div>
          <label class="casilla-nombre"><input type="text" name="torso_name" /></label>
          <label class="casilla-texto">t<input type="text" name="torso_t" /></label>
          <label class="casilla-numero">a<input type="number" name="torso_a" /></label>
          <label class="casilla-numero">p<input type="number" name="torso_p" /></label>
          <label class="casilla-texto">m<input type="text" name="torso_m" /></label>
          <label class="casilla-numero">c<input type="number" name="torso_c" /></label>
          <label class="casilla-numero">r<input type="number" name="torso_r" /></label>
          <label class="casilla-texto">e<input type="text" name="torso_e" /></label>
          <label class="casilla-peso">%d<input type="number" name="torso_d" /></label>
        </div>
      </dialog>
    </aside>
    <aside class="casilla-cintura">
      <button type="button" onclick="document.querySelector('#cintura').showModal()">
        <img src="../assets/adornos/casilla.png" alt="" />
      </button>
      <dialog id="cintura">
        <p>Waist</p>
        <div>
          <label class="casilla-nombre"><input type="text" name="cintura_name" /></label>
          <label class="casilla-texto">t<input type="text" name="cintura_t" /></label>
          <label class="casilla-numero">a<input type="number" name="cintura_a" /></label>
          <label class="casilla-numero">p<input type="number" name="cintura_p" /></label>
          <label class="casilla-texto">m<input type="text" name="cintura_m" /></label>
          <label class="casilla-numero">c<input type="number" name="cintura_c" /></label>
          <label class="casilla-numero">r<input type="number" name="cintura_r" /></label>
          <label class="casilla-texto">e<input type="text" name="cintura_e" /></label>
          <label class="casilla-peso">%d<input type="number" name="cintura_d" /></label>
        </div>
      </dialog>
    </aside>
    <aside class="casilla-hombro-izq">
      <button type="button" onclick="document.querySelector('#hombro-izq').showModal()">
        <img src="../assets/adornos/casilla.png" alt="" />
      </button>
      <dialog id="hombro-izq">
        <p>Left shoulder</p>
        <div>
          <label class="casilla-nombre"><input type="text" name="izqHombro_name" /></label>
          <label class="casilla-texto">t<input type="text" name="izqHombro_t" /></label>
          <label class="casilla-numero">a<input type="number" name="izqHombro_a" /></label>
          <label class="casilla-numero">p<input type="number" name="izqHombro_p" /></label>
          <label class="casilla-texto">m<input type="text" name="izqHombro_m" /></label>
          <label class="casilla-numero">c<input type="number" name="izqHombro_c" /></label>
          <label class="casilla-numero">r<input type="number" name="izqHombro_r" /></label>
          <label class="casilla-texto">e<input type="text" name="izqHombro_e" /></label>
          <label class="casilla-peso">%d<input type="number" name="izqHombro_d" /></label>
        </div>
      </dialog>
    </aside>
    <aside class="casilla-brazo-izq">
      <button type="button" onclick="document.querySelector('#brazo-izq').showModal()">
        <img src="../assets/adornos/casilla.png" alt="" />
      </button>
      <dialog id="brazo-izq">
        <p>Left arm</p>
        <div>
          <label class="casilla-nombre"><input type="text" name="izqBrazo_name" /></label>
          <label class="casilla-texto">t<input type="text" name="izqBrazo_t" /></label>
          <label class="casilla-numero">a<input type="number" name="izqBrazo_a" /></label>
          <label class="casilla-numero">p<input type="number" name="izqBrazo_p" /></label>
          <label class="casilla-texto">m<input type="text" name="izqBrazo_m" /></label>
          <label class="casilla-numero">c<input type="number" name="izqBrazo_c" /></label>
          <label class="casilla-numero">r<input type="number" name="izqBrazo_r" /></label>
          <label class="casilla-texto">e<input type="text" name="izqBrazo_e" /></label>
          <label class="casilla-peso">u<input type="number" name="izqBrazo_u" /></label>
        </div>
      </dialog>
    </aside>
    <aside class="casilla-mano-izq">
      <button type="button" onclick="document.querySelector('#mano-izq').showModal()">
        <img src="../assets/adornos/casilla.png" alt="" />
      </button>
      <dialog id="mano-izq">
        <p>Left hand</p>
        <div>
          <label class="casilla-nombre"><input type="text" name="izqMano_name" /></label>
          <label class="casilla-texto">t<input type="text" name="izqMano_t" /></label>
          <label class="casilla-numero">a<input type="number" name="izqMano_a" /></label>
          <label class="casilla-numero">p<input type="number" name="izqMano_p" /></label>
          <label class="casilla-texto">m<input type="text" name="izqMano_m" /></label>
          <label class="casilla-numero">c<input type="number" name="izqMano_c" /></label>
          <label class="casilla-numero">r<input type="number" name="izqMano_r" /></label>
          <label class="casilla-texto">e<input type="text" name="izqMano_e" /></label>
          <label class="casilla-peso">u<input type="number" name="izqMano_u" /></label>
        </div>
      </dialog>
    </aside>
    <aside class="casilla-pierna-izq">
      <button type="button" onclick="document.querySelector('#pierna-izq').showModal()">
        <img src="../assets/adornos/casilla.png" alt="" />
      </button>
      <dialog id="pierna-izq">
        <p>Left leg</p>
        <div>
          <label class="casilla-nombre"><input type="text" name="izqPierna_name" /></label>
          <label class="casilla-texto">t<input type="text" name="izqPierna_t" /></label>
          <label class="casilla-numero">a<input type="number" name="izqPierna_a" /></label>
          <label class="casilla-numero">p<input type="number" name="izqPierna_p" /></label>
          <label class="casilla-texto">m<input type="text" name="izqPierna_m" /></label>
          <label class="casilla-numero">c<input type="number" name="izqPierna_c" /></label>
          <label class="casilla-numero">r<input type="number" name="izqPierna_r" /></label>
          <label class="casilla-texto">e<input type="text" name="izqPierna_e" /></label>
          <label class="casilla-peso">u<input type="number" name="izqPierna_u" /></label>
        </div>
      </dialog>
    </aside>
    <aside class="casilla-pie-izq">
      <button type="button" onclick="document.querySelector('#pie-izq').showModal()">
        <img src="../assets/adornos/casilla.png" alt="" />
      </button>
      <dialog id="pie-izq">
        <p>Left foot</p>
        <div>
          <label class="casilla-nombre"><input type="text" name="izqPie_name" /></label>
          <label class="casilla-texto">t<input type="text" name="izqPie_t" /></label>
          <label class="casilla-numero">a<input type="number" name="izqPie_a" /></label>
          <label class="casilla-numero">p<input type="number" name="izqPie_p" /></label>
          <label class="casilla-texto">m<input type="text" name="izqPie_m" /></label>
          <label class="casilla-numero">c<input type="number" name="izqPie_c" /></label>
          <label class="casilla-numero">r<input type="number" name="izqPie_r" /></label>
          <label class="casilla-texto">e<input type="text" name="izqPie_e" /></label>
          <label class="casilla-peso">u<input type="number" name="izqPie_u" /></label>
        </div>
      </dialog>
    </aside>
    <aside class="casilla-hombro-dch">
      <button type="button" onclick="document.querySelector('#hombro-dch').showModal()">
        <img src="../assets/adornos/casilla.png" alt="" />
      </button>
      <dialog id="hombro-dch">
        <p>Right shoulder</p>
        <div>
          <label class="casilla-nombre"><input type="text" name="dchHombro_name" /></label>
          <label class="casilla-texto">t<input type="text" name="dchHombro_t" /></label>
          <label class="casilla-numero">a<input type="number" name="dchHombro_a" /></label>
          <label class="casilla-numero">p<input type="number" name="dchHombro_p" /></label>
          <label class="casilla-texto">m<input type="text" name="dchHombro_m" /></label>
          <label class="casilla-numero">c<input type="number" name="dchHombro_c" /></label>
          <label class="casilla-numero">r<input type="number" name="dchHombro_r" /></label>
          <label class="casilla-texto">e<input type="text" name="dchHombro_e" /></label>
          <label class="casilla-peso">u<input type="number" name="dchHombro_u" /></label>
        </div>
      </dialog>
    </aside>
    <aside class="casilla-brazo-dch">
      <button type="button" onclick="document.querySelector('#brazo-dch').showModal()">
        <img src="../assets/adornos/casilla.png" alt="" />
      </button>
      <dialog id="brazo-dch">
        <p>Right arm</p>
        <div>
          <label class="casilla-nombre"><input type="text" name="dchBrazo_name" /></label>
          <label class="casilla-texto">t<input type="text" name="dchBrazo_t" /></label>
          <label class="casilla-numero">a<input type="number" name="dchBrazo_a" /></label>
          <label class="casilla-numero">p<input type="number" name="dchBrazo_p" /></label>
          <label class="casilla-texto">m<input type="text" name="dchBrazo_m" /></label>
          <label class="casilla-numero">c<input type="number" name="dchBrazo_c" /></label>
          <label class="casilla-numero">r<input type="number" name="dchBrazo_r" /></label>
          <label class="casilla-texto">e<input type="text" name="dchBrazo_e" /></label>
          <label class="casilla-peso">u<input type="number" name="dchBrazo_u" /></label>
        </div>
      </dialog>
    </aside>
    <aside class="casilla-mano-dch">
      <button type="button" onclick="document.querySelector('#mano-dch').showModal()">
        <img src="../assets/adornos/casilla.png" alt="" />
      </button>
      <dialog id="mano-dch">
        <p>Right hand</p>
        <div>
          <label class="casilla-nombre"><input type="text" name="dchMano_name" /></label>
          <label class="casilla-texto">t<input type="text" name="dchMano_t" /></label>
          <label class="casilla-numero">a<input type="number" name="dchMano_a" /></label>
          <label class="casilla-numero">p<input type="number" name="dchMano_p" /></label>
          <label class="casilla-texto">m<input type="text" name="dchMano_m" /></label>
          <label class="casilla-numero">c<input type="number" name="dchMano_c" /></label>
          <label class="casilla-numero">r<input type="number" name="dchMano_r" /></label>
          <label class="casilla-texto">e<input type="text" name="dchMano_e" /></label>
          <label class="casilla-peso">u<input type="number" name="dchMano_u" /></label>
        </div>
      </dialog>
    </aside>
    <aside class="casilla-pierna-dch">
      <button type="button" onclick="document.querySelector('#pierna-dch').showModal()">
        <img src="../assets/adornos/casilla.png" alt="" />
      </button>
      <dialog id="pierna-dch">
        <p>Right leg</p>
        <div>
          <label class="casilla-nombre"><input type="text" name="dchPierna_name" /></label>
          <label class="casilla-texto">t<input type="text" name="dchPierna_t" /></label>
          <label class="casilla-numero">a<input type="number" name="dchPierna_a" /></label>
          <label class="casilla-numero">p<input type="number" name="dchPierna_p" /></label>
          <label class="casilla-texto">m<input type="text" name="dchPierna_m" /></label>
          <label class="casilla-numero">c<input type="number" name="dchPierna_c" /></label>
          <label class="casilla-numero">r<input type="number" name="dchPierna_r" /></label>
          <label class="casilla-texto">e<input type="text" name="dchPierna_e" /></label>
          <label class="casilla-peso">u<input type="number" name="dchPierna_u" /></label>
        </div>
      </dialog>
    </aside>
    <aside class="casilla-pie-dch">
      <button type="button" onclick="document.querySelector('#pie-dch').showModal()">
        <img src="../assets/adornos/casilla.png" alt="" />
      </button>
      <dialog id="pie-dch">
        <p>Right foot</p>
        <div>
          <label class="casilla-nombre"><input type="text" name="dchPie_name" /></label>
          <label class="casilla-texto">t<input type="text" name="dchPie_t" /></label>
          <label class="casilla-numero">a<input type="number" name="dchPie_a" /></label>
          <label class="casilla-numero">p<input type="number" name="dchPie_p" /></label>
          <label class="casilla-texto">m<input type="text" name="dchPie_m" /></label>
          <label class="casilla-numero">c<input type="number" name="dchPie_c" /></label>
          <label class="casilla-numero">r<input type="number" name="dchPie_r" /></label>
          <label class="casilla-texto">e<input type="text" name="dchPie_e" /></label>
          <label class="casilla-peso">u<input type="number" name="dchPie_u" /></label>
        </div>
      </dialog>
    </aside>

    <aside class="casilla-arma">
      <button type="button" class="largo" onclick="document.querySelector('#arma').showModal()">
        <img src="../assets/adornos/casilla.png" alt="" />
      </button>
      <dialog id="arma">
        <p>Weapon of choice</p>
        <div>
          <label class="casilla-nombre"><input type="text" name="arma_name" /></label>
          <label class="casilla-texto">t<input type="text" name="arma_t" /></label>
          <label class="casilla-numero">a<input type="number" name="arma_a" /></label>
          <label class="casilla-numero">p<input type="number" name="arma_p" /></label>
          <label class="casilla-texto">m<input type="text" name="arma_m" /></label>
          <label class="casilla-numero">c<input type="number" name="arma_c" /></label>
          <label class="casilla-numero">r<input type="number" name="arma_r" /></label>
          <label class="casilla-texto">e<input type="text" name="arma_e" /></label>
          <label class="casilla-peso"><input type="text" name="arma_d" value="D" /></label>
        </div>
      </dialog>
    </aside>
    <aside class="casilla-escudo">
      <button type="button" class="largo" onclick="document.querySelector('#escudo').showModal()">
        <img src="../assets/adornos/casilla.png" alt="" />
      </button>
      <dialog id="escudo">
        <p>Shield</p>
        <div>
          <label class="casilla-nombre"><input type="text" name="escudo_name" /></label>
          <label class="casilla-texto">t<input type="text" name="escudo_t" /></label>
          <label class="casilla-numero">a<input type="number" name="escudo_a" /></label>
          <label class="casilla-numero">p<input type="number" name="escudo_p" /></label>
          <label class="casilla-texto">m<input type="text" name="escudo_m" /></label>
          <label class="casilla-numero">c<input type="number" name="escudo_c" /></label>
          <label class="casilla-numero">r<input type="number" name="escudo_r" /></label>
          <label class="casilla-texto">e<input type="text" name="escudo_e" /></label>
          <label class="casilla-peso"><input type="text" name="escudo_d" value="D" /></label>
        </div>
      </dialog>
    </aside>
    <aside class="casilla-vaina">
      <button type="button" class="corto" onclick="document.querySelector('#vaina').showModal()">
        <img src="../assets/adornos/casilla.png" alt="" />
      </button>
      <dialog id="vaina">
        <p>Sheath</p>
        <div>
          <label class="casilla-nombre"><input type="text" name="vaina_name" /></label>
          <label class="casilla-texto">t<input type="text" name="vaina_t" /></label>
          <label class="casilla-numero">a<input type="number" name="vaina_a" /></label>
          <label class="casilla-numero">p<input type="number" name="vaina_p" /></label>
          <label class="casilla-texto">m<input type="text" name="vaina_m" /></label>
          <label class="casilla-numero">c<input type="number" name="vaina_c" /></label>
          <label class="casilla-numero">r<input type="number" name="vaina_r" /></label>
          <label class="casilla-texto">e<input type="text" name="vaina_e" /></label>
          <label class="casilla-peso">%d<input type="number" name="vaina_d" /></label>
        </div>
      </dialog>
    </aside>
    <aside class="casilla-magic">
      <button type="button" class="largo" onclick="document.querySelector('#magic').showModal()">
        <img src="../assets/adornos/casilla.png" alt="" />
      </button>
      <dialog id="magic">
        <p>Lorness</p>
        <div>
          <label class="casilla-nombre"><input type="text" name="magic_name" /></label>
          <label class="casilla-texto">t<input type="text" name="magic_t" /></label>
          <label class="casilla-numero">a<input type="number" name="magic_a" /></label>
          <label class="casilla-numero">p<input type="number" name="magic_p" /></label>
          <label class="casilla-texto">m<input type="text" name="magic_m" /></label>
          <label class="casilla-numero">c<input type="number" name="magic_c" /></label>
          <label class="casilla-numero">r<input type="number" name="magic_r" /></label>
          <label class="casilla-texto">e<input type="text" name="magic_e" /></label>
          <label class="casilla-peso"><input type="text" name="magic_d" value="D" /></label>
        </div>
      </dialog>
    </aside>
    <aside class="casilla-range">
      <button type="button" class="largo" onclick="document.querySelector('#range').showModal()">
        <img src="../assets/adornos/casilla.png" alt="" />
      </button>
      <dialog id="range">
        <p>Range weapon</p>
        <div>
          <label class="casilla-nombre"><input type="text" name="range_name" /></label>
          <label class="casilla-texto">t<input type="text" name="range_t" /></label>
          <label class="casilla-numero">a<input type="number" name="range_a" /></label>
          <label class="casilla-numero">p<input type="number" name="range_p" /></label>
          <label class="casilla-texto">m<input type="text" name="range_m" /></label>
          <label class="casilla-numero">c<input type="number" name="range_c" /></label>
          <label class="casilla-numero">r<input type="number" name="range_r" /></label>
          <label class="casilla-texto">e<input type="text" name="range_e" /></label>
          <label class="casilla-peso"><input type="text" name="range_d" value="D" /></label>
        </div>
      </dialog>
    </aside>
    <aside class="casilla-carcaj">
      <button type="button" class="corto" onclick="document.querySelector('#carcaj').showModal()">
        <img src="../assets/adornos/casilla.png" alt="" />
      </button>
      <dialog id="carcaj">
        <p>Quiver</p>
        <div>
          <label class="casilla-texto">e<input type="text" name="carcaj_e" /></label>
          <label class="casilla-peso">Mx<input type="text" name="carcaj_mx" /></label>
          <label class="casilla-texto"><input type="text" name="carcaj_text1" /></label>
          <label class="casilla-peso">ac<input type="number" name="carcaj_ac1" /></label>
          <label class="casilla-texto"><input type="text" name="carcaj_text2" /></label>
          <label class="casilla-peso">ac<input type="number" name="carcaj_ac2" /></label>
          <label class="casilla-texto"><input type="text" name="carcaj_text3" /></label>
          <label class="casilla-peso">ac<input type="number" name="carcaj_ac3" /></label>
          <label class="casilla-texto"><input type="text" name="carcaj_text4" /></label>
          <label class="casilla-peso">ac<input type="number" name="carcaj_ac4" /></label>
          <label class="casilla-texto"><input type="text" name="carcaj_text5" /></label>
          <label class="casilla-peso">ac<input type="number" name="carcaj_ac5" /></label>
          <label class="casilla-texto"><input type="text" name="carcaj_text6" /></label>
          <label class="casilla-peso">ac<input type="number" name="carcaj_ac6" /></label>
        </div>
      </dialog>
    </aside>
  </fieldset>
</template>

<script setup></script>
