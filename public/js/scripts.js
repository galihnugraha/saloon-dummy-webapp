include("js/jquery.color.js");
include("js/jquery.backgroundpos.js");
include("js/jquery.easing.js");
include("js/jquery.mousewheel.js");
include("js/jquery.fancybox-1.3.4.pack.js");
include("js/googleMap.js");
include("js/superfish.js");
include("js/switcher.js");
include("js/bgStretch.js");
include("js/sImg.js");
include("js/MathUtils.js");
include("js/jquery.cycle.all.min.js");
include("js/forms.js");

function include(url) {
    document.write('<script src="' + url + '"></script>');
}
var MSIE = false,
    content, defColor, mh = 0, h = 0, defMh = 0;



$(document).ready(ON_READY);
$(window).load(ON_LOAD);

function ON_READY() {
    
//-------------slider gall--------------------*/   

	$('.list2>li a').attr('rel','appendix')
    .prepend('<span class="sitem_over"><strong></strong></span>')
    $('.list2>li a').fancybox({
        'transitionIn': 'elastic',
    	'transitionOut': 'elastic',
    	'speedIn': 500,
    	'speedOut': 300,
        'centerOnScroll': true,
        'overlayColor': '#000'
    });
    
	$('.list2>li a')
    .find('strong').css('top','-200px').end()
    .hover(
        function(){
            if (!MSIE){
                $(this).children('.sitem_over').css({display:'block','opacity':'0'}).stop().animate({'opacity':1}).end() 
                .find('strong').css({'opacity':0}).stop().animate({'opacity':1,'top':'0'},240,'easeOutCubic');
            } else { 
                $(this).children('.sitem_over').css({display:'block','opacity':'1'}).stop().animate({'opacity':1}).end() 
                .find('strong').css({'opacity':1}).stop().animate({'opacity':1,'top':'0'},240,'easeOutCubic');
            }
        },
        function(){
            if (!MSIE){
                $(this).children('.sitem_over').stop().animate({'opacity':0},700,'easeOutQuad',function(){$(this).children('.sitem_over').css({display:'none'})}).end()  
                .find('strong').stop().animate({'opacity':0,'top':'200px'},400,'easeInQuad').delay().animate({'top':'-200'},0);  
            } else {
                $(this).children('.sitem_over').stop().animate({'opacity':1},700,'easeOutQuad',function(){$(this).children('.sitem_over').css({display:'none'})}).end()  
                .find('strong').stop().animate({'opacity':1,'top':'200px'},400,'easeInQuad').delay().animate({'top':'-200'},0);  
            }            
        }
    );

    if ($(".slider").length) {
        $('.slider').cycle({
            fx: 'scrollHorz',
            speed: 600,
    		timeout: 0,
            next: '.next',
    		prev: '.prev',                
    		easing: 'easeInOutExpo',
    		cleartypeNoBg: true ,
            rev:0,
            startingSlide: 0,
            wrap: true
  		})
    };
    var ind = 0;
    var len = $('.nav_item').length;
    $('.nav_item').bind('click',function(){
        ind = $(this).index();
        $('.nav_item').each(function(index,elem){if (index!=(ind)){$(this).removeClass('active');}});
        $(this).addClass('active');
        $('.slider').cycle(ind);
    });
    
//---------BgStretch-------------------------
    $('#bgStretch').bgStretch({
    	   align:'leftTop',
           navs:$('.pagin').navs({'autoPlay':999999999})
        })
        .sImg({
            sleep: 1000,
            spinner:$('<div class="spinner spinner_bg"></div>').css({opacity:.7}).stop().hide(3000)
        });
        var img=0;
        var num=$('.pagin li').length-1;
        $('.prev').click(function(){
            img=img-1;
    		if (img<0) img=img+num+1;
    		$.when($('#bgStretch img')).then(function(){
    			$('.pagin li a').eq(img).click();
    		})
        	return false
    	});
    	$('.next').click(function(){
    		img=img+1;
    		if (img>num) img=img-num-1;
    		$.when($('#bgStretch img')).then(function(){
    			$('.pagin li a').eq(img).click();
    		})
            return false
    	});
        $('.pause').toggle(
            function(){
                $(this).addClass('play');
                $('#bgStretch').bgStretch({
            	   navs:$('.pagin').navs({autoPlay:999999999})
                })
                return false
    	    },
            function(){
                $(this).removeClass('play');
                $('#bgStretch').bgStretch({
            	   navs:$('.pagin').navs({'autoPlay':999999999})
                })
                return false
    	    }
        );
    
/*SUPERFISH MENU*/   
    $('.menu #menu').superfish({
	   delay: 400,
	   animation: {
	       height: 'show'
	   },
       speed: 'fast',
       autoArrows: false,
       dropShadows: false
    });
    
//start anomation---------------------------------------------------------
        $('header').css({top:-150})
        $('footer').css({bottom:-180})   	
    	$('header').stop().delay(250).animate({top:0}, 650, 'easeOutExpo')
    	$('footer').stop().delay(400).animate({bottom:0}, 650, 'easeOutExpo')        
}

function ON_LOAD(){
    
    MSIE = ($.browser.msie) && ($.browser.version <= 8);
    $('.spinner').fadeOut();
            
    mh = parseInt($('body').css('minHeight'));
    defMh = mh;  
    
//Form---------------------------------------------------------
    $('#form1').forms({
 	     ownerEmail:'#'
 	     })             
//link1-----------------------------------------
    	$('.link1').hover(function(){
    		$(this).stop().animate({color:"#771617"}, 250, "easeOutCubic")						 
    	}, function(){
    		$(this).stop().animate({color:"#FFF"}, 250, "easeOutCubic")				 
    	})
//link2-----------------------------------------
    	$('.link2').hover(function(){
    		$(this).stop().animate({color:"#ad0f11"}, 250, "easeOutCubic")						 
    	}, function(){
    		$(this).stop().animate({color:"#525254"}, 250, "easeOutCubic")				 
    	})
//privacytxt-----------------------------------------
    	$('.privacytxt').hover(function(){
    		$(this).stop().animate({color:"#ad0f11"}, 250, "easeOutCubic")						 
    	}, function(){
    		$(this).stop().animate({color:"#5a5a5c"}, 250, "easeOutCubic")				 
    	})
//contact text-----------------------------------------
    	$('.contactText_2').hover(function(){
    		$(this).stop().animate({color:"#ad0f11"}, 650, "easeOutExpo")						 
    	}, function(){
    		$(this).stop().animate({color:"#5a5a5c"}, 650, "easeOutExpo")				 
    	})
//list3-----------------------------------------
    	$('.list3 > li').hover(function(){
    		$(this).find('a span').stop().animate({height:'10px', width:'10px', top:'4px'}, 300, "easeOutCubic")
    		$(this).find('a').stop().animate({color:'#FFF'}, 150, "easeOutCubic")						 
    	}, function(){
    		$(this).find('a span').stop().animate({height:'4px', width:'4px', top:'8px'}, 300, "easeOutCubic")
    		$(this).find('a').stop().animate({color:'#5a5a5c'}, 150, "easeOutCubic")					 
    	})
//list1a----------------------------------------
    	$('.list1 a').hover(function(){
    		$(this).stop().animate({color:"#ad0f11"}, 250, "easeOutCubic")						 
    	}, function(){
    		$(this).stop().animate({color:"#FFF"}, 250, "easeOutCubic")				 
    	})
    
//follow icons---------------------------------------------------------
        $('#follow-icon .img_act').css({opacity:0})
    	
    	$('#follow-icon a').hover(function(){
    		$(this).find('.img_act').stop().animate({opacity:1})
    		$(this).find('p').stop().animate({color:"#71b0fd"},250)							 
    	}, function(){
    		$(this).find('.img_act').stop().animate({opacity:0}) 	
    		$(this).find('p').stop().animate({color:"#8c8c8c"},250)					 
    	})
      
//Contactlink----------------------------------------
    	$('.contactText_1').hover(function(){
    		$(this).stop().animate({color:"#d0291f"}, 250, "easeOutCubic")						 
    	}, function(){
    		$(this).stop().animate({color:"#FFF"}, 250, "easeOutCubic")				 
    	})
        
//content switch
    content = $('#content');
    content.tabs({
        show:0,
        preFu:function(_){
            _.li.css({'display':'none'});		
        },
        actFu:function(_){          
            
            if(_.curr){
                h = parseInt( _.curr.outerHeight());
                content.children('ul').css({'height':h});
                
                
			 if(_.curr.index() == 0){
			     $('#bgControls> .next').stop().animate({right:70}, 650, 'easeInOutExpo');
			     $('#bgControls> .prev').stop().animate({left:70}, 650, 'easeInOutExpo');
			 }else{
			     $('#bgControls> .next').stop().animate({right:-70}, 450, 'easeInOutExpo');
			     $('#bgControls> .prev').stop().animate({left:-70}, 450, 'easeInOutExpo');
             }
                
                if (_.n == 0){
                    setTimeout(function (){
                        $(window).trigger('resize');
                    },900);
                } else {
                    $(window).trigger('resize');
                }
                                
                _.curr
                    .css({'left':'-2000px','display':'block'}).stop(true).delay(100).show().animate({'left':'80px'},{duration:700,easing:'easeOutExpo'});
            }   
    		if(_.prev){
  		        _.prev
                    .show().stop(true).animate({'left':'2000px'},{duration:600,easing:'easeInOutExpo',complete:function(){
                            if (_.prev){
                                _.prev.css({'display':'none'});
                            }
                        }
		              });
            }      
                  
  		}
    });
    defColor = $('#menu>li>a').eq(0).css('color'); 
    var nav = $('.menu');
    nav.navs({
		useHash:true,
        defHash: '#!/page_home',
        hoverIn:function(li){
            $('>a', li).stop().animate({height:"120px",color: '#fff'},100);
            if (!MSIE) {
                $('>strong',li).stop().animate({'height':'208px'},350,'easeOutExpo');
                $('>span',li).stop().animate({'top':'80px'},550,'easeOutExpo');
            } else {
                $('>strong',li).stop().animate({'height':'208px'},350,'easeOutExpo');
                $('>span',li).stop().animate({'top':'80px'},550,'easeOutExpo');
            }
        },
        hoverOut:function(li){
            if ((!li.hasClass('with_ul')) || (!li.hasClass('sfHover'))) {
                $('> a', li).stop().animate({height:"40px",color: "#FFF"},100);
                if (!MSIE) {
                    $('>strong',li).stop().animate({'height':'0'},500,'easeInExpo');
                    $('>span',li).stop().animate({'top':'-60px'},350,'easeInExpo');
                } else {
                    $('>strong',li).stop().animate({'height':'0'},500,'easeInExpo');
                    $('>span',li).stop().animate({'top':'-60px'},350,'easeInExpo');
                }
            }
        }
    })
    .navs(function(n){	
   	    $('#content').tabs(n);
   	});
    
    setTimeout(function(){  $('body').css({'overflow':'visible'}); },300);    
    
    $(window).trigger('resize');
}

$(window).resize(function (){
    if (content) {
        var newMinH = h + 508;
        if (defMh > newMinH) {
            newMinH = defMh;
        }
        //console.log(newMinH)
        $('body').stop().animate({'minHeight':newMinH},800)
    }
}); 