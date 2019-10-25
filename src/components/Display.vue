<template>
    <div>
        <h2 class="title">Available budget {{ getTotals(totalsArr.inc) + getTotals(totalsArr.exp) }} €</h2>
        <div class="container">
            <div class="row justify-content-around">
                <div class="col-lg-4 pos-col col-display">
                    <div class="row justify-content-between">
                        <div class="col-5">Total Income:</div>
                        <div class="col-5">{{ getTotals(totalsArr.inc) }} €</div>
                    </div>
                </div>
                <div class="col-lg-4 neg-col col-display">
                    <div class="row justify-content-between">
                        <div class="col-5">Total Expenses:</div>
                        <div class="col-5">{{ getTotals(totalsArr.exp) }} €</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                
            }
        },
        methods: {
            getTotals(numArr) {
                return numArr.reduce(this.reducer);
            },
            reducer(total, num) {
                return total + num;
            },
        },
        props: ['totalsArr'],
    }

</script>

<style scoped>
    .col-display {
        padding: 24px;
        margin: 30px;
        height: 80px;
        border: 2px solid black;
    }
    .pos-col {
        background-color: lightgreen;
    }
    .neg-col {
        background-color: rgb(255, 67, 67);
    }
    .title {
        margin: auto;
        width: 40%;
        padding: 10px;
    }
</style>