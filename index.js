var bt = document.getElementById('button');
document.getElementById('form').style.height = 'auto';
bt.onclick = function () {
	var inp = document.getElementById('input').value;
	var url = 'https://api.github.com/users/' + inp;
	request(url);
	console.log(url);
	}

	function request(url) {
		var xhr = new XMLHttpRequest();
		xhr.open('GET' , url, true);
		xhr.send();
		xhr.onreadystatechange = function () {
        if(xhr.readyState === 4 && xhr.status === 200) {
           var obj = JSON.parse(xhr.response);
           var img = obj.avatar_url;
			var repos = obj.public_repos;
			var data = obj.created_at;

			display(img,repos,data);
        }
    }
	
	}


	function display(img,repos,data) {
		document.getElementById('imege').innerHTML = 'Фото профиля'+ '<br>'+'<img src="'+ img +'">';
		document.getElementById('Data').innerHTML = 'Дата регистрации :'+ data;
		document.getElementById('reposit').innerHTML = 'Количество Репоз :'+ repos;
	}