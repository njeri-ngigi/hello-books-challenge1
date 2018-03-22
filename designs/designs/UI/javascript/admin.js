function addBook(){
		document.getElementById("main").style.display="none";
		document.getElementById("modify").style.display="none";
		document.getElementById("newBook").style.display="block";
	}
	function editBook(){
		document.getElementById("main").style.display="block";
		document.getElementById("newBook").style.display="none";
		document.getElementById("modify").style.display="none";
	}
	function modifyBook(){
		document.getElementById("main").style.display="none";
		document.getElementById("modify").style.display="block";
		document.getElementById("newBook").style.display="none";
	}