<template>
        <div class="login" v-show="gHide"> 
            <div class="login-left">
                <h1>123</h1>
                <div class="btn">
                    <button @click="isHidden">按我1</button>
                </div>
                <div class="loose-leaf">
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                </div>
            </div>
            <div class="login-right">
                <h1>456</h1>    
            </div> 
        </div>

        <div class="create" v-show="rHide">
            <div class="create-left">
                <h1>789</h1>
            </div>
            <div class="create-right">
                <h1>987</h1>
                <div class="btn">
                    <button @click="isHidden">按我1</button>
                </div>
                <div class="loose-leaf">
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                </div>
            </div>   
        </div>

</template>

<script>
    import { ref } from 'vue'
    export default {
        name: 'LogIn',
        setup() {
            let gHide = ref(true);
            let rHide = ref(false);

            function isHidden() {
                gHide.value = !gHide.value;
                rHide.value = !rHide.value;
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
    $mainColor: #f3ebe9;
    $darkColor: #efdcd6;
    $shadow: 0 .5rem 1rem rgba(0, 0, 0, .1);
    $leftBorder: 2rem 0 0 2rem;
    $rightBorder: 0 2rem 2rem 0;

    %box {
        position: absolute;
        top: 10%;
        bottom: 10%;
        left: 15%;
        right: 15%;
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: $shadow;
        border-radius: 2rem;
    }
    %loose-leaf {
        position: absolute;
        top: 10rem;
        display: flex;
        align-items: center;
        flex-direction: column;  
    }
    %circle {
        width: 3rem;
        height: 3rem;
        background-color: #fff;
        border-radius: 50%;
        margin-bottom: 5rem
    }
    
    
    .login {
        @extend %box;
        .login-left {
            position: relative;
            width: 50%;
            height: 100%;
            background-color: $mainColor;
            border-radius: 2rem 10rem 10rem 2rem;
            .loose-leaf {
                @extend %loose-leaf;
                right: 1rem;
                .circle {
                    @extend  %circle
                }
            }
        }
        .login-right {
            width: 50%;
            height: 100%;
            background-color: #fff;
            border-radius: $rightBorder;
        }

    }

    .create{
        @extend %box;
        .create-left {
            width: 50%;
            height: 100%;
            background-color: #fff;
            border-radius: $leftBorder;
        }
        .create-right {
            position: relative;
            width: 50%;
            height: 100%;
            background-color: $mainColor;
            border-radius: 10rem 2rem 2rem 10rem;
            .loose-leaf {
                @extend %loose-leaf;
                left: 1rem;
                .circle {
                    @extend  %circle
                }
            }
        }
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