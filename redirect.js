chrome.storage.sync.get(['redirectUrl'], function(result) {
    window.location.href = result.redirectUrl;
});
  