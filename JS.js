
function whiteStyle(x) {
x.style.color= "lightgreen"
x.style.backgroundColor= "black"
}
	

function reverse(x) {
x.style.color= "black"
x.style.backgroundColor= "tomato"
}
    
	
function showInfo(x) {
/*var subjList = ["BBDD", "SI", "Prog", "ED", "FOL", "LLMM", "LLMMEx", "ProgEx"]
for elements in subjList{
document.getElementById.style.display = "none";	
}*/
document.getElementById(x.attributes["class"].value).style.display = "block";
}
