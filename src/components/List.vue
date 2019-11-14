<template>
    <div class="container">
        <div class="row justify-content-between">
            <div class="col-6">
                <div>
                    <li v-for="(el) in budgetData.allItems.inc"
                    :key="el"
                    style="list-style: none">
                        <div class="row pos divbtn">
                            <div class="col-2 cBorder">{{ el.id }}</div>
                            <div class="col-6 cBorder">{{ el.description }}</div>
                            <div class="col-4 cBorder">{{ el.value }} €
                                <div
                                class="btn"
                                @click="deleteItem(el.id)"
                                ><img src="../import/delete.gif"/></div>
                            </div>
                        </div>
                    </li>
                </div>
            </div>
            <div class="col-6">
                <div>
                    <li v-for="(el) in budgetData.allItems.exp"
                    :key="el"
                    style="list-style:none">
                        <div class="row neg">
                            <div class="col-2 cBorder">{{ el.id }}</div>
                            <div class="col-6 cBorder">{{ el.description }}</div>
                            <div class="col-4 cBorder">{{ el.value }} €
                                <div
                                class="btn"
                                @click="deleteItem(el.id)"
                                ><img src="../import/delete.gif"/></div>
                            </div>
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
            deleteItem(id) {
                this.$emit('itemDeleted', id);
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
    .btn{
        float: right;
        text-align: right;
        padding: 0px 2px 0px 2px;
        display: inline-block;
        height: 20px;
        cursor: pointer;
        /* display: none; */
        line-height: 1;
    }
    /* .btn:hover {
        display: none;
    } */
</style>