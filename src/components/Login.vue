<template>
    <div class="test1" id="test1" v-show="gHide">  
    </div>
    <div class="test2" id="test2" v-show="rHide">  
    </div>
    <div class="btn">
        <button id="showHidden" @click="isHidden">按我</button>
    </div>
   
</template>

<script>
    import { ref } from 'vue'
    export default {
        name: 'LogIn',
        setup() {
            let gHide = ref(true);
            let rHide = ref(false);

            function show(obj) {
                if(obj.value === true) {
                    obj.value = false;
                }else {
                    obj.value = true;
                }
            }
            function isHidden() {
                show(gHide);
                show(rHide);
            }

            return {
                gHide,
                rHide,
                isHidden
            }
            
        }
    }
</script>

<style lang="scss" scoped>
    .test1{
        width: 1000px;
        height: 500px;
        background-color: green;
    }
    .test2{
        width: 1000px;
        height: 500px;
        background-color: red;
    }
    .btn {
        top: 50%;
        left: 50px;
    }
    button {
        padding: 10px;
        cursor: pointer;
    }

</style>