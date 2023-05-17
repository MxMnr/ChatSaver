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

      let windowObjectReference = window.open();
      windowObjectReference.document.write('<html><body><a href="'+fileURL+'" download="chat.txt">Download Chat</a></body></html>');
    }
  }
);
