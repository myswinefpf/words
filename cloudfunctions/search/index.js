// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
// 初始化数据库实例
const db = cloud.database()
const words = db.collection('wordsdb')


// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  return await words.where({
    word: event.value
  }).get()
}