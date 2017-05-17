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
    // 监听页面滚动到底部动态加载更多内容
    $(window).scroll(function () {
        // //下面这句主要是获取网页的总高度，主要是考虑兼容性所以把Ie支持的documentElement也写了，这个方法至少支持IE8
        // var htmlHeight = document.body.scrollHeight || document.documentElement.scrollHeight;
        // //clientHeight是网页在浏览器中的可视高度，
        // var clientHeight = document.body.clientHeight || document.documentElement.clientHeight;
        // //scrollTop是浏览器滚动条的top位置，
        // var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        // //通过判断滚动条的top位置与可视网页之和与整个网页的高度是否相等来决定是否加载内容；
        //  console.info("scrollTop == " + scrollTop);
        //  console.info("clientHeight == " + clientHeight);
        //  console.info("htmlHeight == " + htmlHeight);
        // if (scrollTop + clientHeight == htmlHeight) {
        //     console.info("到底部了");
        // }

        if ($(document).scrollTop() + $(window).height() + 200 >= $(document).height()) {
            if(isloading || sum>2){
               return; // 如果是正在加载 就不要在搞事情了
            }
            var $loading = $(".loading-bar");
            $loading.show();
            $loading.appendTo($('.body-auto'));
            isloading = true;
            $.ajax({
                url: '/subbody/?key=ms',
                dataType: 'html',
                success: function (res) {
                     sum ++;
                     isloading = false;
                    setTimeout(function () { // 做演示用
                         $(res).appendTo($('.body-auto'));
                    $loading.hide();

                    },800);

                }
            });
        }

    })

});
