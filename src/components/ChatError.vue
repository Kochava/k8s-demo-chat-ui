<template>
    <div v-if="errorMessage" class="row">
        <div class="alert alert-danger col-12" role="alert">
            {{errorMessage}}
        </div>
    </div>
</template>

<script>

export default {
  props: {
      errorMessage: {
          type: String,
          default: ""
      }
  }
}
</script>
