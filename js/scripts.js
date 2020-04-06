const $ = document.querySelector.bind(document);

// when the user clicks 'save'
$("#save").addEventListener('click', function() {

    // get the filename and data
    const filename = 'mytext.txt';
    const data = $("#savedata").value;

    // save
    saveFile(filename, data, function(err) {
        if (err) {
            alert("failed to save: " + filename + "\n" + err);
        } else {
            alert("saved: " + filename);
        }
    });
});
