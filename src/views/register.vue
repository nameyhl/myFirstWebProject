<template>
    <div class="body">
        <div class="formBox">
            <div class="title">欢迎注册本平台</div>
            <el-form ref="ruleFormRef" style="max-width: 600px" :model="userInfo" :rules="rules" label-width="auto"
                class="register-ruleForm">
                <el-form-item label="用户名：" prop="userName">
                    <el-input v-model="userInfo.userName"></el-input>
                </el-form-item>
                <el-form-item label="密码：" prop="password">
                    <el-input v-model="userInfo.password"></el-input>
                </el-form-item>
                <el-form-item label="邮箱：" prop="email">
                    <el-input v-model="userInfo.email"></el-input>
                </el-form-item>
                <el-form-item label="电话：" prop="phone">
                    <el-input v-model="userInfo.phone"></el-input>
                </el-form-item>
                <el-form-item label="住址：" prop="address">
                    <el-input v-model="userInfo.address"></el-input>
                </el-form-item>
                <div style="width: 100%; justify-content: center;display: flex;">
                    <el-button type="primary" style="width: 80%;">注册</el-button>
                </div>
            </el-form>
            <div class="footer">
                已有账号，返回<el-button link style="font-size: 16px;" @click="goLogin">登录</el-button>
            </div>
        </div>
    </div>

</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from "vue-router";
const router = useRouter();
// 验证是否为邮箱格式
const validateEmail = (rule, value, callback) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value) {
        callback(new Error('请输入邮箱地址'));
    } else if (!emailRegex.test(value)) {
        callback(new Error('请输入有效的邮箱地址'));
    } else {
        callback();
    }
};
// 自定义电话号码验证规则
const validatePhone = (rule, value, callback) => {
    const phoneRegex = /^1[3-9]\d{9}$/; // 中国大陆手机号正则
    if (!value) {
        callback(new Error('请输入电话号码'));
    } else if (!phoneRegex.test(value)) {
        callback(new Error('请输入有效的电话号码'));
    } else {
        callback();
    }
};
let userInfo = ref({
    userName: '',
    password: '',
    email: '',
    phone: '',
    address: '',
})
const rules = {
    userName: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 8, max: 15, message: '密码长度只能在8-15个字符', trigger: 'blur' },
    ],
    email: [
        { required: true, message: '请输入邮箱', trigger: 'blur' },
        { validator: validateEmail, trigger: 'blur' }
    ],
    phone: [
        { required: true, message: '请输入电话', trigger: 'blur' },
        { validator: validatePhone, trigger: 'blur' }
    ],
    address: [
        { required: true, message: '请输入住址', trigger: 'blur' },
    ],
}
// 返回登录页面
const goLogin = () => {
    router.push('/login')
}
</script>

<style lang="scss" scoped>
.body {
    background: url("@/assets/registerBg.jpg") no-repeat center center;
    background-size: cover;
    height: 100vh;
    display: flex;
    align-content: center;

    .formBox {
        width: 300px;
        margin: auto auto;
        overflow: auto;
        background-color: rgba($color: #fff, $alpha: 0.6);
        padding: 30px;
        border-radius: 10px;

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
    }

    ::v-deep .el-form-item__label {
        color: #000;
        /* 将颜色改为蓝色 */
    }
}
</style>