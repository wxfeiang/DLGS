//  document.getElementById("toastBtn").addEventListener('tap', function () {
//    mui.toast('功能正在开发中!');
//  });
var str = `
    <div class="list_item">

      <div class="l_left">
        <img src="images/people.png" alt="">
      </div>
      <div class="l_right">
        <h3>
          张三丰的策划申请
          <span>
            2019-10-7
          </span>
        </h3>
        <div class="l_conts">
          错那110千伏变电工程
        </div>
        <p>
          计划开始时间：2019-10-10
        </p>
        <p>
          计划结束时间：2019-10-10
        </p>
        <a href="" class="error">
          已退回
        </a>
      </div>

    </div>
  `;
mui('.mui-scroll-wrapper').scroll({
  deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});
mui.init({
  pullRefresh: {
    container: '#pullrefresh',
    down: {
      style: 'circle',
      contentrefresh: '正在刷新更多...',
      callback: pulldownRefresh
    },
    up: {

      contentrefresh: '正在加载更多...',
      callback: pullupRefresh
    }
  }
});
/**
 * 下拉刷新具体业务实现
 */
function pulldownRefresh() {
  setTimeout(function () {
    //  在最前面家上一条
    mui('#pullrefresh').pullRefresh().endPulldownToRefresh();
    mui.toast("为你推荐了5篇文章");
  }, 1500);
}
/**
 * 上啦具体业务实现
 */
var count = 0;

function pullupRefresh() {
  setTimeout(function () {
    // 在最前面家上一条
    mui('#pullrefresh').pullRefresh().endPullupToRefresh((++count > 2)); //参数为true代表没有更多数据了。
    mui.toast("为你加载更多了122篇文章");
  }, 1500);
}
//自定义颜色示例
mui(".mui-progressbar").each(function () {
  mui(this).progressbar({
    progress: this.getAttribute("data-progress")
  }).show();
});