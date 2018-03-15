var list = document.getElementById("list");
var add = document.getElementById("addElem"); 

add.addEventListener('click', function() {
  var element = document.createElement('li');

  var x = document.getElementsByTagName('li').length;
  var y = x++;
  element.innerHTML = 'item'+ y; 
  		
  list.appendChild(element);
       
});
