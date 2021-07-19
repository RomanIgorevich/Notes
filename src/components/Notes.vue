<template>
  <div class="notes">
    <div
      class="note"
      :class="{
        full: !grid,
        priority1: note.priority == 1,
        priority2: note.priority == 2,
        priority3: note.priority == 3,
      }"
      v-for="(note, index) in notes"
      :key="index"
    >
      <div class="note-header" :class="{ full: !grid }">
        <div class="flex-start" v-if="!note.isActiveTitle">
          <input class="input" type="text" v-model="note.title" />
          <p class="btn-ss" @click="note.isActiveTitle = !note.isActiveTitle">
            Сохранить
          </p>
        </div>
        <p
          v-if="note.isActiveTitle"
          class="note-title"
          @click="note.isActiveTitle = !note.isActiveTitle"
        >
          {{ note.title }}
        </p>

        <p class="remove" @click="removeNote(index)">x</p>
      </div>
      <div class="note-body">
        <div class="flex-start" v-if="!note.isActiveDescr">
          <input class="input" type="text" v-model="note.descr" />
          <p class="btn-ss" @click="note.isActiveDescr = !note.isActiveDescr">
           Сохранить
          </p>
        </div>
        <p
          class="note-title"
          v-if="note.isActiveDescr"
          @click="note.isActiveDescr = !note.isActiveDescr"
        >
          {{ note.descr }}
        </p>

        <span>{{ note.date }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    notes: {
      tepe: Array,
      required: true,
    },
    grid: {
      tepe: Boolean,
      required: true,
    },
  },
  methods: {
    removeNote(index) {
      this.$emit("remove", index);
    },
  },
};
</script>

<style lang="scss">
.btn-s {
  display: inline-block;
  padding: 8px 16px;
  line-height: 1;
  text-transform: uppercase;
  cursor: pointer;
  margin-right: 16px !important;
  border-radius: 10px;
  border: 1px solid #432cbc;
  background-color: #ffffff;
}
.btn-ss {
  display: inline-block;
  padding: 8px 16px;
  line-height: 1;
  cursor: pointer;
  margin-right: 16px !important;
  border-radius: 10px;
  color: black !important;
  border: 1px solid black;
  background-color: #ffffff;
}

.flex-start {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.input {
  padding: 8px 16px;
  margin-right: 16px;
  border-radius: 10px;
}
.notes {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 40px 0;
}
.note {
  border: 1px solid #dcdfe6;
  border-radius: 10px;
  width: 48%;
  padding: 18px 20px;
  margin-bottom: 20px;
  background: #fff;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
  box-shadow: 0 30px 30px rgba(0, 0, 0, 0.02);
  &:hover {
    box-shadow: 0 30px 30px rgba(0, 0, 0, 0.04);
    transform: translate(0, -6px);
    transition-delay: 0s !important;
  }
  &.full {
    width: 100%;
    text-align: center;
  }
}
.note-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    font-size: 22px;
    color: #402caf;
  }
  .remove {
    cursor: pointer;
  }
  &.full {
    justify-content: center;
    p {
      margin-right: 16px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
}
.note-title {
  cursor: pointer;
}
.note-body {
  p {
    margin: 20px 0;
  }
  span {
    font-size: 14px;
    color: #999;
  }
}
.priority1 {
  background: #fff;
}
.priority2 {
  background: rgb(238, 238, 194);
}
.priority3 {
  background: #fdd9db;
}
</style>
