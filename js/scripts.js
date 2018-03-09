var list = document.getElementById("list");
var add = document.getElementById("addElem"); 

add.addEventListener('click', function() {
  var element = document.createElement('li');

  var i = element.innerHTML = 'item';
  var x = document.getElementsByTagName('li');
  		for (var i = 1; i <= x.length; i++) {
  			x[i]} 
  		

  list.appendChild(element);
       
});
