<template>
    <div>
        <div v-for="(message, i) in messages" class="row" v-bind:key="`message-div-${i}`">
            <div class="col-1 email">
                <img v-bind:src="message.imageURL" v-bind:title="message.email" />
            </div>
            <div class="col-11">
                <div class="text">{{message.msg}}</div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  props: {
      messages: {
          type: Array,
          default: () => []
      },
      errorMessage: {
          type: String,
          default: ""
      }
  }
}
</script>
