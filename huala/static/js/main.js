/**
 * Created by Administrator on 2017/5/15 0015.
 */
$(function () {
    var category = new Category();
    category.initStyle();
    category.initEvent();

    var centerArea = new CenterArea();
    centerArea.initStyle();
    centerArea.initEvent();

    var rightArea = new RightArea();
    rightArea.initStyle();
    rightArea.initEvent();

    var isloading = false;
    var sum = 0;
    var $loading = $(".loading-bar");
    var components = ['ms', 'cl', 'eb', 'gl'];
    // 监听页面滚动到底部动态加载更多内容
    $(window).scroll(function () {
        if (isloading || sum > 1) {
            return; // 如果是正在加载 就不要在搞事情了
        }
        if ($(document).scrollTop() + $(window).height() + 200 >= $(document).height()) {
            $loading.show();
            $loading.appendTo($('.body-auto'));
            isloading = true;
            $.ajax({
                url: '/subbody/?key='+components[sum],
                // url: '/subbody/?key=cl',
                dataType: 'html',
                success: function (res) {

                    setTimeout(function () { // 做演示用
                        $(res).appendTo($('.body-auto'));
                        $loading.hide();
                        isloading = false;
                        sum++;
                    }, 800);
                }
            });
        }

    })

});
