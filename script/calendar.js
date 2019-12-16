// function makeVertical(){
// 	// appending to circle the container
// 		// creating a div
// 		// assigning the div to css style
// 		// add to the document
// 	var line = document.getElementsByClassName('vertical');
// 	var container = document.getElementById('container');
// 	container.appendChild(vertical);
// 	// make circle clickable
// 	line.addEventListener('click', makeVertical);
// }
//
// function repeatVertical(){
//   for (i=0; i < 5; i++) {
//     if (i < 5){
//       makeVertical();
//     }
//   }
// }
function createVertical(){
	//create a new element div <div></div> in the html;
	// var vert = document.createElement("vertical");
	// assign rect class style to the div that we added
	// vert.classList.add("vertical");
	// get the container element
	// var container = document.getElementById('vertical');'
	var line = document.createElement('div');
	var parent = document.getElementById('container');
	// line.style.left = 100 + "px";
	// line.style.top = 300 + "px";
	line.style.marginBottom = 300 + "px";
	line.classList.add('vertical');
	parent.appendChild(line);
	// attach to the container to create div
	// container.appendChild("vertical");
}

// make 30 rectangles
for(i = 0;i < 5; i++){
	createVertical();
	console.log(i + " the loop runs");

}
