import Vue from 'vue';

let todo = {
  template: '<button v-on:click="counter++">{{counter}}</button>',
  data() {
    return {
      counter: 0,
    };
  }
};

const Todo = new Vue({
  el: '#app',
  components: {
    'todo': todo,
  }
});