alert("Islamophobic content detected");
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
  const sensitive = new RegExp('Islam')
  const matches = document.documentElement.innerHTML.match(sensitive)
  // alert(request)
  sendResponse({count: matches.length})

})