(function($){
	$(function(){
		$('#roate1').Roate({
			R:193,
			cx:296,
			cy:274,
			step:1,
			delay:50
		});
		$('#roate2').Roate({
			R:205,
			R0:81,
			cx:302,
			cy:519,
			direction:false,
			step:1,
			delay:50
		});
		initType('9904');
	})
	
	$.fn.Roate=function(opts){
		var roateInter=null;
		var $this =this;
		opts = $.extend({
			R:100,
			R0:0,
			cx:0,
			cy:0,
			step:5,
			delay:100,
			direction:true,//逆时针或逆时针
			roateItem:'.roate-item'
		},opts||{});

		var width = $this.width();
		var height = $this.height();
		if(!opts.cx){
			opts.cx=width/2;
		}
		if(!opts.cy){
			opts.cy=height/2;
		}
		var $item = $this.find(opts.roateItem);
		var size = $item.size();
		var roate=0;
		opts.R0 = opts.R0==0?opts.R:opts.R0;
		roateInter=setInterval(function(){
			for (var i = 0; i < size; i++) {
				var left = opts.cx+opts.R*Math.sin(Math.PI/180*(roate+360*i/size));
				var top = opts.cy+opts.R0*Math.cos(Math.PI/180*(roate+360*i/size));
				var $roate = $item.eq(i);
				var rheight = $roate.height()/2;
				var rwidth = $roate.width()/2;
				$roate.css({
					left: left-rheight,
					top: top-rwidth
				});
			};
			if(opts.direction){
				roate -= opts.step;
			}else{
				roate += opts.step;
			}
		}, opts.delay);
		this.parent().mousemove(function(event) {
			if(event.offsetX<width/2){
				opts.direction=false;
			}else{
				opts.direction=true;
			}
		});

	};
	window.initType = function(typeCode){
		$('.roate-container').addClass('type'+typeCode);
	}

})(jQuery)


