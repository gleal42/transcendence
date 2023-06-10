<template>
  <div class="Chat">
    <div class="chat-container">
      <div class="messages">
        <div v-for="message in messages" :key="message.id">
          <strong>{{ message.email }}:</strong> {{ message.text }}
        </div>
      </div>
      <div class="msg-input">
        <form @submit.prevent="sendMessage">
          <input v-model="messageText" placeholder="message">
          <button type="submit">send</button>
        </form>
      </div>
    </div>
  </div>
</template> 

<script setup>

import { io } from 'socket.io-client'
import { ref, onBeforeMount } from 'vue';

const socket = io('http://localhost:3000')
const messageText = ref('');
const messages = ref([]);

const sendMessage = () => {
  socket.emit('sendMessage', { email: 'daniel@atoa.com', text: messageText.value }, response => {
    messageText.value = '';
  });
}

const getMessages = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/chat');
    if (response.ok) {
      const data = await response.json();
      messages.value = data;
    } else {
      console.log('Error:', response.status);
    }
  } catch (error) {
    console.log('Error:', error);
  }
};


onBeforeMount(() => {
  getMessages();
});


socket.on('recMessage', message => {
  messages.value.push(message);
});
</script>


