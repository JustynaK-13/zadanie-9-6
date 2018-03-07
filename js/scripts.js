var list = document.getElementById("list");
var add = document.getElementById("addElem"); 

add.addEventListener('click', function() {
  var element = document.createElement('li');
  var text = element.innerHTML = 'item';

  /*
	var x = document.getElementsByTagName('item').length

  */
  
  list.appendChild(element);
});