chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.action == "save_chat") {
      let textData = '';
      let chatElements = document.querySelectorAll('main div div div div.group');
      
      chatElements.forEach(function(chatElement) {
        textData += chatElement.innerText + '\n\n---\n\n';
      });

      let file = new Blob([textData], {type: 'text/plain'});
      let fileURL = URL.createObjectURL(file);

      // Prepare the file name by replacing spaces with underscores and removing any special characters
      let fileName = 'chatSaver_' + document.title.replace(/[^a-z0-9]/gi, '_') + '.txt';

      let windowObjectReference = window.open();
      windowObjectReference.document.write('<html><body><a href="'+fileURL+'" download="'+fileName+'">Download Chat</a></body></html>');
    }
  }
);
