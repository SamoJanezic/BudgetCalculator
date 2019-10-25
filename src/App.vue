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
                        exp: [],
                        inc: [],
                    }
                },
                userLogin: true,
                testData: [35, 45, 15, 5],
            }
        },
        components: {
            appDisplay: Display,
            appInput: Input,
            appList: List,
        },
        methods: {
            sortResponse(el) {
                el.forEach(element => {
                    console.log(element);
                    if (element['value'] < 0) {
                        this.allData.allItems.exp.push(element);
                        this.allData.totals.exp.push(parseFloat(element['value']));
                    } else {
                        this.allData.allItems.inc.push(element);
                        this.allData.totals.inc.push(parseFloat(element['value']));
                    }
                });

            },
            deleteItem(index, el) {
                el.splice(index, 1);
            },
            switchStatus() {
                this.userLogin = !this.userLogin;
                console.log(this.userLogin);
            }
        },
        mounted() {
            axios.get('http://127.0.0.1:8000/api/budgets')
            .then(response => this.sortResponse(response.data.data))
        }
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
