<template>
    <label>{{label}}</label>
    <input type="text" :placeholder="placeholder" @input="$emit('input',$event.target.value)">
    <br>
</template>
<script>
export default {
  name: 'input',
  props: {
    label: String,
    placeholder: { type: String, required: false, default: ''},
  }
}
</script>
<style scoped>
    label{
        font-weight: 700;
        color: #ffff;
        margin-right: 5px;
    }
    input[type=text]{
        padding: 10px;
        margin-bottom: 5px;
        border: 0;
        box-shadow: 0 15px 4px rgba(0,0,0,0.06);
        border-radius: 10px;
        background-color: rgb(196, 196, 196, .5);
    }
    /* input::placeholder{
        color: #000!important;
        opacity: 1;
    } */
</style>