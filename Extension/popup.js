document.addEventListener('DOMContentLoaded', function (){
  document.querySelector('button').addEventListener('click',onclick, false)
  function onclick(){
    chrome.tabs.query({currentWindow: true, active: true},
      function(tabs){
        chrome.tabs.sendMessage(tabs[0].id, 'Sensitive material detected', setCount)
      })
  }

  function setCount(res){
    const div = document.getElementById('detection')
    const img = document.getElementById('detect-img')
    if(res.count){
      div.textContent =  'Sensitive content found'
      img.src="images/warning.png"
    }
  }
}, false)