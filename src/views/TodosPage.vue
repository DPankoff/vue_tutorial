<template>
    <div>
      <h2> Введите новую задачу </h2>
      <router-link to="/">Home</router-link>
      <AddTodo 
        @add-todo="addTodo"
      />
      <select v-model="filter">
        <option value="all">Все</option>
        <option value="complited">Выполненные</option>
        <option value="not-complited">Не Выполненные</option>
      </select>
      <hr/>
      <LoaderComp v-if="loading" class="loader" />
      <TodoList 
        v-else-if="todos.length"
        :todos="filteredTodos" 
        @remove-todo="removeTodo"
      />
      <p v-else>Нет новых заданий </p>
    </div>
  </template>

  <script>
  
  import TodoList from '@/components/TodoList';
  import AddTodo  from '@/components/AddTodo.vue';
  import LoaderComp  from '@/components/LoaderComp.vue';

  
  export default {
    name: 'app',
    data() {
     return { 
      todos : [],
        loading : true,
        filter : 'all',
    }
    },
  
    components: {
       TodoList, AddTodo,LoaderComp,
    },
  
    mounted() {
      fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
        .then(response => response.json())
        .then(json => {
        setTimeout (() => {
            this.todos   = json
            this.loading = false

            console.log(this.todos)

          }, 1000)
      })
    },

    watch: {
        filter(value){
            console.log(value)
        }   
    },

    computed: {
        filteredTodos() {
            if (this.filter === 'all') {
                return this.todos
            }
            if (this.filter === 'complited'){
                return this.todos.filter(t => t.complited)
            }
            if (this.filter === 'not-complited'){
                return this.todos.filter(t => !t.complited)
            }

            return this.todos
        }
    },
  
    methods: {
      removeTodo(id) {
        console.log(id)
        this.todos = this.todos.filter(t => t.id !== id)
      },
  
      addTodo(todo){
        this.todos.push(todo)
  
        console.log(this.todos)
      }
    }
  }
  
  </script>
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .loader {
    justify-content: center;
    display: flex;
  }
  </style>
  