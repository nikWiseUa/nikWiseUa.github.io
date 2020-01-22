
 let btn = document.querySelector('.btn');
 let tArea = document.querySelector('#tA');
 let inp = document.querySelector('.inp'),
		   inpS = document.querySelector('.inpS'),
		   btnS = document.querySelector('.btnS');
 btnS.addEventListener('click', () => {
 		let tAVal = tArea.value,
			 inpSv = inpS.value,
			 inpSplited = inpSv.split(' '),
			 tAValSpl = tAVal.split(' '),
			 valFirst = tAValSpl.indexOf(inpSplited[0]),
			 valSecond = tAValSpl.indexOf(inpSplited[1]),
			 tASlised = tAValSpl.slice(valFirst, ++valSecond);
 		   console.log(tASlised); 
 		   tArea.value = tASlised.join(' ');
 });
btn.addEventListener('click', () => {
	// console.log(tArea);
	let tAVal = tArea.value,
		 inpVal = inp.value;
	if (tAVal === ''){
		alert('error text not found');
	}else if (inpVal === ''){
		alert('input is clear');
	}else {
		let inpFirst = inpVal.split(' ');
		if (tAVal.includes(inpFirst[0])){
			let re = new RegExp(inpFirst[0] , 'g');
			let tAValNew = tAVal.replace(re, inpFirst[1]);
			console.log(tAValNew);
			tArea.value = tAValNew;
		}else {
			alert('Replaceable word not found');
		}
	}
});

