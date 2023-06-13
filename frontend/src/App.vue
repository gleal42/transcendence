<template>
  <div class="Chat">
    <div id="chat-container" ref="chatContainer">
      <div
        v-for="message in messages"
        :key="message.id"
        class="message"
      >
        <strong>[{{ message.time }}] { {{ message.author }} }:</strong> {{ message.message }}
      </div>
    </div>
    <div class="msg-input">
      <form @submit.prevent="sendMessage">
        <input v-model="messageText" placeholder="Message" class="input-field">
        <button type="submit" class="send-button">Send</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { io } from 'socket.io-client'
import { ref, onBeforeMount, watch, nextTick } from 'vue';

const socket = io('http://localhost:3000');
const messageText = ref('');
const messages = ref([]);
const chatContainer = ref(null);

const scrollToBottom = () => {
  nextTick(() => {
    const container = chatContainer.value;
    container.scrollTop = container.scrollHeight;
  });
};

const sendMessage = () => {
	if (messageText.value == '')
		return;
  	socket.emit('sendMessage', { author: 'marvin', message: messageText.value, channel: 1  })
    messageText.value = '';
}

const getMessages = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/chat');
    if (response.ok) {
      const data = await response.json();
      messages.value = data;
      scrollToBottom();
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
  scrollToBottom();
});

watch(messages, () => {
  scrollToBottom();
});
</script>


<style scoped>
.Chat {
  width: 400px;
  margin: 0 auto;
}

#chat-container {
  border: 1px solid #ccc;
  border-radius: 14px;
  height: 300px;
  overflow-y: scroll;
  padding: 10px;
}

.message {
  margin-bottom: 10px;
}

.msg-input {
  margin-top: 10px;
}

.input-field {
  width: 70%;
  padding: 5px;
}

.send-button {
  padding: 5px 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.send-button:hover {
  background-color: #45a049;
}
#chat-container::-webkit-scrollbar {
  width: 8px;
}

#chat-container::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 4px;
}

#chat-container::-webkit-scrollbar-thumb:hover {
  background-color: #555;
}
</style>


