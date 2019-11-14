<template>
    <div v-if="userLogin">
        <div class="main">
            <app-display
                :totalsArr="budgetData.totals"
            ></app-display>
            <app-input
                :budgetData="budgetData"
                @wasSend="checkData"
            ></app-input>
            <app-list
                :budgetData="budgetData"
                @itemDeleted="deleteFromBudget"
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
                budgetData: {
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
                    if (element['value'] < 0) {
                        this.budgetData.allItems.exp.push(element);
                        this.budgetData.totals.exp.push(parseFloat(element['value']));
                    } else {
                        this.budgetData.allItems.inc.push(element);
                        this.budgetData.totals.inc.push(parseFloat(element['value']));
                    }
                });

            },
            switchStatus() {
                this.userLogin = !this.userLogin;
                console.log(this.userLogin);
            },
            resetBudgetData() {
                this.budgetData.allItems.inc = [];
                this.budgetData.allItems.exp = [];
                this.budgetData.totals.inc = [];
                this.budgetData.totals.exp = [];
            },
            getBudget() {
                axios.get('http://127.0.0.1:8000/api/budgets')
                .then(response => this.sortResponse(response.data.data))
            },
            postBudget(description, value) {
                axios({
                    method: 'post',
                    url: 'http://127.0.0.1:8000/api/budget',
                    data: {
                        description: description,
                        value: value
                    },
                })
                .then((response) => {
                    if (response) {
                        this.resetBudgetData();
                        this.getBudget();
                    }
                });
                // .then(this.resetBudgetData())
                // .then(this.getBudget());
            },
            deleteFromBudget(id) {
                axios({
                    method: 'delete',
                    url: `http://127.0.0.1:8000/api/budget/${id}`,
                })
                .then((response) => {
                    if (response) {
                        this.resetBudgetData();
                        this.getBudget();
                    }
                });
            },
            checkData(dataFromInput) {
                if (dataFromInput[0] === 'expense') {
                    dataFromInput[2] = -dataFromInput[2];
                }
                this.postBudget(dataFromInput[1], dataFromInput[2]);
            }
        },
        mounted() {
            this.getBudget();
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
