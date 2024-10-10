// pages/2/2.js
const db = wx.cloud.database(); // 获取数据库实例
const app = getApp(); // 获取全局应用实例

Page({

    async selectRandomIndexAndSetChosen() {
        // 显示加载动画
        wx.showLoading({
          title: '加载中...', // 加载中的提示文字
          mask: true // 防止触摸穿透
        });
      
        const score_list = []; // 用于存储所有数据的score
        const index_list = []; // 用于存储所有数据的index
        const MAX_LIMIT = 20; // 每次获取数据的最大数量
      
        try {
          // 获取所有数据并存入score_list和index_list
          const total = await db.collection('demolist').count().then(res => res.total);
          const batchTimes = Math.ceil(total / MAX_LIMIT);
      
          const tasks = [];
          for (let i = 0; i < batchTimes; i++) {
            const promise = db.collection('demolist').skip(i * MAX_LIMIT).limit(MAX_LIMIT).get().then(res => {
              res.data.forEach(item => {
                score_list.push(item.score);
                index_list.push(item.index);
              });
            });
            tasks.push(promise);
          }
      
          await Promise.all(tasks); // 等待所有数据请求完成
      
          // 根据score_list中的值生成权重
          const maxScore = 60;
          const weights = score_list.map(score => maxScore - score);
      
          // 计算权重总和
          const totalWeight = weights.reduce((sum, weight) => sum + weight, 0);
      
          // 生成一个介于 0 和 totalWeight 之间的随机数
          const randomWeight = Math.random() * totalWeight;
      
          // 根据随机数选择index
          let cumulativeWeight = 0;
          for (let i = 0; i < weights.length; i++) {
            cumulativeWeight += weights[i];
            if (randomWeight <= cumulativeWeight) {
              // 将选中的 index 赋值给 app.js 中的 chosen_index 变量
              getApp().globalData.chosen_index = index_list[i]; 
              console.log('选中的 index:', index_list[i]);
      
              // 隐藏加载动画
              wx.hideLoading();
      
              // 跳转到 pages/3/3 页面
              wx.redirectTo({
                url: '../3/3'
              });
              return; // 跳转后结束函数
            }
          }
        } catch (error) {
          console.error('获取数据失败:', error);
          // 如果出错也隐藏加载动画
          wx.hideLoading();
        }
      },
      
   
    
 
   
    
  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // selectRandomIndexAndSetChosen()
    // .then(() => {
    //   console.log('index 已成功赋值给 chosen_index');
    // })
    // .catch(err => {
    //   console.error('获取数据失败:', err);
    // });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})