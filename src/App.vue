<template>
    <div class="container">
        <div class="header">
            <h1>K8 Chat Demo</h1>
        </div>
        <chat-input v-on:sendMessage="sendMessage" />
        <chat-error v-bind:errorMessage="errorMessage" />
        <chat-messages v-bind:messages="messages" />
    </div>
</template>

<script>

// import Config from "./config.js";
import ChatService from "./ChatService.js";
import md5 from "js-md5";



export default {
  components: {
    chatMessages: () => import(/* webpackChunkName:'chatMessage' */ "./components/ChatMessages.vue"),
    chatError: () => import(/* webpackChunkName:'chatError' */ "./components/ChatError.vue"),
    chatInput: () => import(/* webpackChunkName:'chatInput' */ "./components/ChatInput.vue")
  },
  data() {
    return {
      email: "",
      messageToSend: "",
      errorMessage: "",
      messages: [],
      ws: ""
    }
  },
  created() {
    this.ws = new ChatService(
        process.env.VUE_APP_CHAT_SERVICE_API,
        this.receiveMessage
    )
  },
  methods: {
    getGravitarURL: function(email) {
        var hash = md5(email.toLowerCase())
        return "https://www.gravatar.com/avatar/"+ hash +".jpg?s=32"
    },
    addMessage: function(message) {
        if (message.hasOwnProperty("email")) {
            message.imageURL = this.getGravitarURL(message.email)
        }

        this.messages.push(message)
    },
    sendMessage: function(email, messageStr) {
        console.log("Sending!", messageStr)
        this.ws.send(email, messageStr)
    },
    receiveMessage: function(evt) {
        console.log("message", evt.data);

        if (evt.data == "unable to validate input") {
            console.log("should see the error")
            this.errorMessage = evt.data
            return
        } else {
            this.errorMessage = ""
        }

        var messageReceived = JSON.parse(evt.data)
        this.addMessage(messageReceived)
    }
  }
}
</script>
