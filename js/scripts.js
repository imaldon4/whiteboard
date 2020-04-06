const $ = document.querySelector.bind(document);

// when the user clicks 'save'
$("#save").addEventListener('click', function() {

    // get the filename and data
    const filename = $('#fileonfile').value;
    const data = document.getElementById("loaddata");

    // save
    saveFile(filename, data, function(err) {
        if (err) {
            alert("failed to save: " + filename + "\n" + err);
        } else {
            alert("saved: " + filename);
        }
    });
});

// when the user clicks load
$("#load").addEventListener('click', function() {

    // get the filename
    const filename = $('#fileonfile').value;
    // load
    loadFile(filename, function(err, data) {
        if (err) {
            alert("failed to load: " + filename + "\n" + err);
        } else {
            $("#loaddata").value = data;
            alert("loaded: " + filename);
        }
    });
});

function saveFile(filename, data, callback) {
    doXhr(filename, 'PUT', data, callback);
}

function loadFile(filename, callback) {
    doXhr(filename, 'GET', '', callback);
}

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
