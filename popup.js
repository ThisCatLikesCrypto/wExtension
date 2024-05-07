function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

document.addEventListener('DOMContentLoaded', async function () {
    var redirectUrlInput = document.getElementById('redirectUrl');
    var saveBtn = document.getElementById('saveBtn');
    var statusindicator = document.getElementById('statusindicator');
  
    // Retrieve saved redirect URL
    chrome.storage.sync.get(['redirectUrl'], function(result) {
      redirectUrlInput.value = result.redirectUrl;
    });
  
    // Save the redirect URL
    saveBtn.addEventListener('click', async function () {
      var redirectUrl = redirectUrlInput.value;
      chrome.storage.sync.set({ redirectUrl: redirectUrl }, async function() {
        console.log('Redirect URL saved: ' + redirectUrl);

        // Update the status indicator to inform the user that the settings were saved
        statusindicator.style.visibility = "block";
        statusindicator.innerHTML = "Settings saved.";
        statusindicator.className = "fade-out";
        await sleep(1000);
        statusindicator.className = "";
        statusindicator.innerHTML = "";
        statusindicator.style.visibility = "none";
    });
  });
});