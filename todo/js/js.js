
var val = 6;
document.querySelector('#newitem').addEventListener('keypress', function(e){
    let key = e.which || e.keyCode;
    if(key === 13){
        var ul = document.getElementById('myList');
        var li = document.createElement('li');
        var span = document.createElement('span');
        li.innerHTML = "<input type='checkbox' name='todo' value='" + val + "'/>";
        let item = document.getElementById('newitem').value;
        span.appendChild(document.createTextNode(item));
        li.appendChild(span);
        ul.appendChild(li);
        document.getElementById('newitem').value ='';
        val++;
        li.addEventListener( 'click', function() {

            this.classList.toggle('done');

        });
      

    }
})

var items = document.querySelector("ul").getElementsByTagName("li");

for (var i = 0; i < items.length; i++) {
    items[i].addEventListener( 'click', function() {

        this.classList.toggle('done');

    });
  }
