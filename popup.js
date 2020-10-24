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
    div.textContent =  `${res.count} islam`
    document.body.appendChild(div)
  }
}, false)