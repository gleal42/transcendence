<template>
    <header v-if="islogged">
      <nav>
        <RouterLink to="/">Pong</RouterLink>
        <RouterLink to="/chat">Chat</RouterLink>
        <RouterLink to="/leaderboard">Leaderboard</RouterLink>
        <RouterLink to="/profile">User profile</RouterLink>
      </nav>
    </header>
    <div v-if="islogged">
      <RouterView />
    </div>
    <div class="loginpage" v-else>
      <div class="combo">
        <Login />
        <!-- Add this to Login and emit  -->
        <button class="button" @click="test" >Login</button>
      </div>
    </div> 
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Login from "./components/Login.vue"
import { ref } from 'vue';

let islogged = ref(false);

function test()
{
  islogged.value=true
}

</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  display: flex;
  margin-right: 2vw;
}

nav {
  display: flex;
  width: 100%;
  font-size: 12px;
  text-align: center;
  line-height: 2.2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

.combo
{
  display: table-cell;
  text-align: center; /* Horizontally center */
  vertical-align: middle; /* Vertically center */
}

.loginpage {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 rem;
  margin: 0;
  height: 100vh;
  width: 100vw;
}

.button {
  background-color: #c2fbd7;
  border-radius: 100px;
  box-shadow: rgba(44, 187, 99, .2) 0 -25px 18px -14px inset,rgba(44, 187, 99, .15) 0 1px 2px,rgba(44, 187, 99, .15) 0 2px 4px,rgba(44, 187, 99, .15) 0 4px 8px,rgba(44, 187, 99, .15) 0 8px 16px,rgba(44, 187, 99, .15) 0 16px 32px;
  color: green;
  cursor: pointer;
  display: inline-block;
  font-family: CerebriSans-Regular,-apple-system,system-ui,Roboto,sans-serif;
  padding: 7px 20px;
  text-align: center;
  text-decoration: none;
  transition: all 250ms;
  border: 0;
  font-size: 16px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 100px;
  height: 40px;
  margin-top: 1rem;
}

.button:hover {
  box-shadow: rgba(44,187,99,.35) 0 -25px 18px -14px inset,rgba(44,187,99,.25) 0 1px 2px,rgba(44,187,99,.25) 0 2px 4px,rgba(44,187,99,.25) 0 4px 8px,rgba(44,187,99,.25) 0 8px 16px,rgba(44,187,99,.25) 0 16px 32px;
  transform: scale(1.05) rotate(-1deg);
}


@media (min-width: 1024px) {
  header {
    place-items: center;
    padding-right: 0;
  }

  nav {
    flex-direction: column;
    text-align: left;
    margin-left: 0rem;
    font-size: 1.5rem;
  }

}
</style>
