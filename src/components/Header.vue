<template>
  <header>
    <h1>{{ title }}</h1>
    <!-- catching the toggle add task and emitting it in the app.vue -->
    <!-- the v-show="homePage" is to stop the button from showing on other page  -->
    <Button
     v-show="homePage" 
      @btn-click="$emit('toggle-add-task')"
      :text="showAddTask ? 'Close' : 'AddTask'"
      :color="showAddTask ? 'red' : 'green'"
    />
  </header>
</template>
<script>
import Button from "./Button";
export default {
  name: "Header",
  props: {
    title: String,
    showAddTask: Boolean,

  },
  components: {
    Button
  },
  computed: { //this return false if not on the home page
    homePage(){
      if(this.$route.path == '/'){
        return true
      }else{
        return false
      }
    }
  }

};
</script>
<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>