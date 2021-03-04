<template>
  <AddTask @add-task="addTask" v-show="showAddTask" />

  <Tasks
    @toggle-reminder="toggleReminder"
    @delete-task="deleteTask"
    :tasks="tasks"
  />
</template>
<script>
import Tasks from "../components/Tasks.vue";
import AddTask from "../components/AddTask.vue";
export default {
  nmae: "Home",
  props: {
    showAddTask: Boolean
  },
  components: {
    Tasks,
    AddTask
  },
  data() {
    return {
      tasks: []
    };
  },
  methods: {
    // method addTask adds task to the our jason_server then it fetch and display it
    async addTask(task) {
      const res = await fetch("api/tasks", {
        method: "POST", //adding post method in the addTask method
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(task)
      });
      const data = await res.json();

      this.tasks = [...this.tasks, data];
    },

    //deleteTask methods delete  delete tasks
    async deleteTask(id) {
      // console.log('task', id)
      if (confirm("Are you sure?")) {
        const res = await fetch(`api/tasks/${id}`, {
          method: "DELETE"
        });
        res.status === 200
          ? (this.tasks = this.tasks.filter(task => task.id !== id))
          : alert("Error deleting task");
      }
    },

    async toggleReminder(id) {
      const taskToToggle = await this.fetchTask(id);
      const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

      const res = await fetch(`api/tasks/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(updTask)
      });
      const data = await res.json();
      this.tasks = this.tasks.map(task =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      );
    },

    // fetch data from backend server
    async fetchTasks() {
      // const res = await fetch("http://localhost:5000/tasks");
      const res = await fetch("api/tasks");

      const data = await res.json();

      return data;
    },
    async fetchTask(id) {
      // const res = await fetch("http://localhost:5000/tasks/${id}");
      const res = await fetch(`api/tasks/${id}`); //api is called in vue.config.js

      const data = await res.json();

      return data;
    }
  },
  // created tasks with id
  async created() {
    this.tasks = await this.fetchTasks();
  }
};
</script>