(function(global){
    function remChange(){
        document.documentElement.style.fontSize=20*document.documentElement.clientWidth/750+'px';
    }
    remChange();
    global.addEventListener('resize',remChange,false);
})(window);

$(function () {
    //顶部轮播图跳转链接
    $('#jump1').on('click',function () {
        window.location.href = '';
    });
    $('#jump2').on('click',function () {
        window.location.href = '';
    });
    $('#jump3').on('click',function () {
        window.location.href = '';
    });

    $('#selectCity').on('change',function () {
        var $this = $(this);
        $('.contentText').find('ul').each(function (index,ele) {
            ele.id == $this.val() ? ele.className = 'active' : ele.className = '';
        });
    });

});
