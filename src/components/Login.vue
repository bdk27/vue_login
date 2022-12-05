<template>
        <div class="login" v-show="showLogin"> 
            <div class="login-left">
                <div class="login-left-content">
                    <div class="text">
                        <h1>歡迎回來!</h1>
                        <p>準備好與我們開始旅程嗎 ? 探索世界上好玩的事物及人群<br>馬上登入來分享您的趣事</p>
                    </div>
                    <div class="image">
                        <img src="../assets/img/business,-entrepreneurship-and-growth.png">
                    </div>
                    <div class="btn">
                        <span>還沒有帳戶嗎? 點擊按鈕立即註冊</span>
                        <button @click="isHidden">註冊新帳戶</button>
                    </div>
                </div>

            </div>
            <div class="login-right">
                <div class="login-right-content">
                    <div class="photo">
                        <font-awesome-icon icon="fa-solid fa-user" class="icon" />
                    </div>
                    <h1>登入帳戶</h1>
                    <form action="#">
                        <div class="account">
                            <label for="account">帳號 :</label>
                            <input type="text" name="account" placeholder="請輸入信箱">
                        </div>
                        <div class="password">
                            <label for="password">密碼 :</label>
                            <input type="text" name="password" placeholder="請輸入密碼" id="pwd">
                            <font-awesome-icon icon="fa-solid fa-eye" class="eye" v-if="openEye" @click="showEye"/>
                            <font-awesome-icon icon="fa-solid fa-eye-slash" class="eye" v-else @click="showEye"/>
                            
                        </div>
                        <div class="btn">
                            <button type="button">登入</button>
                        </div>
                    </form>
                    <div class="platform">
                        <p><span>使用其他平台登入</span></p>
                        <div class="brands">
                            <img src="../assets/img/Google__G__Logo.svg.png" alt="google-logo">
                            <img src="../assets/img/Facebook_f_logo_(2021).svg.png" alt="facebook-logo">
                            <img src="../assets/img/Twitter-logo.svg.png" alt="twitter-logo">
                        </div>
                    </div>
                    <div class="footer">
                        <small>點擊上方按鈕即表示您同意我們的<a href="#">使用條款</a>和<a href="#">隱私政策</a></small>
                    </div>
                </div>
                
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
            /* 切換登入/創建帳戶 */
            let showLogin = ref(true);
            let showCreate = ref(false);

            function isHidden() {
                showLogin.value = !showLogin.value;
                showCreate.value = !showCreate.value;
            }

            /* 顯示/不顯示密碼 */
            let openEye = ref(true);

            function showEye() {
                openEye.value = !openEye.value;
                if(openEye.value) {
                    document.getElementById('pwd').setAttribute('type', 'text');
                }else {
                    document.getElementById('pwd').setAttribute('type', 'password');
                }
            }



            return {
                showLogin,
                showCreate,
                isHidden,
                openEye,
                showEye,
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
        left: 10%;
        right: 10%;
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: $shadow;
        border-radius: 2rem;
    }
    %login-content {
        height: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    %input {
        label {
            font-size: 1.8rem;
            color: $darkText;
        }
        input {
            border: 1px solid $darkColor;
            border-radius: .5rem;
            width: 100%;
            padding: 1.5rem;
            margin: 1rem 0;
        }
        input:hover {
            border: 1px solid $lightText;
        }
        input::placeholder {
            font-size: 1.6rem;
        }
    }
    
    .login {
        @extend %box;
        .login-left {
            width: 50%;
            height: 100%;
            border-radius: 2rem;
            padding: 1.5rem;
            .login-left-content {
                @extend %login-content;
                background-color: $mainColor;
                border-radius: 2rem;
                padding: 1.5rem;
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
                    padding: 0 5rem;
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
            padding: 1.5rem;
            border-radius: 2rem;
            .login-right-content {
                @extend %login-content;
                .photo {
                    position: relative;
                    width: 10rem;
                    height: 10rem;
                    border: 1px solid $lightText;
                    border-radius: 50%;
                    margin-top: 5rem;
                    .icon {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        font-size: 5rem;
                        color: $lightText;
                    }
                }
                h1 {
                    color: $darkText;
                    font-size: 3rem;
                    padding: 1rem;
                }
                form {
                    width: 90%;
                    .account {
                        padding: 1rem;
                        @extend %input;
                    }
                    .password {
                        padding: 1rem;
                        position: relative;
                        @extend %input;
                        .eye {
                            font-size: 1.8rem;
                            position: absolute;
                            right: 2rem;
                            bottom: 3.5rem;
                            cursor: pointer;
                        }
                    }
                    .btn {
                        padding: 1rem;
                        margin-top: 1rem;
                        button {
                            padding: 1rem;
                            width: 100%;
                            border-radius: .5rem;
                            font-size: 1.8rem;
                        }
                        button:hover {
                            background-color: $lightText;
                        }
                    } 
                }
                .platform {
                    width: 90%;
                    padding: 1rem;
                    p {
                        text-align: center;
                        position: relative;
                        font-size: 1.4rem;
                        span::before, span::after {
                            content: '';
                            position: absolute;
                            top: 50%;
                            background: $darkText;
                            width: 35%;
                            height: 1px;
                        }
                        span::before {
                            left: 0%;
                        }
                        span::after {
                            right: 0%;
                        }
                       
                    }
                    .brands {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        img {
                            width: 5rem;
                            padding: 1rem;
                            margin: 1rem;
                            cursor: pointer;
                        }
                        img:hover {
                            background: #f0f0f0;
                            border-radius: 1rem;
                        }
                    } 
                }
               .footer {
                    small {
                        color: $lightText;
                        letter-spacing: .1rem;
                    }
                    small a {
                        color: $darkText;
                    }
                }
            }
            
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

    @media(max-width: 991px) {
        .login {
            .login-left {
                .login-left-content {
                    padding: 2rem;
                    .text {
                        p {
                            font-size: 1.4rem;
                        }
                    }
                    .image {
                        padding: 0;
                    }
                    .btn {
                        text-align: center;
                        button {
                            margin-top: 2rem;
                        }
                    }
                }
            }
            .login-right {
                .login-right-content {
                    form {
                        width: 100%;
                    }
                    .platform {
                        p {
                            span::before, span::after {
                                width: 30%;
                            }        
                        }
                    }
                }
            }
        }
    }
    @media(max-width: 768px) {
        .login {
            flex-direction: column-reverse;
            .login-left {
                width: 100%;
                padding: 0; 
                .login-left-content { 
                    padding: 0;
                    border-radius: 0 0 2rem 2rem;
                    .text {
                        display: none;
                    }
                    .image {
                        display: none;
                    }
                    .btn {
                        bottom: 1rem;
                        button {
                            margin: 1rem 0;
                            font-size: 1.4rem;
                        }
                    }
                }
            }
            .login-right {
                width: 100%;
                .login-right-content {
                    .platform {
                        p {
                            span::before, span::after {
                                width: 30%;
                            }        
                        }
                    }
                }
            }
        }
    }
    @media(max-width: 450px) {
        
    }

</style>