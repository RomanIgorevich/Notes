<template>
  <div class="new-note">
    <label>Заголовок заметки</label>
    <input v-model="note.title" text="text" />
    <label>Сама заметка</label>
    <textarea v-model="note.descr"></textarea>
    <label>Приоритет заметки</label>
    <Select :note="note" />
    <button class="btn btnPrimary" @click="addNote">Добавить заметку</button>
  </div>
</template>

<script>
import Select from "./Select.vue";

export default {
  components: {
    Select,
  },
  props: {
    note: {
      tepe: Object,
      required: true,
    },
  },
  methods: {
    addNote() {
      this.$emit("addNote", this.note);
    },
  },
};
</script>

<style lang="scss">
.new-note {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
