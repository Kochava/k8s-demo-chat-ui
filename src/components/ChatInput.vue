<template>
    <form>
        <div class="form-group row">
            <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
            <div class="col-sm-10">
                <input id="staticEmail" class="form-control form-control-sm" type="text" v-model="email" />
            </div>
        </div>
        <div class="form-group row">
            <label for="inputMessage" class="col-sm-2 col-form-label">Message</label>
            <div class="col-sm-10">
                <input id="inputMessage" class="form-control form-control-sm" type="text" v-model="messageToSend" v-on:keyup.enter="sendMessage" />
            </div>
        </div>
        <div class="form-group row">
            <div class="col-sm-10">
                <button type="button" class="btn btn-outline-primary" v-on:click="sendMessage">Send</button>
            </div>
        </div>
    </form>
</template>

<script>
export default {
    data: function(){
        return {
            email: "",
            messageToSend: ""
        }
    },
    methods: {
        sendMessage() {
            if (this.messageToSend.length > 0) {
                this.$emit('sendMessage', this.email, this.messageToSend);
                this.messageToSend = "";
            }
        }
    }
}
</script>
