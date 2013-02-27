window.oFReader = new FileReader();
window.selectedFileType = null;

oFReader.onload = function (oFREvent) {
  var f = new Firebase('https://jjperezaguinaga.firebaseio.com/');
  var dataType = f.child(selectedFileType);
  var latest = f.child('latest');
  console.log("Setting latest: "+selectedFileType);
  latest.set(selectedFileType);
  dataType.set(oFREvent.target.result);
};

function loadEventListener(e) {
  selectedFileType = e.target.getAttribute("data-type");
  console.log("Data type recorded:" +selectedFileType);
  document.querySelector('#filereader-files').click();
}

(function() {
	var buttons = document.querySelectorAll('.loadFile');
	for (var i = 0, len = buttons.length; i < len; i++) {
		buttons[i].addEventListener('click', loadEventListener, false);
	}
})()

document.querySelector('#filereader-files').onchange = function(e) {
  var files = e.target.files; // FileList
  var file = files[0];
  oFReader.readAsDataURL(file);
};