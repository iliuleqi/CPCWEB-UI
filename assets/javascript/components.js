
Vue.component("column",{
	props:['title'],
	template:"<div class='col'><div class='col-title'>{{title}}</div><div class='col-con'><slot></slot></div></div>",
});

Vue.component("row",{
	props:["name"],
	template:"<div class='row'><div class='key'>{{name}}</div><div class='val'><slot></slot></div></div>",
})
/*
	dateType 1:年月日，2：年月，3：年，4：时-分，5：年月日时分
*/
var template = "<div :class=\"['data-time','sel-input','date',{'name-input':name}]\">";
template+="<span v-if=\"name\">{{name}}</span>";
template+="<input class=\"border link\" type=\"text\" @focus=\"inputFocus\" @blur=\"inputBlur\" @mousedown=\"inputMD\" v-model=\"val\" readonly/>";
template+="<div class=\"sel-date\" v-show=\"show\" tabindex=\"99\" @blur=\"dateBlur\" @mousedown=\"dateMD\">";
template+="<template v-if=\"active!=4\">";
template+="<div class=\"sd-top\">";
template+="<a class=\"a-prev\" @click=\"pnClick(-1)\"></a>";
template+="<a class=\"a-ym\" @click=\"ymClick\">{{top}}</a>";
template+="<a class=\"a-next\" @click=\"pnClick(1)\"></a>";
template+="</div>";
template+="<div class=\"list-day\" v-if=\"active==1||active==5\">";
template+="<div class=\"week\"><span v-for=\"w in week\">{{w}}</span></div>";
template+="<div class=\"days\">";
template+="<a :class=\"['a-day',{active:getDayActive(d)}]\" v-for=\"d in days\" :style=\"{marginLeft:(d==1?DFstyle:'6px')}\" @click=\"dayClick(d)\">{{d}}</a>";
template+="</div>";
template+="</div>";
template+="<div class=\"list-month\" v-else-if=\"active==2\">";
template+="<a :class=\"['a-month',{active:i+1 == month}]\" v-for=\"(m,i) in monthArr\" @click=\"monthClick(i)\">{{m}}</a>";
template+="</div>";
template+="<div :class=\"['list-year',{ly2:active==4}]\" v-else-if=\"active==3\">";
template+="<a :class=\"['a-year',{active:yCloud(y)}]\" v-for=\"y in yearArr\" @click=\"yearClick(y)\">{{y}}</a>";
template+="</div>";
template+="</template>";
template+="<div class=\"hhmm\" v-if=\"dateType==4||active==6\">";
template+="<div class=\"hh\" v-show=\"hms==1\">";
template+="<a v-for=\"a in 24\" :style=\"hhPst(a)\" :class=\"{active:a==parseInt(hhmm[0])}\" @click=\"hhClick(a)\"><span :style=\"hhtRt(a)\">{{a==24?\"00\":a}}</span></a>";
template+="<span class=\"a-line\" :style=\"hhlPst\"></span>";
template+="</div>";
template+="<div class=\"mm\" v-show=\"hms==2\">";
template+="<a v-for=\"a in 59\" :style=\"mmPst(a)\" :class=\"{active:a==parseInt(hhmm[1])}\" @click=\"mmClick(a)\"><span :style=\"mmtRt(a)\">{{a<10?\"0\"+a:a}}</span></a>";
template+="<a :style=\"mmPst(0)\" :class=\"{active:hhmm[1]=='00'}\" @click=\"mmClick(0)\"><span :style=\"mmtRt(0)\">00</span></a>";
template+="<span class=\"a-line\" :style=\"mmlPst\"></span>";
template+="</div>";
template+="</div>";
template+="<div class=\"hmsave\" v-if=\"dateType==4\">";
template+="<span>时:<a @click=\"hms=1\">{{hhmm[0]}}</a></span><span>分:<a @click=\"hms=2\">{{hhmm[1]==60?\"00\":hhmm[1]}}</a></span>";
template+="<a @click=\"mmClick(-1)\">确定</a>";
template+="</div>";
template+="<div class=\"ymdhmsave\" v-if=\"dateType==5\">";
template+="<a @click=\"active=5\">{{year+\"-\"+this.zeroMonth(month.toString())+\"-\"+this.zeroMonth(day.toString())}}</a>";
template+="<a @click=\"active=6;hms=1\">{{hhmm.join(\":\")}}</a>";
template+="<a @click=\"mmClick(-1)\">确定</a>";
template+="</div>";
template+="</div>";
template+="</div>";
Vue.component("leo-date",{
	props:{
		'name':{default:""},
		'selVal':{default:""},
		'selObj':{default:null},
		"selKey":{default:"Id"},
		'dateType':{default:1},
		sdata: Function
	},
	template:template,
	data:function(){
		return{
			val:"",
			show:false,
			evTag:"",
			week:["日","一","二","三","四","五","六"],
			monthArr:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],
			active:parseInt(this.dateType),
			year:0,
			month:0,
			day:0,
			ys:0,
			hhmm:[],
			hms:1,
		}
	},
	computed:{
		objVal:function(){
			return this.selVal?this.selVal:(this.selObj&&this.selKey?this.selObj[this.selKey]:"");
		},
		sp:function(){
			return this.objVal&&this.objVal.toString().indexOf("/")>0?"/":"-";
		},
		top:function(){
			var ysp = (this.year+"").split("");
			if(this.active==1 || this.active==5){
				return this.year +" / "+ this.zeroMonth(this.month.toString());
			}else if(this.active==2){
				return this.year
			}
			else if(this.active==3){
				return this.ys + " - " + (this.ys + 11);
			}
			else if(this.active==4){
				return this.ys + " - " + (this.ys + 119);
			}
		},
		days:function(){
			if([1,3,5,7,8,10,12].indexOf(this.month)>=0)
				return 31;
			else if([4,6,9,11].indexOf(this.month)>=0)
				return 30;
			else{
				if((this.year%4==0&&this.year%100!=0) || this.year%400 ==0 )
					return 29;
				else
					return 28;
			}
		},
		yearArr:function(){
			var	result = new Array(12).fill(0);
			var year = this.ys;
			if(this.active==3){
				result = result.map(function(o,i){
				 	return year+i
				 });
				//result = result.map((o,i)=>this.ys+i);
			}
			else if(this.active==4){
				result = result.map(function(o,i){
					return i*10+year + "-" + (i*10+year+9)
				});
				//result = result.map((o,i)=>i*10+this.ys + "-" + (i*10+this.ys+9))
			}
			return result;

		},
		DFstyle:function(){
			var df = new Date(this.year,this.month-1,1).getDay();
			return 34*df+6+"px";
		},
		hhlPst:function(){
			var hh = parseInt(this.hhmm[0]);
				h12 = hh<13 ? hh : hh-12,
				rt = (h12-1)*30-60,
				w = hh<13 ? 78 : 48;
			return {
				transform:"rotate("+rt+"deg)",
				width:w+"px"
			}
		},
		mmlPst:function(){
			var mm = parseInt(this.hhmm[1]);
				rt = mm*6-90;
			return {
				transform:"rotate("+rt+"deg)"
			}
		}
	},
	methods:{
		inputFocus:function(){
			if(this.evTag!="imd")
				this.show = true;
			else
				this.evTag = "";
		},
		inputMD:function(){
			this.evTag = "imd";
			this.show = !this.show;
		},
		inputBlur:function(){
			if(this.evTag!="lmd")
				this.show = false;
		},
		dateMD:function(){
			this.evTag = "lmd";
		},
		dateBlur:function(){
			this.show = false;
		},
		pnClick:function(i){
			if(this.active<3)
				this.year+=i;
			else if(this.active==3)
				this.ys += i*12;
			else if(this.active==4)
				this.ys += i*120;
		},
		ymClick:function(){
			if(this.active<4)
				this.active += 1;
			if(this.active==3)
				this.ys = this.year - 4;
			else if(this.active==4)
				this.ys = parseInt(this.year.toString().substring(0,3)+"1") - 40;
		},
		monthClick:function(v){
			this.month = v+1;
			if(this.dateType==1){
				this.active=1;
			}
			else{
				this.val = [this.year,this.zeroMonth(this.month.toString())].join(this.sp);
				this.show = false;
			}
		},
		yearClick:function(v){
			if(this.active==3){
				this.year = v;
				if(this.dateType==3){
					this.val = v;
					this.show = false;
				}
				else
					this.active --;
			}
			else{
				this.active --;
				this.ys = parseInt(v.split("-")[0]);
			}
		},
		dayClick:function(d){
			this.day = d;
			if(this.dateType==5){
				this.active ++;
			}
			else{
				this.val = [this.year,this.zeroMonth(this.month.toString()),this.zeroMonth(this.day.toString())].join(this.sp);
				this.show = false;
			}
			this.sdata(this.selKey,this.val)
		},
		getDayActive:function(d){
			var sd = [this.year,this.zeroMonth(this.month.toString()),this.zeroMonth(d.toString())].join(this.sp),
				cv = this.val ? (this.dateType==5 ? this.val.split(" ")[0] : this.val) : this.date();
			return sd == cv;
		},
		yCloud:function(y){
			y += "";
			if(y.indexOf("-").length>0){
				var arr =y.split("-");
				if(parseInt(arr[0])<=this.year&&parseInt(arr[1])>=this.year)
					return true;
				else
					return false;
			}
			else
				return y==this.year;
		},
		date:function(t){
			var date = new Date(),
		    	year = date.getFullYear(),
		    	month = this.zeroMonth((date.getMonth() + 1).toString()),
		    	dd = this.zeroMonth(date.getDate().toString());
		    	hm = this.zeroMonth(date.getHours().toString()) + ":" +this.zeroMonth(date.getMinutes().toString());
				return t==1 ? hm : ([year,month,dd].join(this.sp) + (t==2 ? (" "+hm) : ""));
		},
		hhPst:function(i){
			var h12 = i<13?i:i-12,
				rt = h12*30-90,
				tx = i<13?92:62;
			return {
				transform:"rotate("+rt+"deg) translate("+tx+"px)"
			}
		},
		hhtRt:function(i){
			var h12 = i<13?i:i-12,
				rt = 60-(h12-1)*30;
			return {
				transform:"rotate("+rt+"deg)"
			}
		},
		mmPst:function(i){
			var rt = i*6-90;
			return {
				transform:"rotate("+rt+"deg) translate(82px)"
			}
		},
		mmtRt:function(i){
				rt = 90-i*6;
			return {
				transform:"rotate("+rt+"deg)"
			}
		},
		hhClick:function(a){
			this.hhmm = [(a < 10 ? "0"+a : a),this.hhmm[1]];
			this.hms = 2;
		},
		mmClick:function(a){
			if(a>0)
			this.hhmm[1] = a < 10 ? "0"+a : a;
			this.val = (this.dateType==4 ? "" : [this.year,this.zeroMonth(this.month.toString()),this.zeroMonth(this.day.toString())].join(this.sp) + " ") + this.hhmm.join(":");
			this.show = false;
		},
		setValue:function(){
			var v = "";
			this.hms = 1;
			if(this.dateType==4){ //时、分
				v = this.val || this.date(1);
				this.hhmm = v.split(":");
			}
			else{
				v = this.val || this.date(2);
				var ymd = v;
				if(this.dateType==5){
					ymd = v.split(" ")[0];
					this.hhmm = v.split(" ")[1].split(":");
				}
				var darr = v.toString().split(this.sp);
				this.year = parseInt(darr[0]);
				this.ys = this.year - 4;
				if([1,2,5].includes(this.dateType))
					this.month = parseInt(darr[1]);
				if([1,5].includes(this.dateType))
					this.day = parseInt(darr[2]);
			}
		},
		zeroMonth:function(item){
			if(parseInt(item) < 10){
				return "0"+ parseInt(item)
			}else{
				return item
			}
		}
	},
	watch:{
		show:function(v){
			if(v){
				this.active = this.dateType;
				this.setValue();
			}
		},
		objVal:{
			handler:function(v){
				this.val = v || "";
				this.setValue();
			},
			immediate:true
		},
		val:function(v){
			if(this.selObj&&this.selKey)
				this.selObj[this.selKey] = v;
			this.$emit('change',this.val);
		}
	}
});