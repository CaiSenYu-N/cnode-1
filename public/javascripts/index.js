var tabList = document.querySelectorAll('#tabs .tab')
var topicList = document.querySelectorAll('#topics .topic')

function filterTopics(type) {
	for (var i=0; i<topicList.length; i++) {
		var topic = topicList[i]
		if (type === 'all') {
			topic.style.display = 'block'
		}else if (topic.getAttribute('tab') === type) {
			topic.style.display = 'block'
		} else {
			topic.style.display = 'none'
		}
	}
}

for(var i=0; i<tabList.length; i++) {
	tabList[i].addEventListener('click', function(e) {
		var tab = e.target.parentNode
		var type = tab.getAttribute('tab')
		filterTopics(type)
	})
}

// document.onreadystatechange=function()     //当页面状态改变时执行函数  
// {  
// if(document.readyState == "complete")         //当页面加载状态为完成时执行条件内容  
  
// {   
//   var li = document.getElementsByTagName("li");  //获取页面所有li节点  
//   for(var i=0;i<li.length;i++)                                     //循环li节点  
//   {  
//    li[i].onclick=function(){                                         //为循环的li节点绑定 onclick事件  
//     for(var j=0;j<li.length;j++)  
//     {  
//      li[j].style.backgroundColor="";                  //将所有li背景颜色修改  
//      this.style.backgroundColor="#80bd01";        //将当前点击的li背景颜色修改  
//     }  
//    }  
//   }  
// }  
// }  