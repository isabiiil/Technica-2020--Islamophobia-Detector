document.addEventListener('DOMContentLoaded', function (){
  document.querySelector('#filter').addEventListener('click',onclick, false)
  function onclick(){
    chrome.tabs.query({currentWindow: true, active: true},
      function(tabs){
        chrome.tabs.sendMessage(tabs[0].id, 'Sensitive material detected', setCount)
      })
  }
  document.querySelector('#site-link').addEventListener('click',onClick, false)
  function onClick(){
    var newURL = "https://maisa-ah.github.io/islamophobia_detector/"
    chrome.tabs.create({ url: newURL })
  }

  function setCount(res){
    const div = document.getElementById('detection')
    const img = document.getElementById('detect-img')
    if(res.count>0){
      div.textContent = 'Sensitive content found'
      img.src="images/warning.png"
    }
  }
}, false)