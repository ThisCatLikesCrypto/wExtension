document.addEventListener('DOMContentLoaded', function () {
    var redirectUrlInput = document.getElementById('redirectUrl');
    var saveBtn = document.getElementById('saveBtn');
  
    // Retrieve saved redirect URL
    chrome.storage.sync.get(['redirectUrl'], function(result) {
      redirectUrlInput.value = result.redirectUrl;
    });
  
    // Save the redirect URL
    saveBtn.addEventListener('click', function () {
      var redirectUrl = redirectUrlInput.value;
      chrome.storage.sync.set({ redirectUrl: redirectUrl }, function() {
        console.log('Redirect URL saved: ' + redirectUrl);
        window.close();
      });
    });
  });
  