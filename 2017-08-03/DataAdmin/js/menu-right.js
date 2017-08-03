/**
 * Created by Administrator on 2017/7/29.
 */
$(function(){
    $("tbody tr").click(function () {
        var status=0;
        if($(this).hasClass("h")){
            $(this).removeClass("h");
        }else{
            $(this).addClass("h");
            status=1;
        }
    });
    if(status ==1){
        $(".delete-btn").click(function(){
            $("tbody tr.h").remove();
        })
    }
})