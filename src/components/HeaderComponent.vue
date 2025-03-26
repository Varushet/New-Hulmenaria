<style scoped>
header a {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 2rem;
}
.logo img {
  width: 4rem;
}
</style>

<template>
  <header>
    <RouterLink to="/">
      <div class="logo">
        <img src="@/assets/img/logo.png" alt="Logo" />
      </div>
      <h1>Hulmenaria</h1>
      <div class="logo">
        <img src="@/assets/img/logo.png" alt="Logo" />
      </div>
    </RouterLink>
  </header>
</template>

<script setup></script>
