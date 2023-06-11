<template>
  <div>
    <canvas height="600" width="1000" class="boards" ref="canvas"></canvas>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const canvas = ref(null)
let ctx = ref(null)

const ball = {
  x: Number,
  y: Number,
  radius: Number,
  speed: Number
}

onMounted(() => {
  StartGame()
  drawBall()
  requestAnimationFrame(animate)
  function animate() {
    if (isBallInside()) {
      resetBoard()
      ball.x += 1
      ball.y += 1
      drawBall()
      requestAnimationFrame(animate)
    }
  }
})

function isBallInside() {
  return (
    ball.y + ball.radius < canvas.value.height &&
    ball.y - ball.radius > 0 &&
    ball.x + ball.radius < canvas.value.width &&
    ball.x - ball.radius > 0
  )
}

function StartGame() {
  ball.x = canvas.value.width / 2
  ball.y = canvas.value.height / 2
  ball.radius = 5
  ctx.value = canvas.value.getContext('2d')
  startBoard()
}

function startBoard() {
  ctx.value.fillStyle = 'hsla(155, 40%, 40%, 0.3)'
  ctx.value.fillRect(0, 0, canvas.value.width, canvas.value.height)
}

function clearBoard() {
  ctx.value.reset()
}

function resetBoard() {
  clearBoard()
  startBoard()
}

function drawBall() {
  ctx.value.fillStyle = 'hsla(0, 0%, 100%, 1)'
  ctx.value.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2)
  ctx.value.fill()
}
</script>

<style scoped></style>
