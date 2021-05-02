<template>
    <div class="card">
        <div class="song">
            <p>{{songTitle}} by {{songArtist}}</p>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Song',
    props: {
        songTitle: String,
        songArtist: String
    }
    }
</script>
<style scoped>
.card{
    color: #ffff;
    background-color: rgb(53,52,52,.5);
    margin-top: 5px;
    border-radius: 5px;
    justify-content: center;
    display: flex;
    margin-left: 50px;
    margin-right: 50px;
}
.song{
    margin: 5px;
}
</style>
