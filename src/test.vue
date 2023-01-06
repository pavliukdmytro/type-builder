<template>
    <div class="test-class">
        <h1>
            {{Name}}
        </h1>



        <input type="text" v-model="Name">
    </div>
</template>

<script lang="ts">
class Test {
    Name:string = "";
}
export default {
    data(): Test {
        return {
            Name: "abcd"
        }
    }
}
</script>
<style lang="scss">
.test-class{
    background-color: green;
    @include point-md{
        background-color: rgb(0,0,0, .1);
    }
}
</style>