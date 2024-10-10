// pages/5-1/5-1.js
const db = wx.cloud.database();
const app = getApp(); // 获取全局应用实例

Page({
  data: {
    dataobj: undefined
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