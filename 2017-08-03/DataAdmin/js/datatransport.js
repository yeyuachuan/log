/**
 * Created by Administrator on 2017/7/30.
 */
var title = ['ID', '姓名', '性别', '年龄', '成绩', '手机号'];
var data = [
    {
        'Id': 1,
        'Name': 'test',
        'Gender': 'men',
        'Age': '18',
        'Grade': '100',
        'Tel': '18652000000'
    },{
        'Id': 2,
        'Name': 'test',
        'Gender': 'men',
        'Age': '18',
        'Grade': '100',
        'Tel': '18652000000'
    },{
        'Id': 3,
        'Name': 'test',
        'Gender': 'men',
        'Age': '18',
        'Grade': '100',
        'Tel': '18652000000'
    },{
        'Id': 4,
        'Name': 'test3',
        'Gender': 'men',
        'Age': '18',
        'Grade': '100',
        'Tel': '18652000000'
    },	{
        'Id': 5,
        'Name': 'test2',
        'Gender': 'men',
        'Age': '15',
        'Grade': '100',
        'Tel': '18652000000'
    },{
        'Id': 6,
        'Name': 'test1',
        'Gender': 'men',
        'Age': '14',
        'Grade': '1100',		'Tel': '18652000000'
    },    {
        'Id': 7,
        'Name': 'test',
        'Gender': 'men',
        'Age': '18',
        'Grade': '100',
        'Tel': '18652000000'
    },{
        'Id': 8,
        'Name': 'test',
        'Gender': 'men',
        'Age': '18',
        'Grade': '100',
        'Tel': '18652000000'
    },{
        'Id': 9,
        'Name': 'test',
        'Gender': 'men',
        'Age': '18',
        'Grade': '100',
        'Tel': '18652000000'
    },{
        'Id': 10,
        'Name': 'test3',
        'Gender': 'men',
        'Age': '18',
        'Grade': '100',
        'Tel': '18652000000'
    },	{
        'Id':11,
        'Name': 'test2',
        'Gender': 'men',
        'Age': '15',
        'Grade': '100',
        'Tel': '18652000000'
    },{
        'Id': 12,
        'Name': 'test1',
        'Gender': 'men',
        'Age': '14',
        'Grade': '1100',		'Tel': '18652000000'
    },
]
for(var i = 0 ;i<title.length; i++){
    $("table thead").append("<th>"+title[i]+"</th>");
}

$(window).keydown(function (e) {
    if(e.keyCode ==46){
        $("tr.h").remove();
    }
})
$(".delete-btn").click(function(){
    $("tr.h").remove();
})

/*分页*/
$(function () {
    var i ;

    $(".page-ok").click(function () {
        $("tbody").html("");
        var row = data.length;
        var page =$(".page-btn").val();
        for(i =0;i<page;i++){
            tr="<tr><td>"+data[i].Id+"</td><td>"
                +data[i].Name+"</td><td>"
                +data[i].Gender+"</td><td>"
                +data[i].Age+"</td><td>"
                +data[i].Gender+"</td><td>"
                +data[i].Tel+"</td></tr>";
            $("table tbody").append(tr);
        }
        $(".admin-content-bottom-button-child").html("");
        for(i=1;i<Math.ceil(row/page)+1;i++){
            var btn = "<button>"+i+"</button>";
            $(".admin-content-bottom-button-child").append(btn);
        }

        /*按钮点击*/
        $(".admin-content-bottom-button-child button").click(function () {
            var btnValue =$(this).html();
            var currentrow =page*(btnValue-1);
            console.log(currentrow);

            console.log(currentrow+parseInt(page));
            $("tbody").html("");
            for(i =currentrow;i<currentrow+parseInt(page);i++){
                tr="<tr><td>"+data[i].Id+"</td><td>"
                    +data[i].Name+"</td><td>"
                    +data[i].Gender+"</td><td>"
                    +data[i].Age+"</td><td>"
                    +data[i].Gender+"</td><td>"
                    +data[i].Tel+"</td></tr>";
                $("table tbody").append(tr);
            }

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
        
        $(".button-first").click(function () {
            $("tbody").html("");

        })
    })
})


var status =0;
$(".choice-btn").click(function(){
    if(status ==0){
        $("tbody tr").addClass("h");
        status =1;
    }else{
        $("tbody tr").removeClass("h");
        status =0;
    }
})


$(".sort-btn").click(function () {
    $("thead").html("");
    $("tbody").html("");
    if(status == 0){
        status = 1;
        for(var i=0;i<data.length;i++){
            for(var j = i+1 ;j<data.length;j++){
                if(data[i].Id<data[j].Id ){
                    emp = data[j];
                    data[j] = data[i];
                    data[i] = emp;
                }
            }
        }
    }else{
        status = 0;
        var emp ;
        for(var i=0;i<data.length;i++){
            for(var j = i+1 ;j<data.length;j++){
                if(data[i].Id>data[j].Id ){
                    emp = data[j];
                    data[j] = data[i];
                    data[i] = emp;
                }
            }
        }
    }
    for(var i = 0 ;i<title.length; i++){
        $("thead").append("<th>"+title[i]+"</th>");
    }
    for(var i = 0 ;i<data.length; i++){
        var tr = '<tr><td>'+data[i].Id+'</td><td>'
            +data[i].Name+'</td><td>'
            +data[i].Age+'</td><td>'
            +data[i].Gender+'</td><td>'
            +data[i].Grade+'</td><td>'
            +data[i].Tel+'</td></tr>'
        $("tbody").append(tr);
    }

    $(function(){
        $("tbody tr").click(function () {
            var statuss=0;
            if($(this).hasClass("h")){
                $(this).removeClass("h");
            }else{
                $(this).addClass("h");
                statuss=1;
            }
        });
        if(statuss ==1){
            $(".delete-btn").click(function(){
                $("tbody tr.h").remove();
            })
        }
    })
});


$( "tbody" ).sortable();
$( "tbody" ).disableSelection();

/*关键字搜索*/




$(".search-btn input").click(highlight);//点击search时，执行highlight函数；

function highlight()
{
    clearSelection();//先清空一下上次高亮显示的内容；
    var searchText = $(".search-inp input").val();//获取你输入的关键字；
    console.log(searchText);
    var regExp = new RegExp(searchText, 'g');//创建正则表达式，g表示全局的，如果不用g，则查找到第一个就不会继续向下查找了；
    $("tr td").each(function()//遍历文章；
    {
        var html = $(this).html();
        var newHtml = html.replace(regExp, '<span class="highlight">'+searchText+'</span>');//将找到的关键字替换，加上highlight属性；

        $(this).html(newHtml);//更新文章；
    });
    function clearSelection()
    {
        $('tr td').each(function()//遍历
        {
            $(this).find('.highlight').each(function()//找到所有highlight属性的元素；
            {
                $(this).replaceWith($(this).html());//将他们的属性去掉；
            });
        });
    }
}




