<template>
    <div class="container cont-input">
        <div class="row justify-content-center">
            <div class="col-md-2">
                <select v-model="typeOf">
                    <option value="income">+</option>
                    <option value="expense">-</option>
                </select>
            </div>
            <div class="col-md-4">
                <input type="text" size="30" placeholder="Add description" v-model="description">
            </div>
            <div class="col-md-2">
                <input type="number" size="4" placeholder="Value" v-model="value">
            </div>
            <button class="col-md-1" @click="sendData()">Submit</button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                typeOf: 'income',
                description: '',
                value: '',
            }
        },
        methods: {
            // createItem() {
            //     if (this.description === '' || this.value === ''){
            //         return;
            //     }
            //     if (this.typeOf === 'income') {
            //         this.budgetData.allItems.inc.push(new Income(this.getId(this.budgetData.allItems.inc.length), this.description, this.value));
            //         this.budgetData.totals.inc += parseInt(this.value);
            //     } else {
            //         this.budgetData.allItems.exp.push(new Expense(this.getId(this.budgetData.allItems.exp.length), this.description, this.value));
            //         this.budgetData.totals.exp -= parseInt(this.value);
            //     }
            //     this.description = '';
            //     this.value = '';
            // },
            // getId(type) {
            //     if(type === 0) {
            //         return 1;
            //     } else {
            //         return type + 1;
            //     }
            // },
            sendData() {
                this.$emit('wasSend', [this.typeOf, this.description, this.value]);
                this.description = '';
                this.value = '';
            }
        },
        props: ['budgetData'],
    }

    class Income{
        constructor(id, description, value) {
            this.id = id;
            this.description = description;
            this.value = value;
        }
    }

    class Expense{
        constructor(id, description, value) {
            this.id = id;
            this.description = description;
            this.value = -value;
        }
    }
</script>

<style scoped>
    .cont-input {
        padding:10px;
        border: 1px solid black;
        background-color:aqua;
    }
    input[type=number]{
        width: 100px;
    }
</style>