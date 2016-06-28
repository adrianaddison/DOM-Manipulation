
document.querySelector("#thanks button").addEventListener('click',function(){
  // TASK #1
  alert('yowch! don\'t click me so hard!');
})

document.querySelector("#double button").addEventListener('click',function(){
  // TASK #2
 	var el = document.getElementById('compoundInvestment');
 	var previous = parseInt(el.textContent)
	el.textContent = previous * 2;
})


document.querySelector("#color-circle button").addEventListener('click',function(){
  // TASK #3
  var el = document.getElementById('circle-bw');
  if (!el.style.backgroundColor || el.style.backgroundColor === 'white') {
  	el.style.backgroundColor = 'black';
	} else {
		el.style.backgroundColor = 'white';
	}
});

document.querySelector("#blow-up button").addEventListener('click',function(){
  // TASK #4}
  var el = document.querySelector('.circle-red');
  if (el.clientWidth === 320 && el.clientHeight === 320) {
  	el.style.width = '40px';
  	el.style.height = '40px';
  } else {
  	el.style.width = el.clientWidth * 2 + 'px';
  	el.style.height = el.clientHeight * 2 + 'px';
  }
  
});

document.querySelector("#remove button").addEventListener('click',function(){
  // TASK #5
  var list = document.querySelectorAll('#userList > li');
  for (var i = 0; i < list.length; i++) {
  	if (list[i].className === 'inactive') {
  		list[i].parentElement.removeChild(list[i]);
  	}
  }
});


document.querySelector("#reverse-squares button").addEventListener('click',function(){
  // TASK #6
  	var square = document.querySelectorAll('.answer-box > span');
	var parent = square[0].parentElement;

  	for (var i = square.length - 1; i >= 0; i--) {
  	parent.appendChild(square[i]);
  }
});

document.querySelector("#pig-latin button").addEventListener('click',function(){
  // TASK #7
  var list = document.querySelectorAll('#tasks > li');
  var result;

  for (var j = 0; j < list.length; j++) {
  	result = '';
  	for (var i = list[j].textContent.length - 1; i >= 0; i--) {
  		result += list[j].textContent[i];
  	}
  	list[j].textContent = result;
  }
  
})

document.querySelector("#cycle-image button").addEventListener('click',function(){
  // TASK #8
  // image source attribute
    var image = document.getElementById('city-img');
    var url = image.getAttribute('src');
    var base = url.slice(0, 35);
    var num = parseInt(url.slice(35));

    image.setAttribute('src', base + ((num + 1) % 10));
  })
 