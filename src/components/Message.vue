<template>
  <div class="message">
    <p>{{ errorMessage }}</p>
  </div>
</template>

<script>
export default {
  props: {
    errorMessage: {
      tepe: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.message{
    text-align: center;
    padding: 20px;
    color: red;
}
</style>
