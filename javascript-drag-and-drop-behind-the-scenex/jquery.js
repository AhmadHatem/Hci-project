// $( document ).ready(function() {
//     window.onload = function(){
// 			var _startX = 0;			// mouse starting positions
// 			var _startY = 0;
// 			var _offsetX = 0;			// current element offset
// 			var _offsetY = 0;
// 			var _temp;			// will use as tempurarily variable OnMouseDown to OnMouseMove
// 			this.onmousedown = MouseDown;
// 			this.onmouseup = MouseUp;
// 		}

// 		var coordinates = {x_topleft : 1400 , y_topleft : -40 , x_bottomright : 1500 , y_bottomright : -10};
// 		var coordinates2 = {x_topleft : 1320 , y_topleft : 375 , x_bottomright : 1410 , y_bottomright : 410};
// 		var coordinates3 = {x_topleft : 1047 , y_topleft : 327 , x_bottomright : 1097 , y_bottomright : 377};
// 		var treecoordinates =[1140, 303, 1140, 248, 1172, 196, 1233, 154, 1290, 128, 1342, 108, 1408, 118, 1453, 146];
// 		var treecoordinatesfree = [0,0,0,0,0,0,0,0];
// 		var hidden_elements = [];
// 		function MouseDown(e) {

// 			// All browser takes target except IE
// 			var target = e.target != null ? e.target : e.srcElement;
// 			if (target.className == 'dragme') {
// 			// store the mouse position
// 			_startX = e.clientX;
// 			_startY = e.clientY;
	
// 			// store draggable/image object position
// 			_offsetX = parseInt(target.style.left);
// 			_offsetX = null || isNaN(_offsetX) ? 0 : _offsetX;
// 			_offsetY = parseInt(target.style.top);
// 			_offsetY = null || isNaN(_offsetY) ? 0 : _offsetY;
	
// 			// tempurarily store the clicked draggable/image object on mousemove
// 			_temp = target;

// 			// call mousemove function on mousemove event.
// 			window.onmousemove = MouseMove;
// 			return false;
// 			}
			
// 		}

// 		function MouseMove(e) {
// 			if (e == null) 
// 			var e = window.event; 
// 			// replacing dragged location left & top on draggable/image object
// 			_temp.style.left = (_offsetX + e.clientX - _startX) + 'px';
// 			_temp.style.top = (_offsetY + e.clientY - _startY) + 'px';
// 		}

// 		function MouseUp(e) {
// 			if (_temp != null) {
// 				// we'll not capture any location on mouse release, as our dragging is complete now.  
// 				window.onmousemove = null;
// 				var x = _offsetX + e.clientX - _startX;
// 				var y = _offsetY + e.clientY - _startY;
// 				console.log(x+" , "+y);
// 				_temp = null;
// 				if(x > coordinates.x_topleft && x < coordinates.x_bottomright && y > coordinates.y_topleft && y < coordinates.y_bottomright){
// 					console.log("should disappear");
// 					var target = e.target != null ? e.target : e.srcElement;
// 					target.style.visibility = "hidden";
// 					hidden_elements[hidden_elements.length] = target;
// 				}
// 				if(x > coordinates2.x_topleft && x < coordinates2.x_bottomright && y > coordinates2.y_topleft && y < coordinates2.y_bottomright){
// 					console.log("should disappear");
// 					var target = e.target != null ? e.target : e.srcElement;
// 					var j = 0;
// 					for(j = 0; j < treecoordinatesfree.length && treecoordinatesfree[j] == 1; j++){
// 					}
// 					treecoordinatesfree[j] = 1;
// 					j = j*2;
// 					target.style.left = treecoordinates[j]+ 'px';
// 					target.style.top = treecoordinates[j+1] + 'px';
					

// 				}
// 				if(x > coordinates3.x_topleft && x < coordinates3.x_bottomright && y > coordinates3.y_topleft && y < coordinates3.y_bottomright){
// 					var target = e.target != null ? e.target : e.srcElement;
// 					// target.style.visibility = "hidden";
// 					var copy = target;
// 					copy.style.top = 369;
// 					copy.style.left = 969;
// 					console.log(copy);
// 					var body = document.getElementsByTagName("BODY");
// 					// var bodyHtml = body.innerHTML;
// 					// bodyHtml += copy.innerHTML;
// 					// body.innerHTML = bodyHtml; 
// 					// body.appendChild();
// 					console.log(body.toString());
// 					hidden_elements[hidden_elements.length] = target;
// 				}
// 			}
// 			else{
				
// 					var x = _offsetX + e.clientX - _startX;
// 					var y = _offsetY + e.clientY - _startY;
// 					if(x > coordinates.x_topleft && x < coordinates.x_bottomright && y > coordinates.y_topleft && y < coordinates.y_bottomright){
// 						hidden_elements.pop().style.visibility = "visible";
// 					}
// 			}
// 		}
// });