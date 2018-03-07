var list = document.getElementById("list");
var add = document.getElementById("addElem"); 

add.addEventListener('click', function() {
  var element = document.createElement('li');
  element.innerHTML = 'item';
  
  var itemsByTagName = length.getElementsByTagName('li');

    console.log(itemsByTagName);
});