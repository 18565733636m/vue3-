/*
 * @Author: '得不偿失' '603384836@qq.com'
 * @Date: 2024-06-02 23:19:28
 * @LastEditors: '得不偿失' '603384836@qq.com'
 * @LastEditTime: 2024-06-02 23:19:43
 * @FilePath: \myVue\src\service.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// server.js
const http = require('http')

http
  .createServer(function (request, response) {
    // 设置响应头
    response.writeHeader(200, {
      'Content-Type': 'text/plain'
    })
    console.log('有访问者')
    // 响应主体为 "Hello world!"
    response.write('Hello world!')
    response.end()
  })
  // 设置监听端口为9000
  .listen(9000)

console.log('请打开：http://localhost:9000')
