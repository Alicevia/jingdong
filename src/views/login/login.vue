<template>
  <div class="wrap login">
    <van-image
      round
      class="avatar"
      src="https://img01.yzcdn.cn/vant/cat.jpeg"
    />
    <van-form @submit="onSubmit" ref="form">
      <van-field
        class="input"
        v-model="username"
        placeholder="请输入手机号"
        :rules="[{ required: true, message: '请输入手机号' }]"
      />
      <van-field
        class="input"
        v-model="password"
        type="password"
        placeholder="请输入密码"
        :rules="[{ required: true, message: '请输入密码' }]"
      />
      <div>
        <van-button class="btn" block type="primary" native-type="submit"
          >登录</van-button
        >
      </div>
    </van-form>
    <p class="user-help">
      <router-link class="help register" :to="{ path: '/register' }"
        >立即注册</router-link
      >
      <span class="line">|</span>
      <router-link class="help forget" :to="{ path: '/forget' }"
        >忘记密码</router-link
      >
    </p>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { reqLogin } from '@/api/auth.js'
import useToast from '@/hooks/useToast'
export default {
  components: {},
  name: 'Login',
  setup () {
    const { Toast } = useToast()
    const router = useRouter()
    const loginData = reactive({
      username: '',
      password: ''
    })
    const onSubmit = async () => {
      Toast.loading({ message: '登录中...', forbidClick: true, duration: 0 })
      const [err] = await reqLogin(loginData)
      if (!err) {
        Toast.success({ message: '登录成功' })
        loginData.password = ''
        loginData.username = ''
        localStorage.setItem('isLogin', true)
        router.replace({ path: '/home' })
      } else {
        Toast.fail({ message: '登录失败' })
      }
    }
    return { ...toRefs(loginData), onSubmit }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/variables.scss';
.login {
  margin-top: 144px;
  .avatar {
    width: 66px;
    height: 66px;
    left: 50%;
    margin-bottom: 40px;
    transform: translateX(-50%);
  }
  .input {
    background: #f9f9f9;
    border: 1px solid rgba(0, 0, 0, 0.1);
    min-height: 48px;
    border-radius: 6px;
    margin-bottom: 16px;
  }
  .btn {
    border-radius: 4px;
    background: $btn-bgColor;
    margin-top: 32px;
    box-shadow: 0 4px 8px 0 rgba(0, 145, 255, 0.32);
  }
  .user-help {
    margin-top: 16px;
    color: rgba(0, 0, 0, 0.5);
    text-align: center;
    .line {
      margin: 0 10px;
    }
    .help {
      color: rgba(0, 0, 0, 0.5);
      font-size: 14px;
    }
  }
}
</style>
