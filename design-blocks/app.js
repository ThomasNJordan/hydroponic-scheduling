var workspace = Blockly.inject('blocklyDiv', {
    toolbox: document.getElementById('toolbox')
});

function sendPostRequest(apiEndpoint) {
    fetch(apiEndpoint, {
        method: 'POST'
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error('There was a problem with the fetch operation:', error));
}