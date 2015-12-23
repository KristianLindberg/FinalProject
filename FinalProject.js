function setCookie(){
	var loginName = document.getElementById("cookieName").value;
	var loginPW = document.getElementById("cookiePW").value;
	document.cookie = loginName + "=" + loginPW;
	var crumb = document.cookie;
	var crumbArray = crumb.split(";");
		for (i=0; i<crumbArray.length; i++) {
		var nameValueString = crumbArray[i];
		var nameValueArray = nameValueString.split("=");
		crumbName= nameValueArray[0];
		crumbValue= nameValueArray[1];
		};
	
	
	if (crumbName == "Kristian" && crumbValue == "Lindberg"){
		alert("Hello again, " + crumbName + "!");
		document.getElementById("cookieInfo").reset();
		document.getElementById("welcomeLink").style.display= "block";
		for(i=0; i<= document.getElementsByName("cookieArea").length; i++){
			document.getElementsByName("cookieArea")[i].innerHTML= "Welcome " + crumbName;
		};
	}
	else{
		alert(document.cookie);
		document.cookie= nameValueArray[0] + "=" + nameValueArray[1] + ";expires=Thu, 01 Jan 1970 00:00:01 GMT;";
		
		document.getElementById("cookieInfo").reset();

	}
};

function personal(){
	var crumb = document.cookie;
	var crumbArray = crumb.split(";");
	for (i=0; i<crumbArray.length; i++) {
		var nameValueString = crumbArray[i];
		var nameValueArray = nameValueString.split("=");
		crumbName= nameValueArray[0];
		crumbValue= nameValueArray[1];
	};
	for(i=0; i<= document.getElementsByName("cookieArea").length; i++){
			document.getElementsByName("cookieArea")[i].innerHTML= "Welcome " + crumbName;
		};
}

function signOut(){
	alert("Goodbye, " + crumbName +".")
	var crumb = document.cookie;
	var crumbArray = crumb.split(";");
	for (i=0; i<crumbArray.length; i++) {
		var nameValueString = crumbArray[i];
		var nameValueArray = nameValueString.split("=");
		crumbName= nameValueArray[0];
		crumbValue= nameValueArray[1];
	};
	document.cookie= nameValueArray[0] + "=" + nameValueArray[1] + ";expires=Thu, 01 Jan 1970 00:00:01 GMT;";
	window.location= "homepage.html";
}

function holler() {
	var username1 = document.getElementById("username").value;
	var guestbookinput1 = document.getElementById("guestbookinput").value;
	
	if(username1 == "" && guestbookinput1 == ""){
		alert("No name and nothing to say?");
	}
	else if (username1 == ""){
		alert("You have no name?");
	}
	else if(guestbookinput1 == ""){
		alert("Write a message, fool.");
	}
	else{
		document.getElementById("messagearea").innerHTML = Date() + "<br/>" + username1 + "<br/>" + guestbookinput1 + "<br/>" + document.getElementById("messagearea").innerHTML
		document.getElementById("theform").reset();
	}
};

function bioShow() {
	var memdiv = document.memberbio.member;
	
	if (memdiv.options[memdiv.selectedIndex].value== "kristian"){
		document.getElementById("kristianbio").style.display= "block"
		document.getElementById("sambio").style.display= "none"
	}
	else if (memdiv.options[memdiv.selectedIndex].value== "sam"){
		document.getElementById("sambio").style.display= "block"
		document.getElementById("kristianbio").style.display= "none"
	}
	else if (memdiv.options[memdiv.selectedIndex].value== "select"){
		document.getElementById("kristianbio").style.display= "none"
		document.getElementById("sambio").style.display= "none"
	}
};

function emailVald(){
var inputEmail = document.getElementById("userEmail").value;	
	if(inputEmail.match(/^\w+(\.\w+)*@[0-9A-z]+\.[A-z]{2,4}$/)){
		alert("Thanks, we'll be in touch.");
	}
	else{
		alert("Please, enter a valid email.")
	};
};

function myFunction(){
	var spamWin = window.open("sleez.html", "", "width= 300, height= 300").blur();
};







