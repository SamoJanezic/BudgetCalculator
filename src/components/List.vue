<template>
    <div class="container">
        <div class="row justify-content-between">
            <div class="col-6">
                <div>
                    <li v-for="(el, index) in budgetData.allItems.inc"
                    @click="deleteItem(index, budgetData.allItems.inc)"
                    :key="el"
                    style="list-style: none">
                        <div class="row pos">
                            <div class="col-2 cBorder">{{ el.id }}</div>
                            <div class="col-6 cBorder">{{ el.description }}</div>
                            <div class="col-4 cBorder">{{ el.value }} €</div>
                        </div>
                    </li>
                </div>
            </div>
            <div class="col-6">
                <div>
                    <li v-for="(el, index) in budgetData.allItems.exp"
                    @click="deleteItem(index, budgetData.allItems.exp)"
                    :key="el"
                    style="list-style:none">
                        <div class="row neg">
                            <div class="col-2 cBorder">{{ el.id }}</div>
                            <div class="col-6 cBorder">{{ el.description }}</div>
                            <div class="col-4 cBorder">{{ el.value }} €</div>
                        </div>
                    </li>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        methods: {
            deleteItem(index, el) {
                this.$emit('itemDeleted', index, el);
            }
        },
        props: ['budgetData'],
    }
</script>

<style>
    .cBorder{
        border: 1px solid black;
        width: 100;
    }
    .pos{
        background-color: lightgreen;
    }
    .neg{
        background-color: rgb(255, 67, 67);
    }
</style>