var loc = localStorage.getItem("newPage");
 var url = 'https://api.github.com/users/' + loc;
 console.log(url);
request(url);


 
 function request(url) {
 	var xhr = new XMLHttpRequest();
 	xhr.open('GET' , url, true);
 	xhr.send();
 	xhr.onreadystatechange = function () {
        if(xhr.readyState === 4 && xhr.status === 200) {
           var obj = JSON.parse(xhr.response);
           console.log(obj);
           var img = obj.avatar_url;
           var name = obj.login;
 		var repos = obj.public_repos;
 		var data = obj.created_at;
 		var followers = obj.followers;
 		var url = obj.html_url;
 		

 		display(img,repos,data,name,followers, url);
        }
   }
	
}



function display(img,repos,data,name,followers,url) {
	document.getElementById('imege').innerHTML = '<img src="'+ img +'">';
	document.getElementById('Data').innerHTML = 'Дата регистрации :'+ data;
	document.getElementById('reposit').innerHTML = 'Количество Репоз :'+ repos;
	document.getElementById('name').innerHTML = 'Name:'+ name;
	document.getElementById('followers').innerHTML = 'Подписки:'+ followers
	document.getElementById("atr").setAttribute("href", url)
}
//Курс валют
var data;
var xh = new XMLHttpRequest();
xh.open('GET' ,' https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5', false);
xh.send();
xh.onereadystatechenge = function() {
if (xh.status == 200 && xh.readyState == 4) {
	data = JSON.parse(xh.response)
	console.log(data);

document.getElementById('buyUSD').innerHTML= data[0].buy;
document.getElementById('sellUSD').innerHTML= data[0].sale;
document.getElementById('buyEUR').innerHTML= data[1].buy;
document.getElementById('sellEUR').innerHTML= data[1].sale;
document.getElementById('buyRUB').innerHTML= data[2].buy;
document.getElementById('sellRUB').innerHTML= data[2].sale;
document.getElementById('buyBTC').innerHTML= data[3].buy;
document.getElementById('sellBTC').innerHTML= data[3].sale;
}

}        	
();
//Часы
function clock() {
 	var date = new Date();
 	var hours = date.getHours();
 	var minutes = date.getMinutes();
 	var second = date.getSeconds();


 	if (hours < 10) {
 		hours = "0" + hours;
 	}
 	if (minutes < 10) {
 		minutes = "0" + minutes;
 	}
 	if (second < 10) {
 		second = "0" + second;
 	}
 	if (hours + ":" + minutes + ":" + second === '00:00:00'){
 		document.getElementById('clock1').style.color = 'blue';
 	}
	var string = hours + ":" + minutes + ":" + second;
 	
 	document.getElementById("clock1").innerHTML = string


}
setInterval(clock, 1000);
clock();

//БаблСорт

var pragrah = document.getElementById('paragraph');
	var pragrahNew = document.getElementById('newParagraph');
	var inputs = document.querySelectorAll("input[type = 'number']");
	var addArr = document.getElementById('addarray');
	var sortArr = document.getElementById('sortArr');
	var a = [];
	addArr.onclick = function(){
		for (var count = 0; count < inputs.length; count++) {
			a.push(parseInt(inputs[count].value));
			console.log(a)
		}
		pragrah.innerHTML = "массив" + a;
	}
	var k;
sortArr.onclick =function(){
	for (var m = 0; m < a.length; m++) {
	for (var i = 0; i < a.length-1; i++) {
		if (a[i] > a[i+1]) {
			k = a[i];
			a[i] = a[i+1];
			a[i+1]=k;
		}
	}
	}
	pragrahNew.innerHTML="Готово" + a;
}
