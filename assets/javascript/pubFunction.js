/* 参数配置 */
var msgtime = 2000;//弹窗时间
var openIndex = [];//关窗索引数组
var openIndexWorkbench = [];//关窗索引数组
var openIndexLoad = [];//关窗加载索引数组
var confirmIndex;//确认框关闭索引
var strSpace = '　　';//定义公共的空格
var msgTextLen = 10;//消息长度超出用alert提示
var strPublicity="您有未完成的公示，请先完成！";
var fun = {};

/*----fun.的方法 start------*/
/*
带树结构的人员开窗，可以单选或多选人员 20181115 wz
top.$("#topHidValue").val() 默认加载 已选人员，以“,”分隔
top.$("#topHidTemp").val() 待选人员过滤已存在人员，以“,”分隔，必须“,”结尾
参数：
1.page 当前页面，传入this，必填
2.strType 1，部门-用户、2，部门-党员、3，党组织-党员
3.numIsMyParty 2显示当前人所属党组织及下级所有党组织，其它为全部显示
4.strSingle 2单选，其它为多选
---以下参数可以直接写在方法后---
5.strAllState 2显示全部状态
6.strPartyGuid 显示此GUID下的党组织
7.strIsLabelShow 显示党员标签 2显示，其它为不显示
8.strBack 需要2层以上开窗回调时赋值'back'，进入回调方法CallBack
9.strSqlContent 搜索条件SQL，直接拼接到SQL语句中AND后边，只能查询T_USER_USER U、B1_PARTY_EMPLOYEE E这2张表条件
10.strIsPost 2显示职务人员
11.boolPublicValue strType=3时，true:显示当前级及下级党员，false或空时：显示当前级党员
12.strShowSwitch 是否显示切换图标按钮，2、显示，其他不显示
13.strToTop 默认显示本级及下级，2、显示本级及上级
14.strIsAdmitPartyMembers 2 发展党员（过滤掉 18岁以下，正式党员，发展中的党员）
*/
fun.openWindowOrgUser = function(page,strType,strIsMyParty,strSingle){
	var nWidth = "800px";
	if (strSingle == "2"){
		nWidth = "560px";
	}
	var strText = "";
	var strBack = null;
	if(parseInt(arguments.length) >= 5){
		strText = "&strAllState=" + arguments[4]
	}
	if(parseInt(arguments.length) >= 6){
		strText += "&strPartyGuid=" + arguments[5]
	}
	if(parseInt(arguments.length) >= 7){
		strText += "&strIsLabelShow=" + arguments[6]
	}
	if(parseInt(arguments.length) >= 8){
		strBack = arguments[7]
	}
	if(parseInt(arguments.length) >= 9){
		strText += "&strSqlContent=" + arguments[8]
	}
	if(parseInt(arguments.length) >= 10){
		strText += "&strIsPost=" + arguments[9]
	}
	if(parseInt(arguments.length) >= 11){
		strText += "&boolPublicValue=" + arguments[10]
	} else {
		strText += "&boolPublicValue=" + true
	}
	if(parseInt(arguments.length) >= 12){
		strText += "&strShowSwitch=" + arguments[11]
	}
	if(parseInt(arguments.length) >= 13){
		strText += "&strToTop=" + arguments[12]
	}
	if(parseInt(arguments.length) >= 14){
		strText += "&strIsAdmitPartyMembers=" + arguments[13]
	}
	top.openWindowNew({
	    title: '选择人员',
	    area: [nWidth, '550px'],
	    closeBtn :0,//不显示关闭按钮
	    content: "/"+top.webPath+"/window/selectOrgEmployeeWindowAction.action?strType="+strType+"&strIsMyParty="+strIsMyParty+"&strSingle="+strSingle+strText
	},page,strBack);
}
//带树结构的人员开窗，回调解析函数 返回json格式，例：[{strGuid: "", strUserName: ""}]
fun.callBackOrgUser = function(){
	var val = top.$("#topHidValue").val();
	var objs = eval("(" + val + ")");
	top.$("#topHidValue").val("");
	top.$("#topHidTemp").val("");
	return objs;
}
/*
人员开窗，可以单选或多选人员 20181204 wz
top.$("#topHidValue").val() 默认加载 已选人员，以“,”分隔
top.$("#topHidTemp").val() 不显示人员，以“,”分隔
参数：
1.page 当前页面，传入this，必填
2.strSingle 2单选，其它为多选
3.strIsMyParty 2显示当前人所属党组织，其它为全部显示
4.strOnlyOne 2只显示一级党组织，其它为全部显示
5.strAllState 2显示全部状态
6.strPartyGuid 显示此GUID下的人员
7.strBack 需要2层以上开窗回调时赋值'back'，进入回调方法CallBack
8.strSqlContent 搜索条件SQL，直接拼接到SQL语句中AND后边，只能查询T_USER_USER U、B1_PARTY_EMPLOYEE E这2张表条件
9.strIsPost 2显示职务人员
*/
fun.openWindowUser = function(page){
	var strBack = null;
	var nWidth = "900px";
	var strText = "?strSingle=" + arguments[1];
	if(parseInt(arguments.length) >= 3){
		strText += "&strIsMyParty=" + arguments[2]
	}
	if(parseInt(arguments.length) >= 4){
		strText += "&strOnlyOne=" + arguments[3]
	}
	if(parseInt(arguments.length) >= 5){
		strText += "&strAllState=" + arguments[4]
	}
	if(parseInt(arguments.length) >= 6){
		strText += "&strPartyGuid=" + arguments[5]
	}
	if(parseInt(arguments.length) >= 7){
		strBack = arguments[6]
	}
	if(parseInt(arguments.length) >= 8){
		strText += "&strSqlContent=" + arguments[7]
	}
	if(parseInt(arguments.length) >= 9){
		strText += "&strIsPost=" + arguments[8]
	}
	top.openWindowNew({
	    title: '选择人员',
	    area: [nWidth, '550px'],
	    closeBtn :0,//不显示关闭按钮
	    content: "window/selectEmployeeWindowAction.action"+strText
	},page,strBack);
}

/*人员开窗，通过参数判断开树形结构或者列表结构的窗
1.page 当前页面，传入this，必填
2.isSubordinate 开树形/列表结构窗，true开列表；false开树形结构窗
3.strSingle 2单选，其它为多选 
4.strAllState 2显示全部状态
5.strBack 需要2层以上开窗回调时赋值'back'，进入回调方法CallBack
6.strSqlContent  搜索条件SQL，直接拼接到SQL语句中AND后边，只能查询T_USER_USER U、B1_PARTY_EMPLOYEE E这2张表条件
7.strIsPost 2显示职务人员
*/
fun.openWindowSubordinateUser =function(page,isSubordinate,strSingle,strAllState){
	var strBack = null;
	var strSqlContent ="";
	var strIsPost ="";
	var strIsAdmitPartyMembers = "";
	if(parseInt(arguments.length) >= 5){
		strBack = arguments[4];
	}
	if(parseInt(arguments.length) >= 6){
		strSqlContent = arguments[5];
	}
	if(parseInt(arguments.length) >= 7){
		strIsPost = arguments[6];
	}
	if(parseInt(arguments.length) >= 8){
		strIsAdmitPartyMembers = arguments[7];
	}
	if(isSubordinate){
		fun.openWindowUser(page,strSingle,"2","2",strAllState,"",strBack,strSqlContent,strIsPost); 
	}else{
		fun.openWindowOrgUser(page,"3","2",strSingle,strAllState,"","",strBack,strSqlContent,strIsPost);
	}
}
//人员开窗，回调解析函数 返回json格式，例：[{strGuid: "", strUserName: ""}]
fun.callBackUser = function(){
	var val = top.$("#topHidValue").val();
	var objs = eval("(" + val + ")");
	top.$("#topHidValue").val("");
	top.$("#topHidTemp").val("");
	return objs;
}
/*
默认加载左右人员开窗，可以单选或多选人员  syt 2018/11/20
top.$("#topHidValue").val() 默认加载 已选人员，以“,”分隔。结尾不要带,
top.$("#topHidTemp").val() 默认加载 待选人员，以“,”分隔 。结尾不要带,
参数：
1.page 当前页面，传入this，必填
2.strSingle 2单选，其它为多选
*/
fun.openWindowJsonUser = function(page,strSingle){
	var nWidth = "700px";
	if (strSingle == "2"){
		nWidth = "600px";
	}
	top.openWindowNew({
	    title: '选择人员',
	    area: [nWidth, '500px'],
	    content: "window/selectOrgEmployeeWindowAction!selectJsonUser.action?strSingle="+strSingle
	},page);
}
//关闭日期弹窗控件
fun.closeDateControl = function(){
	try {
		$dp.cal.close();
	} catch($) {}
}
//取cookies函数  
fun.getCookie = function(name){      
	var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
	if(arr != null) return unescape(arr[2]); return null;
}
//删除cookie
fun.delCookie = function(name){
	var exp = new Date();
	exp.setTime(exp.getTime() - 1);
	var cval = fun.getCookie(name);
	if(cval!=null) document.cookie= name + "="+cval+";expires="+exp.toGMTString();
}
//检测ie
fun.isIE = function(){
	if (!!window.ActiveXObject || "ActiveXObject" in window)
		return true;
	else
		return false;
}
/*
tips 提示
参数：
1：吸附元素样式名
2：提示文字
3：提示颜色
4：方向 1上 2右 3下 4左
*/
fun.tips = function(strClass){
	var text = "提示文字";
	var fx = 2;
	var strColor = "#f7a54a";
	if(parseInt(arguments.length) >= 2){
		text = arguments[1]
	}
	if(parseInt(arguments.length) >= 3){
		strColor = arguments[2]
	}
	if(parseInt(arguments.length) >= 4){
		fx = arguments[3]
	}
	$("."+strClass+"").mouseover(function(){
		layer.tips(text, '.'+strClass+'', {
			tips: [fx, strColor]
		});
	});
}
//删除列表某列，参数为第几列（0开始），可以传多列以“,”分隔
fun.delListColumn = function(num){
	if (num.length == 0){
		return;
	}
	var arr = num.toString().split(',');
	for ( var i = 0; i < arr.length; i++) {
		var num = arr[i];
		num = num - i;
		$('#tab tr').find('th:eq('+num+')').remove(); 
		$('#tab tr').find('td:eq('+num+')').remove();
	}
}
fun.pwdEncryption = function(value){
	return ($.md5($.md5(value).toUpperCase() + pubPar.strPwdCode)).toUpperCase();
}
/**
 * [通过参数名获取url中的参数值]
 * 示例URL:http://htmlJsTest/getrequest.html?uid=admin&rid=1&fid=2&name=小明
 * @param  {[string]} queryName [参数名]
 * @return {[string]}           [参数值]
 */
fun.getQueryValue = function(queryName) {
    var query = decodeURI(window.location.search.substring(1));
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == queryName) { return pair[1]; }
    }
    return null;
}
/*-----fun.的方法 end-----*/

/* 关闭当前显示页面 */
function closeTable(){
	$("a.active.J_menuTab").find("i.fa.fa-times").click();
	try{
		$(lastActive).click();
	}catch(e){}
}
/*打开标签页面*/
function openTable(url,name){
	var arr = url.split('menuId');
	var menuId = "";
	if(url.indexOf("openType=program")==-1 && !(url.indexOf("repeat=false")==-1)){
		if (arr.length > 1){
			//解决同一个菜单打开多次问题 20180518 wz
			menuId = arr[1].substr(1,33);
			var arrMenu = $(".page-tabs-content .J_menuTab");
			for ( var i = 0; i < arrMenu.length; i++) {
				var id = $(arrMenu[i]).data('id'); 
				if (id.indexOf(menuId) != -1){
					$(arrMenu[i]).click();
					return; 
				}
			}
		}
	}
	
	var active = $("a.J_menuItem.active");
	lastActive = $("a.active.J_menuTab")[0];
	$("#openTable").attr("href",url).html(name).click();
	active.addClass("active");
}
//弹窗方法
function warningMsg(message,callback,closeIcon){
	try{
		top.hideOfficeOCX();
	}catch(e){}
	if (message.length >= msgTextLen){
		openAlert(message,callback,closeIcon);
		return;
	}

	if(parseInt(arguments.length) == 2){
		
		layer.msg(message, {
		  icon:0,
		  time: msgtime
		}, callback); 
	}else{
		
		layer.msg(message, {
		  icon:0,
		  time: msgtime //（如果不配置，默认是3秒）
		}, function(){
		  //do something
        	try{top.showOfficeOCX();}catch(e){}
		}); 
	}
}
function errorMsg(message,callback){
	try{
		top.hideOfficeOCX();
	}catch(e){}
	if (message.length >= msgTextLen){
		openAlert(message,callback);
		return;
	}
	if(parseInt(arguments.length) == 2){
		layer.msg(message, {
		  icon:0,
		  time: msgtime
		}, callback); 
	}else{
		layer.msg(message, {
		  icon:0,
		  time: msgtime
		}, function(){
			//do something
			try{top.showOfficeOCX();}catch(e){}
		}); 
	}
}
function failMsg(message,callback){
	try{
		top.hideOfficeOCX();
	}catch(e){}
	if (message.length >= msgTextLen){
		openAlert(message,callback);
		return;
	}
	if(parseInt(arguments.length) == 2){
		layer.msg(message, {
		  icon:2,
		  time: msgtime
		}, callback); 
	}else{
		layer.msg(message, {
		  icon:2,
		  time: msgtime
		}, function(){
			//do something
			try{top.showOfficeOCX();}catch(e){}
		}); 
	}
}
function successMsg(message,callback){
	try{
		top.hideOfficeOCX();
	}catch(e){}
	if (message.length >= msgTextLen){
		openAlert(message,callback);
		return;
	}
	if(parseInt(arguments.length) == 2){
		layer.msg(message, {
		  icon:1,
		  time: msgtime
		}, callback); 
	}else{
		layer.msg(message, {
		  icon:1,
		  time: msgtime //（如果不配置，默认是3秒）
		}, function(){
			//do something
			try{top.showOfficeOCX();}catch(e){}
		}); 
	}
}
//弹层
function openWindow(option, callback){
	try{
		top.hideOfficeOCX();
	}catch(e){}
	var defaultOption = $.extend({
		type: 2,
	    shadeClose: false,
	    shade: 0.8,
	    area: ['800px', '90%'],
	    end: function () {
        	if(!top.isOpenIndexClear){
        		top.openIndex.pop();//清除关窗索引
        	}
        	top.isOpenIndexClear = false;//还原
        	try{callback();}catch(e){}
        	try{top.showOfficeOCX();}catch(e){}
        },
        full:function(o){
        	$(".layui-layer-min").remove();
        }
	},option);
	var index = layer.open(defaultOption);
	openIndex.push(index);
	lastActiveIframe = $('.J_iframe:visible')[0];//获取当前选定标签
}
//弹层关闭
function closeWindow(){
	top.isOpenIndexClear = true;
	layer.close(openIndex.pop());
	try{top.showOfficeOCX();}catch(e){}
}
//刷新当前页面
function activeWindowFresh(){
	lastActiveIframe.contentWindow.document.location.reload(true)
}
//加载层
function openLoad(){
	var tempBlockHtml = '<div class="sk-spinner sk-spinner-wave">'
		+'<div class="sk-rect1"></div>'
		+'<div class="sk-rect2"></div>'
		+'<div class="sk-rect3"></div>'
		+'<div class="sk-rect4"></div>'
		+'<div class="sk-rect5"></div>'
		+'</div>'
	var index = layer.load(1, {shade: [0.8, '#393D49'],content:tempBlockHtml});
	openIndexLoad.push(index);
}
function openLoadWorkbench(){
	var tempBlockHtml = '<div class="sk-spinner sk-spinner-wave">'
		+'<div class="sk-rect1"></div>'
		+'<div class="sk-rect2"></div>'
		+'<div class="sk-rect3"></div>'
		+'<div class="sk-rect4"></div>'
		+'<div class="sk-rect5"></div>'
		+'</div>'
		var index = layer.load(1, {shade: [0.8, '#393D49'],content:tempBlockHtml});
	openIndexWorkbench.push(index);
}
//加载层关闭
function closeLoad(){
	layer.close(openIndexLoad.pop());
}
function closeLoadWorkbench(){
	layer.close(openIndexWorkbench.pop());
}
//确认弹窗
function openConfirm(callback,words,btn){
	try{
		top.hideOfficeOCX();
	}catch(e){}
	var defaultWords = words != null ? words : '是否确定删除？';
	var defaultBtn = btn != null ? btn : {btn:['确定','取消']};
	confirmIndex = layer.confirm(defaultWords, defaultBtn, callback, function(){
		try{top.showOfficeOCX();}catch(e){}
	});
	$(".layui-layer-btn0").css("background-color","#b20000");
	$(".layui-layer-btn0").css("border-color","#b20000");
}
//确认弹窗带取消
function openConfirmCancel(callback,words,btn,cancelfun){
	try{
		top.hideOfficeOCX();
	}catch(e){}
	var defaultWords = words != null ? words : '是否确定删除？';
	var defaultBtn = btn != null ? btn : {btn:['确定','取消']};
	confirmIndex = layer.confirm(defaultWords, defaultBtn, callback, cancelfun);
	$(".layui-layer-btn0").css("background-color","#b20000");
	$(".layui-layer-btn0").css("border-color","#b20000");
}

function openConfirmMultiple(callback,words,btn){
	try{
		top.hideOfficeOCX();
	}catch(e){}
	var defaultWords = words != null ? words : '是否确定删除？';
	var defaultBtn = btn != null ? btn : {btn:['确定','取消']};
	confirmIndex = layer.confirm(defaultWords, defaultBtn, callback, function(){
		try{top.showOfficeOCX();}catch(e){}
	});
	$(".layui-layer-btn0").css("background-color","#b20000");
	$(".layui-layer-btn0").css("border-color","#b20000");
	$(".layui-layer-btn1").css("background-color","#b20000");
	$(".layui-layer-btn1").css("border-color","#b20000");
	$(".layui-layer-btn1").css("color","#ffffff");
	$(".layui-layer-btn2").css("background-color","#ffffff");
	$(".layui-layer-btn2").css("border-color","#c0c4cd");	
	$(".layui-layer-btn2").css("color","#404a58");
}
//确认弹窗关闭
function closeConfirm(){
	this.layer.close(this.confirmIndex);
	try{top.showOfficeOCX();}catch(e){}
}
//确认窗口
function openAlert(val,callback,closeIcon){
	layer.alert(val,{
		closeBtn : !closeIcon
		},function(index){
		try {
			callback();
		} catch (e) {
			// TODO: handle exception
		}
		layer.close(index);
	});
}
//跳转到登录页
//将后台清除cookie改为前台清除cookie 20181120 dj
//增加val参数，可以自定义提示内容 20181120 wz
function logout(val){
	if (val == null || val.length == 0){
		val = "登录超时，请重新登录！";
	}else if(val == "otherLogin"){
		val = "您的帐号已在其他设备登录，请重新登录！";
	}else if(val == "error"){
		val = "网络请求异常，请重新登录！";
	}
	warningMsg(val,function(){
		fun.delCookie("cookie_rempwd");
		fun.delCookie("cookie_userpassword");
		location.reload();
	});
}
//ie10滚动条设置
function ie10Resize(){
    var reg = /MSIE 10\.0/;
    var str = navigator.userAgent;
    //判断ie10
    if (reg.test(str)) {
		var doc = $($('.J_iframe:visible')[0].contentWindow.document);
		doc.find("body").width(doc.width()-12);
    };
};
//获取标签点击事件绑定
function getTabClick(){
	$('.page-tabs-content a').unbind("click"); //移除click
	$('.page-tabs-content a').click(function (e) {
		setTimeout("getActiveTab()",100);
	});
}
//首页左边距校验
function checkLeft(){
	var marginLeft = $(".page-tabs-content").css("margin-left");
	if(parseInt(marginLeft)>0){//归零
		$(".page-tabs-content").css("margin-left","0px");
	}
}
//获取选中标签重新定位滚动条
function getActiveTab(){
	var tabs = $('.J_menuTab');
	//删除按钮绑定
	$("a.active.J_menuTab").find("i.fa.fa-times").click(function(){
		$("#a_tabShowActive").click()//重新定位当前按钮
		setTimeout("checkLeft()",700)//首页左边距校验
	});
	for(var i=0 ; i<tabs.length ; i++ ){
		if($(tabs[i]).attr("class").indexOf("active") != -1){
	 		$($('.J_iframe')[i].contentWindow.document).scrollTop($($('.J_iframe')[i].contentWindow.document).scrollTop()-1);
	 		//ie下日历不关闭bug
	 		$($('.J_iframe')[i].contentWindow.document).find("div.WdateDiv").hide();
			return ;
		}
	}
}
//缩放监听 
$(window).resize(function(){
	resizeChosen();
	//方法内容写在各自页面中，如果自己页面需要监听页面变化写内容 20181126 wz
	try {
		resizeOther();
	} catch (e) {
		// TODO: handle exception
	}
});
//chosen缩放适配
function resizeChosen(){
	if(0 == $(".chosen-select").length){
		return;
	}
	try{
		$(".chosen-select").chosen("destroy");
		var nWidth = $(".chosen-select").parent().width();
		if($(".chosen-select").parent().hasClass("chose-display-none")){
			nWidth =  $(".chosen-select").parent().parent().width();
		}
		var param = { 
				no_results_text : "未找到此选项！",
				width : nWidth + "px",
				disable_search_threshold : 5
			} ;
		$(".chosen-select").chosen(param);
	}catch(e){
		
	}
}
//自动关闭用户修改弹层
$(document).click(function(){
	top.$(".dropdown.profile-element.open").removeClass("open");
});
//全局自动关闭通知菜单
$('body :not(:has(.right-sidebar-toggle),.right-sidebar-toggle,#right-sidebar,.sidebar-container,.sidebar-container ul,.sidebar-container ul li,.tab-content,.tab-content ul,.tab-content ul li,.tab-content div,.tab-content span,.tab-content i,.tab-content input,.tab-content button)').click(function(event){
	try{
		//解决点击移动端图标，二维码不隐藏问题
		if (!$(this).hasClass("app_download") && !$(this).hasClass("fa-qrcode") && !$(this).hasClass("dropdown")){
			top.rightAPPNoneAll();
		}
		top.rightSidebarNoneAll();
	}catch(e){}
});

//滚动事件监听(监听的html标签的滚动)
$(window).scroll(function(){
	//关闭日历弹窗
    try {
        $dp.cal.close();
    } catch($) {}
});
//滚动事件监听(监听class中有ibox-content的div中的滚动事件)
$('.ibox-content').scroll(function(){
	//关闭日历弹窗
    try {
        $dp.cal.close();
    } catch($) {}
});
//检查是否为日期时间  
function checkDateTime(str){
	if (str.length != 10 && str.length != 13 && str.length != 16 && str.length != 19){
		return false;
	}
	if (str.length == 10){
		str = str + " 00:00:00";
	}else if (str.length == 13){
		str = str + ":00:00";
	}else if (str.length == 16){
		str = str + ":00";
	}

	var reg = /^(\d+)-(\d{1,2})-(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/;  
	var r = str.match(reg);  
	if(r==null)return false;  
	r[2]=r[2]-1;  
	var d= new Date(r[1], r[2],r[3], r[4],r[5], r[6]);  
	if(d.getFullYear()!=r[1])return false;  
	if(d.getMonth()!=r[2])return false;  
	if(d.getDate()!=r[3])return false;  
	if(d.getHours()!=r[4])return false;  
	if(d.getMinutes()!=r[5])return false;  
	if(d.getSeconds()!=r[6])return false;  
	return true;  
} 

//导出数据
(function($) {
	$.extend($, {
		download: function(url, data, method){
		    // 获得url和data
		    if( url && data ){
		        // data 是 string 或者 array/object
		        data = typeof data == 'string' ? data : jQuery.param(data);
		        // 把参数组装成 form的  input
		        var inputs = '';
		        jQuery.each(data.split('&'), function(){ 
		            var pair = this.split('=');
		            inputs+='<input type="hidden" name="'+ pair[0] +'" value="'+ pair[1] +'" />'; 
		        });
		        // request发送请求
		        jQuery('<form action="'+ url +'" method="'+ (method||'post') +'">'+inputs+'</form>')
		        .appendTo('body').submit().remove();
		    	/*$.post(url,data);*/
		    };
		},
        makeDate: function (str) {
     		if (str.length != 10 && str.length != 13 && str.length != 16 && str.length != 19){
     			return "";
     		}
     		if (str.length == 10){
     			str = str + " 00:00:00";
     		}else if (str.length == 13){
     			str = str + ":00:00";
     		}else if (str.length == 16){
     			str = str + ":00";
     		}
          return str;
        }
	});
}(jQuery));
//对Date的扩展，将 Date 转化为指定格式的String
//月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符， 
//年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字) 
//例子： 
//(new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423 
//(new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18 
Date.prototype.format = function (fmt) { //author: meizz 
	var o = {
		"M+": this.getMonth() + 1, //月份 
		"d+": this.getDate(), //日 
		"h+": this.getHours(), //小时 
		"m+": this.getMinutes(), //分 
		"s+": this.getSeconds(), //秒 
		"q+": Math.floor((this.getMonth() + 3) / 3), //季度 
		"S": this.getMilliseconds() //毫秒 
	};
	if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	for (var k in o)
	if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
	return fmt;
}
/**
 * 弹层
 * option 开窗参数
 * objFrom 当前页面的this
 * args 需要2层以上开窗回调时赋值'back'，回调方法CallBack
 */
fun.arrFrom = [];
function openWindowNew(option, objFrom, args){
    if (arguments.length == 2 || arguments[2] == null || arguments[2] == "")
    	fun.arrFrom = [];
	fun.arrFrom.push(objFrom);
	var defaultOption = $.extend({
		type: 2,
	    shadeClose: false,
	    shade: 0.8,
	    area: ['800px', '90%'],
	    end: function () {
      	if(!top.isOpenIndexClear){
      		openIndex.pop();//清除关窗索引
      	}
      	top.isOpenIndexClear = false;//还原
      },
      full:function(o){
      	$(".layui-layer-min").remove();
      }
	},option);
	var index = this.layer.open(defaultOption);
	this.openIndex.push(index);
	lastActiveIframe = $('.J_iframe:visible')[0];//获取当前选定标签
}
//弹层关闭
function closeWindowNew(reVal){
	top.isOpenIndexClear = true;
	this.layer.close(this.openIndex.pop());
	try {
		if (fun.arrFrom.length > 0) {
			var temp = fun.arrFrom.pop();
			temp.callBack(reVal);
		}
		else {
			fun.arrFrom = [];
		}
	}
	catch (e) {
		fun.arrFrom = [];
	}
}
$(function () {
	//左侧菜单绑定
	$(".J_menuItem").click(function(){
		$(".J_menuItem").removeClass("active");  
		$(this).addClass("active");
		setTimeout("getTabClick()",100);//获取标签点击事件绑定
		setTimeout("getActiveTab()",100);//获取选中标签重新定位滚动条
		//setTimeout("ie10Resize()",100);//ie10滚动条设置
	});
	//监听更多搜索事件
	$('#searchMoreBtn').on('click',function(){
		setTimeout("resizeChosen()",200);
	});
	//批量增加必填项红星
	$(".input-waring label").addClass("required");
	var iboxInput = $('.ibox-content input[type=text]');
	//关闭输入框历史输入记录 20181212
	iboxInput.attr("autocomplete","off");
	//关闭输入框回车功能 20181218
	if(iboxInput.length > 0){
		iboxInput.keypress(function(e){
            if(e.keyCode == 13){
                e.preventDefault();
            }
		});
	}
	//增加样式validator获取光标焦点
	$(".required").each(function(){
		if (!$(this).parent().hasClass("form-group")){
			$(this).parent().addClass("form-group margin0");
		}
	});
	
	//图片丢失，加载默认图片 20190618 wz 去掉
//	if (typeof(top.rootPath) == "undefined"){
//		var arr = window.location.pathname.split("/");
//		if (arr.length > 1)
//			top.rootPath = "/" + arr[1] + "/";
//	}
//	document.addEventListener("error", function (e) {
//		var elem = e.target;
//		if (elem.tagName.toLowerCase() == 'img') {
//			elem.src = top.rootPath + "img/default_img.jpg";
//		}
//	}, true);
	
	initFun();
});
//初始化方法，包括页面加载后与列表加载后使用
//$(function ()、content.ajaxLoad
function initFun(){
	//重新赋值用户帐号别名
	if ($(".userCodeTitle").length > 0 && typeof(top.userCodeTitle) != "undefined" && top.userCodeTitle.length > 0){
		$(".userCodeTitle").text(top.userCodeTitle);
	}
	
}
//复选开窗页面全选复选框
function isCheckAll() {
	checkAll = $('input.checkAll');
	checkboxes = $('input.onecheck');
	if (checkboxes.filter(':checked').length >0 && checkboxes.filter(':checked').length == checkboxes.length) {
		checkAll.prop('checked', 'checked');
	} else {
		checkAll.removeAttr('checked');
	}
	checkAll.iCheck('update');
}

//文本框扩大缩放
//multipleTextarea 为true 将id=“first”改为class=“first” 实现多个文本放大
var tableStyle="";
$('.fa-arrows').click(function(){
	if(typeof(multipleTextarea)!="undefined" && multipleTextarea ){
		if($(this).parent(".generate").next().hasClass("fang")){
			$("tr").show();
			$(this).parents(".first").find("th").show();
			$(this).parent(".generate").next().removeAttr("style");
			$(this).parent(".generate").next().removeClass("fang");
			$(this).parent(".generate").next().prev().children("i").removeClass("fa-compress");
			resizeChosen();
			$(".chosen-search").hide();
			//$("table").css("margin-left","0.5rem");
			$("table").attr("style",tableStyle);
		}else{
			tableStyle=$("table").attr("style");
			$("tr").hide();
			$(this).parents(".first").show();
			$(this).parents(".first").find("th").hide();
	    	$(this).parent(".generate").next().css({"height":"500px","width":"100%","overflow-x":"hidden"});
	    	location.href = "#first";
	    	$(this).parent(".generate").next().addClass("fang");
	    	$(this).parent(".generate").next().prev().children("i").addClass("fa-compress");
	    	$("table").css("margin-left","auto");
		}
	}else{
		if($("textarea").hasClass("fang")){
			$("tr").show();
			$("#first th").show();
			$("textarea").removeAttr("style");
			$("textarea").removeClass("fang");
			$("textarea").prev().children("i").removeClass("fa-compress");
			resizeChosen();
			$(".chosen-search").hide();
			//$("table").css("margin-left","0.5rem");
			$("table").attr("style",tableStyle);
		}else{
			tableStyle=$("table").attr("style");
			$("tr").hide();
			$("#first").show();
			$("#first th").hide();
			$("textarea").css({"height":"500px","width":"100%","overflow-x":"hidden"});
			location.href = "#first";
			$("textarea").addClass("fang");
			$("textarea").prev().children("i").addClass("fa-compress");
			$("table").css("margin-left","auto");
		}
	}
}); 
//textarea 长度限制
function textareaMaxLength(){
	$("textarea").attr("onpropertychange","if(value.length>5000) value=value.substr(0,5000)");
	$("textarea").attr("maxlength","5000");
}
//input 查看页面
function inputUnselect(){
	$("input").attr("unselectable","on");
	$("table").css("margin-left","0.5rem"); //ws20180424增加，表格往左偏移
}
//公共下载附件方法  20180607 ssz
function downLoadFile(fileGuid){
	downloadFileUrl = "/"+top.webPath+"/base/fileInfoAction!downLoadFile.action";
	//post提交方式
    //$.download(downloadFileUrl,"fileInfo.strGuid=" + fileGuid,"post");
	//iframe方式
	var url = downloadFileUrl + "?fileInfo.strGuid=" + fileGuid;
	var exp = new Date();
	exp.setTime(exp.getTime() + 3000);
	document.cookie = "filePower="+ escape (fileGuid+top.userGuid) + ";expires=" + exp.toGMTString()+";path=/"+top.webPath+"/";
	top.$("#downloadFile").attr('src',url);
}
//公共模块加载时的loading
function openLoding(domid){
	var dh=$("#"+domid).height();
	var dw=$("#"+domid).width();
	var lh="<div class=\"lodingimg-div\" style=\"width:"+dw+"px;height:"+dh+"px\" ><img style=\"width: 80px;\" src="+loadingPic+" alt= \"\" /></div>";
	$("#"+domid).html(lh);
}
