<template>
  <div>
    <div v-if="loading">Data is loading ...</div>
    <div v-else>
      <div class="row" v-for="row in rows" :key="'row' + row">
        <div
          class="col mb-4"
          v-for="(bookable, column) in bookablesInRow(row)"
          :key="'row' + row + column"
        >
          <BookableListItem :title="bookable.title" :content="bookable.content" :price="1000"></BookableListItem>
        </div>
        <div class="col" v-for="p in placeholdersInRow(row)" :key="'placeholder' + row + p"></div>
      </div>
    </div>
  </div>
</template>

<script>
import BookableListItem from "./BookableListItem";
export default {
  components: {
    BookableListItem
  },
  data() {
    return {
      bookables: null,
      loading: false,
      columns: 3
    };
  },
  computed: {
    rows() {
      return this.bookables == null
        ? 0
        : Math.ceil(this.bookables.length / this.columns);
    }
  },
  methods: {
    bookablesInRow(row) {
      return this.bookables.slice((row - 1) * this.columns, row * this.columns);
    },
    placeholdersInRow(row) {
      return this.columns - this.bookablesInRow(row).length;
    }
  },
  created() {
    this.loading = true;
    setTimeout(() => {
      this.bookables = [
        {
          title: "Villa 1",
          content: "This villa is very cheap"
        },
        {
          title: "Villa 2",
          content: "Very expensive"
        },
        {
          title: "Villa 3",
          content: "Very expensive"
        },
        {
          title: "Villa 4",
          content: "Very expensive"
        },
        {
          title: "Villa 5",
          content: "Very expensive"
        },
        {
          title: "Villa 6",
          content: "Very expensive"
        },
        {
          title: "Villa 7",
          content: "Very expensive"
        }
      ];
      this.loading = false;
    }, 2000);
  }
};
</script>