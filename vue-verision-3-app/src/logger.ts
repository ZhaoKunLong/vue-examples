import { app } from './main'

app.config.errorHandler = (err) => {
    // handle all the components error
    console.error(err)
    /* 处理错误 */
}