<template>
        <div class="login" v-show="showLogin"> 
            <div class="login-left">
                <div class="login-content">
                    <div class="text">
                        <h1>歡迎回來!</h1>
                        <p>準備好與我們開始旅程嗎? 探索世界上好玩的事物及人群<br>馬上登入來分享您的趣事</p>
                    </div>
                    <div class="image">
                        <img src="../assets/img/business,-entrepreneurship-and-growth.png">
                    </div>
                    <div class="btn">
                        <span>還沒有帳戶嗎? 點擊按鈕立即註冊</span>
                        <button @click="isHidden">註冊帳戶</button>
                    </div>
                </div>

            </div>
            <div class="login-right">
                <h1>456</h1>    
            </div> 
        </div>

        <div class="create" v-show="showCreate">
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

            let showLogin = ref(true);
            let showCreate = ref(false);

            function isHidden() {
                showLogin.value = !showLogin.value;
                showCreate.value = !showCreate.value;
            }



            return {
                showLogin,
                showCreate,
                isHidden
            }
            
        }
    }
</script>

<style lang="scss" scoped>
    $mainColor: #f3ebe9;
    $darkColor: #efdcd6;
    $darkText: #4d3900;
    $lightText: #be9c79;
    $shadow: 0 .5rem 1rem rgba(0, 0, 0, .1);

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
    
    .login {
        @extend %box;
        .login-left {
            width: 50%;
            height: 100%;
            border-radius: 2rem;
            padding: 1.5rem;
            .login-content {
                height: 100%;
                display: flex;
                align-items: center;
                flex-direction: column;
                background-color: $mainColor;
                border-radius: 2rem;
                .text {
                    text-align: center;
                    margin-top: 5rem;
                    h1 {
                        font-size: 3rem;
                        padding: 1rem;
                        color: $darkText;
                    }
                    p {
                        font-size: 1.6rem;
                        color: $lightText;
                        line-height: 1.6em;
                    }
                }
                .image {
                    width: 50rem;
                    padding: 1rem;
                    img {
                        width: 100%;
                    }
                }
                .btn {
                    span {
                        font-size: 1.4rem;
                        color: $lightText;
                        padding: 1.5rem;
                    }
                    button {
                        border: 1px solid $darkText;
                        border-radius: 1rem;
                        background-color: transparent;
                        color: $darkText;
                        font-size: 1.6rem;
                    }
                    button:hover {
                        background-color: $darkText;
                        color: #fff;
                        transition: .5s;
                    }
                }
            }
            
        }
        .login-right {
            width: 50%;
            height: 100%;
            background-color: #fff;
            border-radius: 2rem;
        }
    }

    .create{
        @extend %box;
        .create-left {
            width: 50%;
            height: 100%;
            background-color: #fff;
            border-radius: 2rem;
        }
        .create-right {
            position: relative;
            width: 50%;
            height: 100%;
            background-color: $mainColor;
            border-radius: 2rem;
            
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