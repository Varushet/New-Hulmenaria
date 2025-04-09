<style scoped>
@import '../../assets/sheet.css';

main {
  background-image: url(../../assets/img/parchmentOld.png);
  background-size: 350% 105%;
  background-position: right;
  position: absolute;
  top: 6rem;
  width: 100vw;
  height: 95vh;
}
fieldset {
  background: none;
  padding: 0.6rem;
  box-sizing: border-box;
}
</style>
<template>
  <main>
    <fieldset class="identidad" id="identity">
      <label class="row-1">Name<input type="text" name="name" /></label>
      <label class="row-1">Race<input type="text" name="race" /></label>
      <label class="row-1">Mutation<textarea name="mutation"></textarea></label>
      <div class="row-cuadrado">
        <p>Alignment</p>
        <label
          ><select name="temper">
            <option>Temper</option>
            <option>Altruist</option>
            <option>Lawful</option>
            <option>Moderate</option>
            <option>Vicious</option>
            <option>Chaotic</option>
          </select></label
        >
        <label
          ><select name="attitude">
            <option>Attitude</option>
            <option>Gentle</option>
            <option>Moderate</option>
            <option>Agressive</option>
          </select></label
        >
        <label
          ><select name="faction">
            <option>Faction</option>
            <option>Imperial</option>
            <option>Sylvan</option>
            <option>Hermit</option>
            <option>Sleeper</option>
            <option>Nomad</option>
            <option>Refugee</option>
            <option>Outlaw</option>
            <option>Noctil</option>
            <option>Cultist</option>
            <option>Ravager</option>
          </select></label
        >
        <label
          ><select name="function">
            <option>Function</option>
            <option>Guardian</option>
            <option>Stalker</option>
            <option>Worker</option>
            <option>Trader</option>
            <option>Explorer</option>
            <option>Hoarder</option>
            <option>Researcher</option>
            <option>Emissary</option>
          </select></label
        >
      </div>
      <div class="row-2">
        <label>Age<input type="number" min="1" name="age" /></label>
        <label>Title<input type="text" name="title" /></label>
      </div>
      <div class="row-2">
        <label class="row-1"
          >Sign<select name="incarnation">
            <option>Incarnation</option>
            <option>Dragon</option>
            <option>Phoe</option>
            <option>Basilisc</option>
            <option>Manticore</option>
            <option>Leviatan</option>
            <option>Unicorn</option>
            <option>Sphinx</option>
            <option>Hydra</option>
            <option>Lammasu</option>
            <option>Gryphon</option>
          </select></label
        >
        <label class="row-1"
          ><select name="constelation">
            <option>Constelation</option>
            <option>Labrator</option>
            <option>Artisan</option>
            <option>Alchemist</option>
            <option>Glutton</option>
            <option>Satyr</option>
            <option>Dilettante</option>
            <option>Foreign</option>
            <option>Warrior</option>
            <option>King</option>
            <option>Usurer</option>
            <option>Merchant</option>
            <option>Guardian</option>
            <option>Betrayer</option>
            <option>Fool</option>
            <option>Hypocrite</option>
            <option>Healer</option>
            <option>Soothsayer</option>
            <option>Priest</option>
          </select></label
        >
      </div>
      <div class="row-2">
        <label>Class1<input type="number" name="class1Talent" /></label>
        <label><input type="text" name="class1" /></label>
      </div>
      <div class="row-2">
        <label>Class2<input type="number" name="class2Talent" /></label>
        <label><input type="text" name="class2" /></label>
      </div>
      <div class="row-2">
        <label>Class3<input type="number" name="class3Talent" /></label>
        <label><input type="text" name="class3" /></label>
      </div>
      <label class="row-1">Synergy<input type="text" name="synergy" /></label>
    </fieldset>
  </main>
</template>

<script setup></script>
