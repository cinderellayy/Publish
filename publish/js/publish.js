	$(function() {
		// 控制遮罩层是否显示
		var $button = $(".button");
		$button.click(function() {
			$(".mask-layer").show();
		})
		// 控制选项卡
		var $div_li = $(".selector ul li");
		$div_li.click(function() {
			$(this).addClass("selected") 
				.siblings().removeClass("selected"); //去掉其它同辈<li>元素的高亮
			var index = $div_li.index(this); 
			$("div.publish-selector > div") 
				.eq(index).show() 
				.siblings().hide(); 
		}).hover(function() {
			$(this).addClass("hover");
		}, function() {
			$(this).removeClass("hover");
		})
		// 控制上传图片
		var $pic = $(".pic");
		$pic.click(function() {
			$("#pictures").show();
		})
		$(".remove-pic").click(function(event) {
			/* Act on the event */
			$("#pictures").hide();
		});
		// 控制上传附件
		var $fil=$(".fil");
			$fil.click(function() {
			$("#files").show();
		})
		$(".remove-file").click(function(event) {
			/* Act on the event */
			$("#files").hide();
		});

})
	// function setImagePreview() {  
	$(".file").change(function(event) {
			/* Act on the event */
	    var imgObjPreview=document.getElementById("preview"); 
        var docObj=document.getElementById("8"); 
        // alert(docObj.length);

        imgObjPreview.src = window.URL.createObjectURL(docObj.files[0]);
        imgObjPreview.style.display = 'block'; 
        imgObjPreview.style.width = '90px'; 
        imgObjPreview.style.height = '90px';
        // imgObjPreview.style.left = '-10px';
        // imgObjPreview.style.top= '-100px';
		if(imgObjPreview.style.display = 'block'){
			$(".file,.plus").hide();
		}
		});
	$(".file1").change(function(event) {
			/* Act on the event */
			 var imgObjPreview=document.getElementById("preview1"); 
        // imgObjPreview.src = "../images/"+url;
        //在这里可以设置大小
        var docObj=document.getElementById("9"); 
        // alert(docObj.length);

        imgObjPreview.src = window.URL.createObjectURL(docObj.files[0]);
        imgObjPreview.style.display = 'block'; 
        imgObjPreview.style.width = '90px'; 
        imgObjPreview.style.height = '90px';
        // imgObjPreview.style.left = '-10px';
        // imgObjPreview.style.top= '-100px';
		if(imgObjPreview.style.display = 'block'){
			$(".file1,.plus1").hide();
		}
	});
	$(".file2").change(function(event) {
			/* Act on the event */
			 var imgObjPreview=document.getElementById("preview2"); 
        // imgObjPreview.src = "../images/"+url;
        //在这里可以设置大小
        var docObj=document.getElementById("10"); 
        // alert(docObj.length);

        imgObjPreview.src = window.URL.createObjectURL(docObj.files[0]);
        imgObjPreview.style.display = 'block'; 
        imgObjPreview.style.width = '90px'; 
        imgObjPreview.style.height = '90px';
        // imgObjPreview.style.left = '-10px';
        // imgObjPreview.style.top= '-100px';
		if(imgObjPreview.style.display = 'block'){
			$(".file2,.plus2").hide();
		}
  });
		$(".file3").change(function(event) {
			/* Act on the event */
			 var imgObjPreview=document.getElementById("preview3"); 
        // imgObjPreview.src = "../images/"+url;
        //在这里可以设置大小
        var docObj=document.getElementById("11"); 
        // alert(docObj.length);

        imgObjPreview.src = window.URL.createObjectURL(docObj.files[0]);
        imgObjPreview.style.display = 'block'; 
        imgObjPreview.style.width = '90px'; 
        imgObjPreview.style.height = '90px';
        // imgObjPreview.style.left = '-10px';
        // imgObjPreview.style.top= '-100px';
		if(imgObjPreview.style.display = 'block'){
			$(".file3,.plus3").hide();
		}
  });