// pages/3/3.js
const db = wx.cloud.database();
const app = getApp(); // 获取全局应用实例

Page({
  data: {
    dataobj: undefined
  },
  async updateScoreForIndex_j1() {
    try {
      // 显示加载动画
      wx.showLoading({
        title: '加载中...', // 可以自定义加载中的提示文字
        mask: true // 是否显示透明蒙层，防止触摸穿透
      });
  
      // 查找 index 为 chosen_index 的记录
      const res = await db.collection('demolist').where({ index: app.globalData.chosen_index }).get();
      const data = res.data;
  
      if (data.length === 0) {
        console.log('没有找到 index 为 chosen_index 的数据');
        wx.hideLoading(); // 隐藏加载动画
        return;
      }
  
      const record = data[0];
      const newScore = record.score + 1; // 更新后的 score 值
      
      // 更新记录中的 score 属性
      await db.collection('demolist').doc(record._id).update({
        data: {
          score: newScore
        }
      });
      
      console.log(`更新成功，新的 score 值为：${newScore}`);
      
      // 数据更新成功后隐藏加载动画并跳转
      wx.hideLoading();
      wx.redirectTo({
        url: '../31/31'
      });
    } catch (error) {
      console.error('更新失败:', error);
      wx.hideLoading(); // 如果出错也隐藏加载动画
    }
  },
  async updateScoreForIndex_fu1() {
    try {
      // 显示加载动画
      wx.showLoading({
        title: '加载中...', // 可以自定义加载中的提示文字
        mask: true // 是否显示透明蒙层，防止触摸穿透
      });
  
      // 查找 index 为 chosen_index 的记录
      const res = await db.collection('demolist').where({ index: app.globalData.chosen_index }).get();
      const data = res.data;
  
      if (data.length === 0) {
        console.log('没有找到 index 为 chosen_index 的数据');
        wx.hideLoading(); // 隐藏加载动画
        return;
      }
  
      const record = data[0];
      const newScore = record.score - 1; // 更新后的 score 值
      
      // 更新记录中的 score 属性
      await db.collection('demolist').doc(record._id).update({
        data: {
          score: newScore
        }
      });
      
      console.log(`更新成功，新的 score 值为：${newScore}`);
      
      // 数据更新成功后隐藏加载动画并跳转
      wx.hideLoading();
      wx.redirectTo({
        url: '../42/42'
      });
    } catch (error) {
      console.error('更新失败:', error);
      wx.hideLoading(); // 如果出错也隐藏加载动画
    }
  },
  get_data() {
    const chosenIndex = app.globalData.chosen_index; // 获取 chosen_index
    db.collection("demolist").where({ index: chosenIndex }).get({
      success: res => {
        console.log(res);
        if (res.data.length > 0) {
          this.setData({
            dataobj: res.data[0]
          }, () => {
            console.log(this.data.dataobj);
          });
        } else {
          console.log("没有数据");
        }
      }
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
   this.get_data()

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