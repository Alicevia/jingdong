<template>
  <div class="wrap login">
    <van-image
      round
      class="avatar"
      src="https://img01.yzcdn.cn/vant/cat.jpeg"
    />
    <van-form @submit="onSubmit">
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
            <van-field
       class="input"
        v-model="ensurement"
        type="password"
        placeholder="确认密码"
        :rules="[{ required: true, message: '请再次输入密码' }]"
      />
      <div >
        <van-button class="btn" block type="primary" native-type="submit">注册</van-button>
      </div>
    </van-form>
    <p class="user-help">
     <router-link class="help" :to="{path:'/login'}">已有账号去登录</router-link>
    </p>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { reqRegister } from '@/api/auth.js'
import useToast from '@/hooks/useToast'
import { useRouter } from 'vue-router'

export default {
  components: {},
  name: 'Register',
  setup () {
    const { Toast } = useToast()
    const router = useRouter()
    const registerData = reactive({
      username: '',
      password: '',
      ensurement: ''
    })
    const onSubmit = async () => {
      Toast.loading({ message: '', forbidClick: true, duration: 0 })
      const [err] = await reqRegister(registerData)
      if (!err) {
        Toast.success({ message: '注册成功' })
        Object.keys(registerData).forEach(item => {
          registerData[item] = ''
        })
        router.replace({ path: '/login' })
      }
    }
    return { ...toRefs(registerData), onSubmit }
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
  .btn{
    border-radius: 4px;
    background:$btn-bgColor;
    margin-top: 32px;
    box-shadow: 0 4px 8px 0 rgba(0,145,255,0.32);
  }
  .user-help{
    margin-top: 16px;
    color: rgba(0,0,0,0.50);
    text-align: center;
    .line{
      margin: 0 10px;
    }
    .help{
    color: rgba(0,0,0,0.50);
    font-size: 14px;
    }
  }
}
</style>
