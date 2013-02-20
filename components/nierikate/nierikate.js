var f = new Firebase('https://jjperezaguinaga.firebaseio.com/photo_title');
var oFReader = new FileReader();

oFReader.onload = function (oFREvent) {
  f.set(oFREvent.target.result);
};

document.querySelector('#file-select').addEventListener('click', function(e) {
  document.querySelector('#filereader-files').click();
}, false);

document.querySelector('#filereader-files').onchange = function(e) {
  var files = e.target.files; // FileList
  var file = files[0];
  oFReader.readAsDataURL(file);
};