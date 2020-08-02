export default {
  changeCity (state, city) {
    state.city = city
    try {
      localStorage.city = city // 创建一个localStorage的变量存储
    } catch (e) {
    }
  }
}
