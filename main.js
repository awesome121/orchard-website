
document.querySelector('.top').addEventListener('click', scrollToTop);
function scrollToTop() {
	if (document.body.scrollTop > 0) {
		setTimeout(()=> {document.body.scrollTop -= 10; scrollToTop()}, 1);
	} else if (document.documentElement.scrollTop > 0) {
		setTimeout(()=> {document.documentElement.scrollTop -= 10; scrollToTop()}, 1);
	}
	
}

document.querySelector('.sideBarButton').addEventListener('click', sideBarButtonOnClicked);
function sideBarButtonOnClicked() {
	document.querySelector('body').addEventListener('click', closeSideBar);
	setTimeout(openSideBar, 10);
}

function openSideBar() {
	document.querySelector('body').style.marginLeft = "40%";
	document.querySelector('body').style.backgroundColor = "rgba(0,0,0,0.4)";
	document.querySelector('.nav-bar').style.display = "block";
	document.querySelector('.nav-bar').style.width = "40%";
	document.querySelector('.nav-bar').style.transition = "0.5s";
	document.querySelector('.sideBarButton').style.display = "none";
}

function closeSideBar(event) {
		if (document.querySelector('body').style.marginLeft == "40%"){
			if (event == null) {
				document.querySelector('.nav-bar').style.width = "100%";
			document.querySelector('body').style.marginLeft = "0";
			document.querySelector('body').style.backgroundColor = "#f4f4f4";
			document.querySelector('.nav-bar').style.display = "none";
			document.querySelector('.sideBarButton').style.display = "initial";
			}

			else if(event.clientX > document.querySelector('.nav-bar').offsetWidth) {
			document.querySelector('.nav-bar').style.width = "100%";
			document.querySelector('body').style.marginLeft = "0";
			document.querySelector('body').style.backgroundColor = "#f4f4f4";
			document.querySelector('.nav-bar').style.display = "none";
			document.querySelector('.sideBarButton').style.display = "initial";
			}
		}
}





for (icon of document.getElementsByClassName('changeableIcon')){
	icon.addEventListener('mouseover', hoverOnIcon);
	icon.addEventListener('mouseout', hoverOffIcon);
}

for (nav_item of document.getElementsByClassName('nav_item')) {
	nav_item.addEventListener('mouseover', hoverOnNavItem);
	nav_item.addEventListener('mouseout', hoverOffNavItem);
}

function hoverOnNavItem(event) {
	event.srcElement.style.color = "green";
	try {
		let icon = event.srcElement.getElementsByClassName('changeableIcon')[0];
		let path = icon.src.split('/');
		let srcName = path.slice(-1).toString().split('.');
		icon.src = path.slice(0, -1).join('/')+'/'+srcName[0]+'_color.' + srcName[1];
	} catch (TypeError){

	}
	// console.log(
}

function hoverOffNavItem(event) {
	event.srcElement.style.color = "purple";
	try{
		let icon = event.srcElement.getElementsByClassName('changeableIcon')[0];
		let path = icon.src.split('/');
		let srcName = path.slice(-1).toString().split('.');
		icon.src = path.slice(0, -1).join('/')+'/'+srcName[0].split('_color')[0] + '.' + srcName[1];
	} catch (TypeError){

	}
}

// document.getElementsByClassName('icon')[12]


function hoverOnIcon(event) {
	let path = event.srcElement.src.split('/');
	let srcName = path.slice(-1).toString().split('.');
	event.srcElement.src = path.slice(0, -1).join('/')+'/'+srcName[0]+'_color.' + srcName[1];
	event.srcElement.parentNode.style.color = "green";
	
}


function hoverOffIcon(event) {
	let path = event.srcElement.src.split('/');
	let srcName = path.slice(-1).toString().split('.');
	event.srcElement.src = path.slice(0, -1).join('/')+'/'+srcName[0].split('_color')[0] + '.' + srcName[1];
	event.srcElement.parentNode.style.color = "purple";
}




