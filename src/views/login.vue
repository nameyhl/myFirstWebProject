<template>
    <div class="body">
        <div class="formBody">
            <div class="title">欢迎登录</div>
            <el-form ref="ruleFormRef" style="max-width: 600px" :model="loginInfo" :rules="rules" label-width="auto"
                class="login-ruleForm">
                <el-form-item label="用户名" prop="userName">
                    <el-input v-model="loginInfo.username" placeholder="请输入用户名"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="loginInfo.password" placeholder="请输入密码" show-password></el-input>
                </el-form-item>
                <div style="width: 100%; justify-content: center;display: flex;">
                    <el-button type="primary" style="width: 80%;">登录</el-button>
                </div>
                <div class="footer">
                    还没有账号？去<el-button link style="font-size: 16px;" @click="goRegister">注册</el-button>
                </div>
            </el-form>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

let router = useRouter()
let loginInfo = ref({
    userName: '',
    password: ''
})
const rules = {
    userName: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
    ],
}

const goRegister = () => {
    router.push('/register')
}
</script>

<style lang="scss" scoped>
.body {
    height: 100vh;
    background: url('@/assets/loginBg.jpg') no-repeat;
    background-size: cover;
    display: flex;
    align-content: center;

    .formBody {
        width: 300px;
        margin: auto auto;
        overflow: auto;
        background-color: rgba($color: #fff, $alpha: 0.6);
        padding: 30px;
        border-radius: 10px;
    }

    .title {
        font-size: 25px;
        font-weight: bolder;
        height: 50px;
        line-height: 50px;
        text-align: center;
        margin-bottom: 20px;
    }

    .footer {
        text-align: center;
        margin-top: 20px;
    }

    :deep(.el-form-item__label) {
        color: #000;
    }
}
</style>