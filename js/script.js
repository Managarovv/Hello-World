// move.onscroll = function () {
// 	// move.style.transitionProperty = "left", "top";
// 	// move.style.transitionDuration = 6+"s";
// 	move.style.left = 250+"px";
// 	move.style.left = 250+"px";
// }

// window.addEventListener('scroll', function() {
// 	move.style.left = pageXOffset +"px";
// 	move.style.top = pageYOffset + "px";
// 	//let scroll = (window.innerHeight/100)/pageYOffset;
// 	let scroll =(pageYOffset * 100)/window.innerHeight;
// 	console.info(scroll);
// 	if(scroll > 40){
// 		divid.style.paddingTop = "5%";
// 		divid.style.paddingBottom = "5%";
// 	}
// 	if (scroll < 40) {
// 		divid.style.paddingTop = "1%";
// 		divid.style.paddingBottom = "1%";
// 	}
// 	// divid.style.paddingTop = pageYOffset/2 + "px";
// 	// divid.style.paddingBottom = pageYOffset/2 + "px";
// });

// }

// async function getFile() {
//   // open file picker
//   const status = document.querySelector('#status');
//   const mapLink = document.querySelector('#map-link');

//   [fileHandle] = await window.showOpenFilePicker();

//   if (fileHandle.type === 'file') {
//    //status.textContent = "file";
//    console.info("file");
//   } else if (fileHandle.type === 'directory') {
//     console.info("file");	
//   }

// }

//document.body.onload = addElement;
	// let newDiv = document.createElement("div");
	// newDiv.innerHTML = "<p>ok</p>";
	//let ki = document.getElementById("sec");
	// document.body.insertBefore(newDiv, ki);
let newDiv = null;
let newButton = null;

let keyboardarrays = {
	ka1: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "backspace"],
	ka2: ["q","w","e","r","t","y","u","i","o","p"],
	ka3: ["caps","a","s","d","f","g","h","j", "k", "l","enter"],
	ka4: ["z","x","c","v","b","n","m",",", ".","?","^","done"],
	ka5: ["space"],

	calladd : function () {
		if (newDiv!=null) return;
		newElement(keyboardarrays.ka1);
		newElement(keyboardarrays.ka2);
		newElement(keyboardarrays.ka3);
		newElement(keyboardarrays.ka4);
		newElement(keyboardarrays.ka5);
	
		sec.classList.add("keyboard-keys","keyboard");
	},

	callrem: function () {
		removeElement(keyboardarrays.ka1);
		removeElement(keyboardarrays.ka2);
		removeElement(keyboardarrays.ka3);
		removeElement(keyboardarrays.ka4);
		removeElement(keyboardarrays.ka5);

		newDiv = newButton = null;
	}
};
 
function newElement(arrays) {
	newDiv = document.createElement("div");
	newDiv.classList.add("keyboard-keys");
	sec.append(newDiv);
	arrays.forEach(function (el) {
		newButton = document.createElement("button")
		newButton.id = el
		newButton.innerHTML = `<p> ${el} </p>` 
		newButton.classList.add("keyboard-key")
		newDiv.append(newButton)
	});
}

function removeElement(arrays) {
	arrays.forEach(function (element) {
		let noderemove = document.getElementById(element) 
		noderemove.remove()
	});
}
function UpperCase(arrays) {
	let ident = null;
	arrays.forEach(function (element) {
		if (element == "caps" || element == "enter" || element == "done") {}
		else{
			ident = document.getElementById(element);
			if(ident.innerHTML != `<p> ${element.toUpperCase()}</p>`){
			ident.innerHTML = `<p> ${element.toUpperCase()}</p>`;
			//console.info("pracye");
			}
			else{
				ident.innerHTML = `<p> ${element.toLowerCase()}</p>`;
			}
		}
	});
}

function addText() {
	if(localStorage.text === undefined) return;
	console.info(localStorage.text);
	ki.innerHTML = localStorage.text;
}

sec.onclick = function targ(event) {
	let target = event.target.closest("button");
	//console.info(target);
	switch(target.id){
		case "backspace":
			ki.innerHTML = ki.innerHTML.slice(0, ki.innerHTML.length - 1);
			break;
		case "caps":
			UpperCase(keyboardarrays.ka2);
			UpperCase(keyboardarrays.ka3);
			UpperCase(keyboardarrays.ka4);
			break;
		case "enter":
			ki.textContent += "\n";
			break;
		case "done":
			break;
		case "space":
			ki.textContent += " ";
			break;
		case "^":
			keyboardarrays.callrem();
			break;

		default:
			ki.textContent += target.textContent[1];
			console.info(target.id);
	}
	localStorage.text = ki.textContent;
}

document.querySelector('#ki').addEventListener('focus', keyboardarrays.calladd);
document.body.onload = addText;