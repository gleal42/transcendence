<template>
  <div class="loginpage">
    <div class="welcome">
        <h1>Welcome to Raquetas</h1>
        <button class="button" @click="buttonClick" >Login</button>
    </div>
  </div>
</template>


<script setup lang="ts">
const emit = defineEmits(['isbuttonclicked'])
function buttonClick() {
  emit('isbuttonclicked')
}
</script>


<style>
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

.welcome
{
  display: table-cell;
  text-align: center; /* Horizontally center */
  vertical-align: middle; /* Vertically center */
}

</style>

