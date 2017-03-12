


$(".bigbox li").mouseenter(function(){     
	$(this).children("span").show(300);
    $(this).children("img").css("width","220px");

});
$(".bigbox li").mouseleave(function(){
	$(this).children("span").hide(300);
});

//照片放大
 $(".bigbox li").on("click",function(){
 	$(".guang").show();
 	$(".daimg").addClass("look");
 	$(".daimg .dapic img").attr("src",$(this).find("img").attr("src"));
 	$(".daimg").attr("data-id",$(this).index());
 });
 $(".daimg .guang").on("click",function(){
 	$(".daimg").removeClass("look");
 	$(this).hide();
 });

 var imgs=$(".bigbox li img");
 $(".daimg").on("click",function(e){
 	var index=parseInt($(this).attr("data-id"));
 	if(e.clientX>$(this).outerWidth(true)/2){
 		index+=1;
 	}else{
 		index-=1;
 	}
 	 if(index==imgs.length||index<0){
 		$(".daimg .meipic").css("display","block");

 		setTimeout(function(){
 			$(".daimg .meipic").css("display","none");
 		},2000)
 	}

 	$(".daimg").attr("data-id",index);
 	$(".daimg img").attr("src",imgs.eq(index).attr("src"));
 })
var twopic=[
{img:"img/9.jpg",link:"www.baidu.com"},
{img:"img/10.jpg",link:"www.baidu.com"},

{img:"img/11.jpg",link:"www.baidu.com"},
{img:"img/12.jpg",link:"www.baidu.com"},
{img:"img/13.jpg",link:"www.baidu.com"},
{img:"img/14.jpg",link:"www.baidu.com"},
{img:"img/15.jpg",link:"www.baidu.com"},
{img:"img/16.jpg",link:"www.baidu.com"},

]
$(".change").on("click",function(){
	$(".bigbox li img").attr("src",function(i,old){return twopic[i].img;

	})

	
})