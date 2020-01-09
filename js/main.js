//Key Bindings

document.addEventListener("keyup",function(e){
	var key = e.which||e.keyCode;
	switch(key){
	// 1
	case 49:
        window.location.href = "index";
	break;
	//2
	case 50:
        window.location.href = "about";
	break;
	//3
	//case 51:
		//window.location.href = "process";
	//break;
	//4
	case 52:
        window.location.href = "resources";
	break;
	//5
	//case 53:
        //window.location.href = "shop";
	break;
	}
});