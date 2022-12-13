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
                            <input type="email" name="account" placeholder="請輸入信箱" v-model="form.loginAcc">
                        </div>
                        <div class="password">
                            <label for="password">密碼 :</label>
                            <input type="text" name="password" placeholder="請輸入密碼" id="pwd" v-model="form.loginPwd">
                            <font-awesome-icon icon="fa-solid fa-eye" class="eye" v-if="openEye" @click="showEye"/>
                            <font-awesome-icon icon="fa-solid fa-eye-slash" class="eye" v-else @click="showEye"/>
                            
                        </div>
                        <div class="btn">
                            <button type="button" @click="getLoginInfo">登入</button>
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
                <div class="create-left-content">
                    <div class="photo">
                        <font-awesome-icon icon="fa-solid fa-user" class="icon" />
                    </div>
                    <h1>創建帳戶</h1>
                    <form action="#">
                        <div class="user">
                            <label for="user">名稱 :</label>
                            <input type="text" name="user" placeholder="請輸入名稱" v-model.trim="form.user">
                            <font-awesome-icon icon="fa-regular fa-circle-check" class="circle-check" v-show="form.usShow"/>
                        </div>
                        <div class="account">
                            <label for="account">帳號 :</label>
                            <input type="email" name="account" placeholder="請輸入電子信箱" v-model.trim="form.account">
                            <font-awesome-icon icon="fa-regular fa-circle-check" class="circle-check" v-show="form.acShow"/>
                        </div>
                        <div class="password">
                            <label for="password">密碼 :</label>
                            <input type="text" name="password" placeholder="必須包含至少6個字符、1個大寫字母和1個數字" v-model.trim="form.password">
                            <font-awesome-icon icon="fa-regular fa-circle-check" class="circle-check" v-show="form.pwShow"/>
                        </div>
                        <div class="verify">
                            <label for="verify">驗證碼 :</label>
                            <div class="display-verify">
                                <input type="text" name="verify" placeholder="請輸入驗證碼" v-model="form.checkCode">
                                <p id="code"></p>
                                <font-awesome-icon icon="fa-solid fa-arrow-rotate-left" class="recode" id="recode"/>
                                <font-awesome-icon icon="fa-regular fa-circle-check" class="circle-check" v-show="form.vfShow"/>
                            </div>
                        </div>
                        <div class="btn">
                            <button type="button" @click="saveLoginInfo">註冊</button>
                        </div>
                    </form>
                </div>
            </div>
            <div class="create-right">
                <div class="create-right-content">
                    <div class="text">
                        <h1>馬上註冊!</h1>
                        <p>別錯過精彩內容，只需註冊就能瀏覽世界趣事<br>馬上註冊來探索全新世界</p>
                    </div>
                    <div class="image">
                        <img src="../assets/img/people-and-technology.png">
                    </div>
                    <div class="btn">
                        <span>已經註冊帳戶了嗎? 點擊按鈕立即登入</span>
                        <button @click="isHidden">前往登入</button>
                    </div>
                </div>
            </div>   
        </div>

</template>

<script>
    import {  onMounted, reactive, ref, watch } from 'vue'

    export default {
        name: 'LogIn',
        setup() {
            //切換登入/創建帳戶
            let showLogin = ref(true);
            let showCreate = ref(false);
            function isHidden() {
                showLogin.value = !showLogin.value;
                showCreate.value = !showCreate.value;
            }

            //顯示/不顯示密碼
            let openEye = ref(true);
            function showEye() {
                openEye.value = !openEye.value;
                if(openEye.value) {
                    document.getElementById('pwd').setAttribute('type', 'text');
                }else {
                    document.getElementById('pwd').setAttribute('type', 'password');
                }
            }
            
            //驗證碼
            let code = ref('');
            function verifycode() {
                //全域變數 紀錄驗證碼
                let checkCode = document.getElementById("code");

                //顏色組
                const fontColor = ['red', 'orange', 'yellow', 'green'];
                const bgColor = [ 'blue', 'indigo', 'purple', 'gold'];
                const ls = ['2px', '6px', '-2px', '4px'];
                let iColor = 0;

                //隨機設定顏色組合
                function randColor() {
                    iColor = Math.floor(Math.random() * (fontColor.length));
                    return iColor;
                }
                //組成驗證碼
                function createCode() {
                    let ci = randColor()
                    checkCode.style.color = fontColor[ci];
                    checkCode.style.backgroundColor = bgColor[ci];
                    checkCode.style.letterSpacing = ls[ci];

                    code.value = '';
                    let codeLength = 6;//驗證碼的長度	
                    const random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');//隨機數 
                    for(let i=0; i<codeLength; i++) {
                        let index = Math.floor(Math.random() * 36);//取得隨機數的索引（0~35） 
                        code.value  += random[index];//根據索引取得隨機數加到code上 
                    } 
                    checkCode.innerText = code.value;//把code值賦給驗證碼
                }
                //更新驗證碼
                let recode = document.getElementById('recode');
                recode.addEventListener("click",function(){
                    createCode();
                });
                
                createCode();
            }

            //表單
            const form = reactive({
                loginAcc: '',
                loginPwd: '',
                user: '',
                account: '',
                password: '',
                checkCode: '',
                usShow: false,
                acShow: false,
                pwShow: false,
                vfShow: false,
            })
            function checkForm() {
                let emailRule = /^([\w]+)(.[\w]+)*@([\w]+)(.[\w]{2,3}){1,2}$/;
                let passwordRule = /^(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{6,}$/;
                form.user !== '' ? form.usShow = true : form.usShow = false;
                emailRule.test(form.account) ? form.acShow = true : form.acShow = false;
                passwordRule.test(form.password) ? form.pwShow = true : form.pwShow = false;
                form.checkCode === code.value ? form.vfShow = true : form.vfShow = false;
            }
            watch(form, () => {
                checkForm();
            })

            //本地存儲
            const loginData = reactive([]);
            function saveLoginInfo() {
                const personId = {user: form.user, account: form.account, password: form.password};
                
                if(form.usShow === true && form.acShow === true && form.pwShow === true && form.vfShow === true) {
                    loginData.push(personId);
                    form.user = '';
                    form.account = '';
                    form.password = '';
                    form.checkCode = '';
                    alert("註冊成功 \\(^-^)/");
                    verifycode()
                }else {
                    alert('請查看輸入是否全部正確!!!');
                }
            }
            watch(loginData, (value) => {
                localStorage.setItem('userInfo', JSON.stringify(value))
            })
            
            function getLoginInfo() {
                let getUserInfo = JSON.parse(localStorage.getItem('userInfo'));
                let index = getUserInfo.filter((value) => {
                    return value.account === form.loginAcc
                });
                if(index[0].password === form.loginPwd) {
                    alert(`登入成功! ${index[0].user}歡迎回來`);
                    form.loginAcc = '';
                    form.loginPwd = '';
                }else {
                    alert('登入失敗! 請重新輸入');
                }
            }

            onMounted(() => {
                verifycode()
            })

            return {
                //切換登入/創建帳戶
                showLogin,
                showCreate,
                isHidden,
                //顯示/不顯示密碼
                openEye,
                showEye,
                //驗證碼
                code,
                //表單
                form,
                verifycode,
                //本地存儲
                saveLoginInfo,
                loginData,
                getLoginInfo,
                
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
            font-size: 1.4rem;
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
                    margin: 0 2rem;
                    img {
                        width: 100%;
                    }
                }
                .btn {
                    span {
                        font-size: 1.4rem;
                        color: $lightText;
                        padding: 1rem;
                    }
                    button {
                        border: 1px solid $darkText;
                        border-radius: 1rem;
                        background-color: transparent;
                        color: $darkText;
                        font-size: 1.6rem;
                        padding: 1rem;
                        cursor: pointer;
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
                            cursor: pointer;
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
            .create-left-content {
                @extend %login-content;
                .photo {
                    position: relative;
                    width: 10rem;
                    height: 10rem;
                    border: 1px solid $lightText;
                    border-radius: 50%;
                    margin-top: 3rem;
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
                    .user {
                        padding: .5rem;
                        @extend %input;
                        position: relative;
                        width: 90%;
                    }
                    .account {
                        padding: .5rem;
                        @extend %input;
                        position: relative;
                        width: 90%;
                    }
                    .password {
                        padding: .5rem;
                        position: relative;
                        @extend %input;
                        width: 90%;
                    }
                    .verify {
                        padding: .5rem;
                        @extend %input;
                        width: 90%;
                        position: relative;
                        .display-verify {
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            p {
                                padding: 1rem;
                                font-size: 1.8rem;
                                border-radius: .5rem;
                                text-align: center;
                                font-weight: bold;
                                margin: 0 1rem;
                            }
                            .recode {
                                color: $darkText;
                                font-size: 2rem;
                                cursor: pointer;
                            }
                        }
                    }
                    .btn {
                        padding: 1rem 1rem 2rem 1rem;
                        margin-top: 1rem;
                        button {
                            padding: 1rem;
                            width: 100%;
                            border-radius: .5rem;
                            font-size: 1.8rem;
                            cursor: pointer;
                        }
                        button:hover {
                            background-color: $lightText;
                        }
                    } 
                }
            }
        }
        .create-right {
            width: 50%;
            height: 100%;
            border-radius: 2rem;
            padding: 1.5rem;
            .create-right-content {
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
                    margin: 0 2rem;
                    img {
                        width: 100%;
                    }
                }
                .btn {
                    span {
                        font-size: 1.4rem;
                        color: $lightText;
                        padding: 1rem;
                    }
                    button {
                        border: 1px solid $darkText;
                        border-radius: 1rem;
                        background-color: transparent;
                        color: $darkText;
                        font-size: 1.6rem;
                        padding: 1rem;
                        cursor: pointer;
                    }
                    button:hover {
                        background-color: $darkText;
                        color: #fff;
                        transition: .5s;
                    }
                }
            }
        }
    }

    .circle-check {
        font-size: 2.5rem;
        color: green;
        position: absolute;
        top: 50%;
        right: -10%;
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
                        margin: 0;
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
        .create{
            .create-left {
                .create-left-content {
                    form {
                        width: 100%;
                        .user {
                            padding: 0 1.5rem;
                        }
                        .account {
                            padding: 0 1.5rem;
                        }
                        .password {
                            padding: 0 1.5rem;
                            input::placeholder {
                                font-size: 1.2rem;
                            }
                        }
                        .verify {
                            padding: 0 1.5rem;
                            .display-verify {
                                p {
                                    font-size: 1.2rem;
                                }
                            }
                        }
                        .btn {
                            padding: 0 1.5rem;
                        } 
                    }
                }
            }
            .create-right {
                .create-right-content {
                    padding: 2rem;
                    .text {
                        p {
                            font-size: 1.4rem;
                        }
                    }
                    .image {
                        margin: 0;
                    }
                    .btn {
                        text-align: center;
                        button {
                            margin-top: 2rem;
                        }
                    }
                }
            }
        }
        .circle-check {
            font-size: 2rem;
            right: -5%;
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
        .create{
            flex-direction: column;
            .create-left {
                width: 100%;
                .create-left-content {
                    form {
                        .user {
                            padding: 0 2rem;
                        }
                        .account {
                            padding: 0 2rem;
                        }
                        .password {
                            padding: 0 2rem;
                            input::placeholder {
                                font-size: 1.4rem;
                            }
                        }
                        .verify {
                            padding: 0 2rem;
                            width: 100%;
                            input::placeholder {
                                font-size: 1.4rem;
                            }
                            .display-verify {
                                p {
                                    font-size: 1.8rem;
                                }
                            }
                        }
                        .btn {
                            padding: 0 1.5rem;
                            margin-bottom: 1rem;
                        } 
                    }
                }
            }
            .create-right {
                width: 100%;
                padding: 0; 
                .create-right-content {
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
        }
    }
    @media(max-width: 450px) {
        
    }

</style>