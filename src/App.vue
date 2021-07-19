<template>
  <div class="wrapper">
    <div class="wrapper-content">
      <section>
        <div class="container">
          <p class="app__title">{{ title }}</p>
          <Message :errorMessage="errorMessage" v-if="errorMessage" />
          <NewNote :note="note" @addNote="addNote" />
          <div class="inner">
            <Search
              :search="search"
              @search="search = $event"
              placeholder="Наиди свою заметку"
            />
            <Icons
              :grid="grid"
              @gridActive="gridActive"
              @gridNoActive="gridNoActive"
            />
          </div>
          <Notes :notes="notesFilter" :grid="grid" @remove="removeNote" />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Message from "./components/Message.vue";
import NewNote from "./components/NewNote.vue";
import Notes from "./components/Notes.vue";
import Icons from "./components/Icons.vue";
import Search from "./components/Search.vue";

export default {
  name: "App",
  components: {
    Message,
    NewNote,
    Notes,
    Icons,
    Search,
  },
  data() {
    return {
      title: "Приложение для создания заметок",
      search: "",
      errorMessage: null,
      grid: true,
      note: {
        title: "",
        descr: "",
        priority: "1",
      },
      notes: [
        {
          title: "Первая заметка",
          descr: "Сам текст заметки",
          date: new Date(Date.now()).toLocaleString(),
          priority: "1",
          isActiveTitle: true,
          isActiveDescr: true,
        },
        {
          title: "Вторая заметка",
          descr: "Сам текст заметки",
          date: new Date(Date.now()).toLocaleString(),
          priority: "2",
          isActiveTitle: true,
          isActiveDescr: true,
        },
        {
          title: "Третья заметка",
          descr: "Сам текст заметки",
          date: new Date(Date.now()).toLocaleString(),
          priority: "3",
          isActiveTitle: true,
          isActiveDescr: true,
        },
      ],
    };
  },
  computed: {
    notesFilter() {
      let array = this.notes,
        search = this.search;
      if (!search) return array;
      search = search.trim().toLowerCase();

      array = array.filter(function(item) {
        if (item.title.toLowerCase().indexOf(search) !== -1) {
          return item;
        }
      });

      return array;
    },
  },
  methods: {
    addNote() {
      let { title, descr, priority } = this.note;
      if (title === "") {
        this.errorMessage = "Заполните все поля";
        return false;
      }
      this.notes.push({
        title,
        descr,
        date: new Date(Date.now()).toLocaleString(),
        priority,
        isActiveTitle: true,
        isActiveDescr: true,
      });
      this.errorMessage = null;
      this.note.title = "";
      this.note.descr = "";
      this.note.priority = "1";
    },
    removeNote(index) {
      this.notes.splice(index, 1);
    },
    gridActive() {
      this.grid = true;
    },
    gridNoActive() {
      this.grid = false;
    },
  },
};
</script>

<style>
.inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.app__title {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 30px;
}
</style>
