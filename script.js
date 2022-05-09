window.onload=iniciartabuada;
function iniciartabuada(){

	document.getElementById("botao").addEventListener("click",tabuada);

}
function tabuada(){

	var num = parseInt(document.getElementById("num").value);

	var qtd = parseInt(document.getElementById("qtd").value);

	var tab = document.getElementById("tabuada");

	tab.innerHTML = "";

	for (var i = 1; i <= qtd; i++) {

		res = num * i;

		var tt = "<tr><td>"+num+"</td><td>x</td><td>"+i+"</td><td>=</td><td>"+res+"</td></tr>";

		tab.innerHTML+=tt;

		}
		
	}
	