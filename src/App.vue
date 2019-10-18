<template>
    <div v-if="userLogin">
        <div class="main">
            <app-display
                :totalsArr="allData.totals"
            ></app-display>
            <app-input
                :budgetData="allData"
                @totalsGot="getTotals"
            ></app-input>
            <app-list
                :budgetData="allData"
                @itemDeleted="deleteItem"
            ></app-list>
        </div>
    </div>
    <div v-else class="main">
        <app-login
            :login="userLogin"
            @switchLoginStatus="switchStatus"
        ></app-login>
    </div>
</template>


<script>
    import script from './logic/script.js'
    import Input from './components/Input.vue'
    import List from './components/List.vue'
    import Display from './components/Display.vue'
    import Login from './components/Login.vue'


    export default {
        data() {
            return {
                allData: {
                    allItems: {
                        exp: [],
                        inc: [],
                    },
                    totals: {
                        exp: 0,
                        inc: 0,
                    }
                },
                userLogin: false,
            }
        },
        components: {
            appDisplay: Display,
            appInput: Input,
            appList: List,
        },
        methods: {
            deleteItem(index, el) {
                el.splice(index, 1);
            },
            getTotals() {
                console.log('value');
                // let arr = [5,6,7];
                // const reducer = (a, b) => a + b;
                // console.log(arr.reduce(reducer));
            },
            switchStatus() {
                this.userLogin = !this.userLogin;
                console.log(this.userLogin);
            }
        },
    }
</script>

<style>
    .main {
        background-color: lightblue;
        border: 1px black;
        padding: 30px;
        height: 100vh;
    }
</style>
