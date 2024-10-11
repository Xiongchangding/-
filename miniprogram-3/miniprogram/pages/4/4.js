// pages/4/4.js
const db = wx.cloud.database(); // 获取数据库实例
const app = getApp(); // 获取全局应用实例


Page({
    async updateScoreForIndex_05() {
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
          var newScore = record.score ; // 更新后的 score 值
          //const flag = Math.floor(Math.random() * 10);//生成0到9随机数，用做随机事件的触发条件
          const flag = 1;
          console.log(flag);
          // 更新记录中的 score 属性
          if(record.score>=10&&flag<=1){
            const value = Math.round(Math.random()*100);//生成0到99随机数，用做随机事件分支的判断
            // const value = 1;
            if(value>1){
              newScore = newScore *2;//作为上去总结知识点的奖励
              await db.collection('demolist').doc(record._id).update({
              data: {
                score: newScore
              }
            });
            console.log(`更新成功，新的 score 值为：${newScore}`);
          // 数据更新成功后隐藏加载动画并跳转
          wx.hideLoading();
          wx.redirectTo({
            url: '../71/71'
          });
            }else{
              newScore = 0;//中大奖，积分归零
            await db.collection('demolist').doc(record._id).update({
              data: {
                score: newScore
              }
            });
            console.log(`更新成功，新的 score 值为：${newScore}`);
          // 数据更新成功后隐藏加载动画并跳转
          wx.hideLoading();
          wx.redirectTo({
            url: '../72/72'
          });
            }
          }//进入绝境事件，积分翻倍
          else if(record.score<=-10&&flag<=1){
            newScore = newScore +1;
            await db.collection('demolist').doc(record._id).update({
              data: {
                score: newScore
              }
            });
            console.log(`更新成功，新的 score 值为：${newScore}`);
          // 数据更新成功后隐藏加载动画并跳转
          wx.hideLoading();
          wx.redirectTo({
            url: '../61/6-1'
          });
          }
          else{
            newScore = newScore +0.5;
            await db.collection('demolist').doc(record._id).update({
              data: {
                score: newScore
              }
            });
            console.log(`更新成功，新的 score 值为：${newScore}`);
                      // 数据更新成功后隐藏加载动画并跳转
          wx.hideLoading();
          wx.redirectTo({
            url: '../5-1/5-1'
            
          });
          }

          

        } catch (error) {
          console.error('更新失败:', error);
          wx.hideLoading(); // 如果出错也隐藏加载动画
        }
      },

      async updateScoreForIndex_1() {
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
          var newScore = record.score ; // 更新后的 score 值
          const flag = Math.round(Math.random()*10);//生成0到9的随机数，用做判断随机事件
          console.log(flag);
          // 更新记录中的 score 属性
          if(record.score>=10&&flag<=1){
            const value = Math.round(Math.random()*100);
            if(value>1){
              newScore = newScore *2;//作为上去总结知识点的奖励
              await db.collection('demolist').doc(record._id).update({
              data: {
                score: newScore
              }
            });
            console.log(`更新成功，新的 score 值为：${newScore}`);
          // 数据更新成功后隐藏加载动画并跳转
          wx.hideLoading();
          wx.redirectTo({
            url: '../71/71'
          });
            }else{
              newScore = 0;//中大奖，积分归零
            await db.collection('demolist').doc(record._id).update({
              data: {
                score: newScore
              }
            });
            console.log(`更新成功，新的 score 值为：${newScore}`);
          // 数据更新成功后隐藏加载动画并跳转
          wx.hideLoading();
          wx.redirectTo({
            url: '../72/72'
          });
            }
          }else if(record.score<=-10&&flag<=1){
            newScore = newScore +2;
            await db.collection('demolist').doc(record._id).update({
              data: {
                score: newScore
              }
            });
            console.log(`更新成功，新的 score 值为：${newScore}`);
          // 数据更新成功后隐藏加载动画并跳转
          wx.hideLoading();
          wx.redirectTo({
            url: '../62/62'
          });
          }
          else{
            newScore = newScore +1;
            await db.collection('demolist').doc(record._id).update({
              data: {
                score: newScore
              }
            });
            console.log(`更新成功，新的 score 值为：${newScore}`);
                      // 数据更新成功后隐藏加载动画并跳转
          wx.hideLoading();
          wx.redirectTo({
            url: '../52/52'
          });
          }
          

        } catch (error) {
          console.error('更新失败:', error);
          wx.hideLoading(); // 如果出错也隐藏加载动画
        }
      },
      async updateScoreForIndex_2() {
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
          var newScore = record.score ; // 更新后的 score 值
          const flag = Math.round(Math.random()*10);//生成0到9的随机数，用做判断随机事件
          console.log(flag);
          // 更新记录中的 score 属性
          if(record.score>=10&&flag<=1){
            const value = Math.round(Math.random()*100);
            if(value>1){
              newScore = newScore *2;//作为上去总结知识点的奖励
              await db.collection('demolist').doc(record._id).update({
              data: {
                score: newScore
              }
            });
            console.log(`更新成功，新的 score 值为：${newScore}`);
          // 数据更新成功后隐藏加载动画并跳转
          wx.hideLoading();
          wx.redirectTo({
            url: '../71/71'
          });
            }else{
              newScore = 0;//中大奖，积分归零
            await db.collection('demolist').doc(record._id).update({
              data: {
                score: newScore
              }
            });
            console.log(`更新成功，新的 score 值为：${newScore}`);
          // 数据更新成功后隐藏加载动画并跳转
          wx.hideLoading();
          wx.redirectTo({
            url: '../72/72'
          });
            }
          }else if(record.score<=-10&&flag<=1){
            newScore = newScore +4;
            await db.collection('demolist').doc(record._id).update({
              data: {
                score: newScore
              }
            });
            console.log(`更新成功，新的 score 值为：${newScore}`);
          // 数据更新成功后隐藏加载动画并跳转
          wx.hideLoading();
          wx.redirectTo({
            url: '../63/63'
          });
          }
          else{
            newScore = newScore +2;
            await db.collection('demolist').doc(record._id).update({
              data: {
                score: newScore
              }
            });
            console.log(`更新成功，新的 score 值为：${newScore}`);
                      // 数据更新成功后隐藏加载动画并跳转
          wx.hideLoading();
          wx.redirectTo({
            url: '../53/53'
            
          });
          }
          
        } catch (error) {
          console.error('更新失败:', error);
          wx.hideLoading(); // 如果出错也隐藏加载动画
        }
      },
      async updateScoreForIndex_3() {
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
          var newScore = record.score ; // 更新后的 score 值
          //const flag = Math.round(Math.random());//生成0到9的随机数，用做判断随机事件
          const flag = 1;
          console.log(flag);
          // 更新记录中的 score 属性
          if(record.score>=10&&flag<=1){
            const value = Math.round(Math.random()*100);
            //const value = 1
            if(value>1){
              newScore = newScore *2;//作为上去总结知识点的奖励
              await db.collection('demolist').doc(record._id).update({
              data: {
                score: newScore
              }
            });
            console.log(`更新成功，新的 score 值为：${newScore}`);
          // 数据更新成功后隐藏加载动画并跳转
          wx.hideLoading();
          wx.redirectTo({
            url: '../71/71'
          });
            }else{
              newScore = 0;//中大奖，积分归零
            await db.collection('demolist').doc(record._id).update({
              data: {
                score: newScore
              }
            });
            console.log(`更新成功，新的 score 值为：${newScore}`);
          // 数据更新成功后隐藏加载动画并跳转
          wx.hideLoading();
          wx.redirectTo({
            url: '../72/72'
          });
            }
          }else if(record.score<=-10&&flag<=1){
            newScore =0;
            await db.collection('demolist').doc(record._id).update({
              data: {
                score: newScore
              }
            });
            console.log(`更新成功，新的 score 值为：${newScore}`);
          // 数据更新成功后隐藏加载动画并跳转
          wx.hideLoading();
          wx.redirectTo({
            url: '../64/64'
          });
          }
          else{
            newScore = newScore + 3;
            await db.collection('demolist').doc(record._id).update({
              data: {
                score: newScore
              }
            });
            console.log(`更新成功，新的 score 值为：${newScore}`);
                      // 数据更新成功后隐藏加载动画并跳转
          wx.hideLoading();
          wx.redirectTo({
            url: '../54/54'
            
          });
          }
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
   * 页面的初始数据
   */
  data: {
    dataobj: undefined
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