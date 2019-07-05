function agregar(){
    var mct = document.getElementById("idele");
    var ul = document.getElementById("miul");

    var li = document.createElement("li");
    var texto_li = document.createTextNode(mct.values.split());

    li.appendChild(texto_li);
    ul.appendChild(li);
  }

  