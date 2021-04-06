<template>
    <div class="container">
      <div class="col-md-6 offset-md-3">
        <h1 class="text-center">To do List 어플리케이션</h1>
        <input type="text" class="form-control" v-model="userInput" @keyup.enter="addNewTodo"/>
        
        <div class="list-group">
          <template v-for="todo in activeTodoList">
            <Todo
              :label="todo.label"
              :key="todo.index"
              @componentClick="toggleTodoState(todo)"/>
          </template>
        </div>

        <div class="text-right">
          <button type="button" class="btn btn-sm" @click="changeCurrentState('active')">할 일</button>
          <button type="button" class="btn btn-sm" @click="changeCurrentState('done')">완료</button>
          <button type="button" class="btn btn-sm" @click="changeCurrentState('all')">전체</button>
        </div>
      </div>
    </div>
</template>
<script>
import Todo from '../components/Todo';

export default {
    data() {
    return {
      userInput:'',
      todoList: [],
      currentState: 'active',
    }
  },
  computed: {
    activeTodoList() {
      return this.todoList.filter(todo => this.currentState === 'all' || todo.state === this.currentState);
    },
  },
  methods: {
    changeCurrentState(state) {
      this.currentState = state;
    },
    addNewTodo() {
      this.todoList.push({
        label: this.userInput,
        state: 'active',
      });
      this.userInput = '';
    },
    toggleTodoState(todo) {
      todo.state = todo.state === 'active' ? 'done' : 'active';
    }
  },
  components: {
  //   Header,
    Todo,
  }
}
</script>