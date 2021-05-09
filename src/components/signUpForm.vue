<template>
    <div class="header">
        <h5>Please fill out the form below</h5>
    </div>
    <div class="form-container">
        <form>
            <Input label="Username" placeholder="username"></Input>
            <label>Email</label><input type="email" placeholder="email">
            <br>
            <Input label="DJ Name" placeholder="name"></Input>
            <Input label="Description" placeholder="description"></Input>
            <label>Password</label><input type="password" placeholder="password">
            <br>
            <label>Confirm Password</label><input type="password" placeholder="password">
            <br>
            <Submit></Submit>
        </form>
    </div>
</template>
<script>

import Input from '../components/formInput.vue'
import Submit from '../components/formSubmit.vue'

export default {
  name: 'Form',
  components: {
    Input,
    Submit
  }
}
</script>
<style scoped>
    .header{
        text-align: center;
    }
    .form-container{
        text-align: center;
        margin-bottom: 10px;
    }
    input{
        padding: 10px;
        margin-bottom: 5px;
        border: 0;
        box-shadow: 0 15px 4px rgba(0,0,0,0.06);
        border-radius: 10px;
        background-color: rgb(196, 196, 196, .5);
    }
    label{
        font-weight: 700;
        color: #ffff;
        margin-right: 5px;
    }
    /* input::placeholder{
        color: #000!important;
        opacity: 1;
    } */
</style>