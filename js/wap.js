			var fixScreen=(function(){
				var viewW,
					//获取文档中第一个 <html> 元素
					nRem=document.querySelector('html');
				function setWidth(num){
					function fixBind(){
						//获取当前窗口的宽度(包含滚动条)，当浏览器宽度调整时，这个值也会跟着变化
						viewW=window.innerWidth;
						//如果当前窗口宽度>720；则宽度=720；否则宽度=当前宽度
						//当前窗口最大宽度为720！
						viewW>num?viewW=num:viewW=window.innerWidth;
						//设置字体大小
						nRem.style.fontSize=viewW/16+'px';
						
						document.querySelector('body').style.opacity='1'
					}
					window.addEventListener('load',fixBind);
					window.addEventListener('resize',fixBind);
				}
				return{
					setWidth:setWidth
				}
			})()
			//fixScreen.setWidth(720)
			fixScreen.setWidth(480);



	
