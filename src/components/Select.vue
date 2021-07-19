<template>
  <div class="v-select">
    <p class="s-title" @click="areOptionsVisible = !areOptionsVisible">
      {{ selected }}
    </p>
    <div class="options" v-if="areOptionsVisible">
      <p
        v-for="option in options"
        :key="option.value"
        @click="selectOption(option)"
      >
        {{ option.name }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    note: {
      tepe: Object,
      required: true,
    },
  },
  data() {
    return {
      areOptionsVisible: false,
      selected: "Обычная",
      options: [
        { value: "1", name: "Обычная" },
        { value: "2", name: "Важная" },
        { value: "3", name: "Очень важная" },
      ],
    };
  },
  methods: {
    selectOption(option) {
      this.selected = option.name;
      this.note.priority = option.value;
      this.areOptionsVisible = false;
    },
    hideSelect() {
      this.areOptionsVisible = false;
    },
  },
  mounted() {
    document.addEventListener("click", this.hideSelect.bind(this), true);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.hideSelect);
  },
};
</script>

<style>
.s-title {
  border: solid 1px hsl(222, 17%, 88%);
  position: relative;
  padding: 16px 26px;
  width: 100%;
  border-radius: 10px;
  background: #fff;
}
.s-title::before {
  position: absolute;
  top: 28%;
  right: 26px;
  content: url(../assets/scss/down.svg);
}
.v-select {
  position: relative;
  width: 100%;
  cursor: pointer;
}
.v-select p {
  margin: 0;
}
.options {
  border: solid 1px #dcdfe6;
  position: absolute;
  top: 50px;
  right: 0;
  width: 100%;
  background: #fff;
  z-index: 2;
}
.options p {
  padding: 16px 26px;
}
.options p:hover {
  background: #e7e7e7;
}
</style>
