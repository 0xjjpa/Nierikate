window.oFReader = new FileReader();
window.selectedFileType = null;

oFReader.onload = function (oFREvent) {
  var f = new Firebase('https://jjperezaguinaga.firebaseio.com/'+selectedFileType);
  f.set(oFREvent.target.result);
};

function loadEventListener(e) {
  selectedFileType = e.target.getAttribute("data-type");
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