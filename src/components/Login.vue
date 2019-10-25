<template>
    <div class="loginScr">
        <h2>Hello!</h2>
        <p>Please login to use the Budget Calculator</p>
        <div class="row">
            <input type="text" placeholder="User name" class="col-centered">
        </div>
        <div class="row">
            <input type="text" placeholder="Password" class="col-centered">
        </div>
        <button @click="switchStatus">Login</button>
        <p>If your not yet registered yet, do it here</p>
        <div class="row">
            <input type="text" placeholder="User name" class="col-centered">
        </div>
        <div class="row">
            <input type="text" placeholder="Password" class="col-centered">
        </div><div class="row">
            <input type="text" placeholder="Repeat password" class="col-centered">
        </div>
        <button @click="switchStatus">Register</button>
        <p>{{ login }}</p>
    </div>
</template>

<script>
    export default {
        methods: {
            switchStatus() {
                this.$emit('switchLoginStatus');
            },
        },
        props: ['login'],
    }
</script>

<style>
    .loginScr {
        border: 1px solid black;
        width: 500px;
        padding: 30px;
        margin: auto auto;
        text-align: center;
        float:none;
    }
        .col-centered{
        margin: 10px auto;
        float: none;
    }
</style>