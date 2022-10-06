function calcular(){
   salida = document.getElementById("salida");
   n1 = parseInt(document.getElementById("n1").value);
   n2 = parseInt(document.getElementById("n2").value);
   n3 = n1 + n2;
   salida.innerHTML = n3;
}