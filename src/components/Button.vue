<template>
    <button @click="onClick()" :style="{ background: color}" class="btn">Add Tasks</button>
</template>
<script>
export default {
    name: 'Button',
    props:{
     text: String,
     color: String, /*  this color is blind to background style at the top and called in Header.vue*/
    },
    methods: {
        onClick(){
            this.$emit('btn-click')//this will toggle the add task form when the button is clicked and emmitting it into the header component
        },
    }
}
</script>