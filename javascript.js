document.getElementById("btn").addEventListener("click", function(){
  alert('button clicked');
}

function onPageLoads(){
  loadFileFunction();
}

function testReturnText(){
  document.getElementById('textmessage').innerText = 'it works';
}

function saveFileFunction(){
  const fileName = 'mytext.txt';
  const data = document.querySelector("#textmessage").value;

  saveFile(fileName, data, function(err){
    if (err) {
      alert('Failed to save: ' + fileName + '\n' + err);
    } else {
      alert('Saved ' + fileName);
    }
  });
}

function loadFileFunction(){
  const fileName = 'mytext.txt';

  loadFile(fileName, function (err, data){
    if (err) {
      alert('Failed to load: ' + fileName + '\n' + err);
    } else {
      document.querySelector("#textmessage").value = data;
      alert('Loaded ');
    }
  })
}

function saveFile(filename, data, callback) {
    doXhr(filename, 'PUT', data, callback);
}

function loadFile(filename, callback) {
    doXhr(filename, 'GET', '', callback);
}

//helper method
function doXhr(url, method, data, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.onload = function() {
      if (xhr.status === 200) {
          callback(null, xhr.responseText);
      }  else {
          callback('Request failed.  Returned status of ' + xhr.status);
      }
  };
  xhr.send(data);
}
