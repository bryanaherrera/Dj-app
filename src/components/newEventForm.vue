<template>
    <div class="header">
        <h5>Please fill out the form below</h5>
    </div>
    <div class="form-container">
        <form>
            <Input label="Name" placeholder="Name"></Input>
            <label>Date</label>
                <input type="date" placeholder="Date">
            <br>
            <label>Time</label>
                <input type="time" placeholder="Time">
            <br>
            <Input label="Location" placeholder="Location"></Input>
            <Submit></Submit>
        </form>
    </div>
</template>
<script>

import Input from '../components/formInput.vue'
import Submit from '../components/formSubmit.vue'

export default {
  name: 'Form',
  props: {
    msg: String
  },
  components: {
    Input,
    Submit
  }
}
</script>
<style scoped>
    .header{
        text-align: center;
        margin-bottom: 40px;
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
</style>