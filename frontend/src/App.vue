<template>
  <div class="Chat">
    <div class="channels-list">
      <div v-if="side_info === 0" v-for="channel in channels" :key="channel.id" class="channel" @click="chooseChannel(channel.id)">
        {{ channel.channel_name }}
      </div>
      <div v-if="side_info === 1" v-for="user in users" :key="user.id" class="user">
        {{ user.nick }}
      </div>
      <div v-if="side_info === 2" class="searchcontainer">
        <form @submit.prevent="search">
          <div class="search-input-container">
            <button type="back" class="back-button" @click="side_info = 0"></button>
            <input type="text" placeholder="Search..." class="input-field">
            <button type="submit" class="send-button">Go</button>
          </div>
         </form>
      </div>
      <div class="button-container" v-if="side_info !== 2" >
        <button class="channel-button bar-button" @click="getChannels()"></button>
        <button class="people-button bar-button" @click="getUsers()"></button>
        <button class="new-button bar-button"></button>
        <button class="search-button bar-button" @click="search()"></button>
      </div>
    </div>
    <div id="chat-container" ref="chatContainer">
      <div id="msg-container" ref="msgsContainer">
        <div v-for="message in messages" :key="message.id" class="message">
          <strong>[{{ message.author }}]:</strong> {{ message.message }}
          <div class="message-time">{{ formatTime(message.time) }}</div>
        </div>
      </div>
      <div class="msg-input">
        <form @submit.prevent="sendMessage">
          <input v-model="messageText" placeholder="Message" class="input-field">
          <button type="submit" class="send-button">Send</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { io } from 'socket.io-client'
import { ref, onBeforeMount, watch, nextTick } from 'vue';


const socket = io('http://localhost:3000');
const msgsContainer = ref(null);
const messageText = ref('');
const messages = ref([]);
const channels = ref([]);
const users = ref([]);
let selected_channel = 3;
let side_info = ref(0);



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

const getUsers = async () => {
side_info.value = 1;
try {
  const response = await fetch('http://localhost:3000/users/getUsers');
  if (response.ok) {
    const data = await response.json();
    users.value = data;
  } else {
    console.log('Error:', response.status);
  }
} catch (error) {
  console.log('Error:', error);
}
};


const getChannels = async () => {
side_info.value = 0;
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

const scrollToBottom = () => {
  try {
    nextTick(() => {
      let container = msgsContainer.value;
      container.scrollTop = container.scrollHeight;
    });
  } catch (error) {
    console.log('Error:', error);
  }
};

const formatTime = (timestamp) => {
  const currentTime = new Date();
  const messageTime = new Date(timestamp);
  const timeDiffMinutes = Math.floor((currentTime - messageTime) / (1000 * 60));

  if (timeDiffMinutes < 1) {
    return 'Just now';
  } else if (timeDiffMinutes < 60) {
    return `${timeDiffMinutes} mins ago`;
  } else if (timeDiffMinutes < 1440) {
    const hours = Math.floor(timeDiffMinutes / 60);
    return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
  } else {
    const days = Math.floor(timeDiffMinutes / 1440);
    return `${days} ${days === 1 ? 'day' : 'days'} ago`;
  }
};



const sendMessage = () => {
  if (messageText.value == '')
  return;
  socket.emit('sendMessage', { author: 'marvin', message: messageText.value, channel: selected_channel  })
  messageText.value = '';
}

const search = () => {
  side_info.value = 2;
}

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
});

watch(messages, () => {
  scrollToBottom();
});
</script>


<style>
  @import './App.css';
</style>


