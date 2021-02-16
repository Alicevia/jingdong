import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css'
import './style/index.scss'
import { Form, Button, Field, Image, Search, Grid, GridItem, Card } from 'vant'

const app = createApp(App).use(store).use(router)
app.use(Form)
app.use(Button)
app.use(Field)
app.use(Image)
app.use(Search)
app.use(Grid)
app.use(GridItem)
app.use(Card)
app.mount('#app')
