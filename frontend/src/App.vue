<template>
  <div class="Chat">
    <div class="channels-list">
        <div>
          <ul class="choose-channel-button" @click="chooseChannel(1)">choose Channel 1</ul>
        </div>
        <div>
          <ul class="choose-channel-button" @click="chooseChannel(2)">choose Channel 2</ul>
        </div>
        <div>
          <ul class="choose-channel-button" @click="chooseChannel(3)">choose Channel 3</ul>
        </div>
      <!-- <div v-for="channel in channels" :key="channel.id" class="channel">
        {{ channel.channel_name }}
      </div> -->
    </div>
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
const channels = ref([]);
let selected_channel = 0;
const chatContainer = ref(null);

const scrollToBottom = () => {
  try {
    nextTick(() => {
      const container = chatContainer.value;
      container.scrollTop = container.scrollHeight;
    });
  }   catch (error) {
      console.log('Error:', error);
  }
};

const sendMessage = () => {
	if (messageText.value == '')
		return;
  	socket.emit('sendMessage', { author: 'marvin', message: messageText.value, channel: selected_channel  })
    messageText.value = '';
}

const getMessages = async () => {
  try {
    let url = 'http://localhost:3000/chat/msginchannel/' + selected_channel
    const response = await fetch(url);
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

const getChannels = async () => {
  try {
    const response = await fetch('http://localhost:3000/channels/all');
    if (response.ok) {
      const data = await response.json();
      channels.value = data;
    } else {
      console.log('Error:', response.status);
    }
  } catch (error) {
    console.log('Error:', error);
  }
};

const chooseChannel = (channel)=>{
  selected_channel = channel;
  getMessages();
}

const createChannel = async () => {
  try {
    const response = await fetch('http://localhost:3000/channels/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ type: '1' ,channel_name: 'test_Channel' }),
    });
    if (response.ok) {
      getChannels();
    } else {
      console.log('Error:', response.status);
    }
  } catch (error) {
    console.log('Error:', error);
  }
};

onBeforeMount(() => {
  getChannels();
  getMessages();
});

socket.on('recMessage', message => {
  getMessages()
  //messages.value.push(message);
  scrollToBottom();
});

watch(messages, () => {
  scrollToBottom();
});
</script>


<style>
  @import './App.css';
</style>


