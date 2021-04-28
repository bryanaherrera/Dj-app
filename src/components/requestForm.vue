<template>
    <div class="header">
        <h3>Request</h3>
    </div>
    <div class="form-container">
        <form>
            <label>Title<input type="text" placeholder="Song Title"></label>
            <br>
            <label>Artist<input type="text" placeholder="Artist Name"></label>
            <br>
            <input type="submit">
        </form>
    </div>
</template>
<script>
export default {
  name: 'Form',
  props: {
    msg: String
  }
}
</script>
<style scoped>
    .header{
        text-align: center;
    }
    .form-container{
        text-align: center;
    }
    input[type=text]{
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
    }
    input[type=submit]{
        border-radius: 10px;
        padding: 10px;
        border: 0;
    }

</style>