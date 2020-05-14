(function () {
  function setFocus () {
    iFrame.focus()
  }

  const iFrame = document.createElement('iframe')
  iFrame.id = 'bex-app-iframe'

  Object.assign(iFrame.style, {
    position: 'absolute',
    display: 'block',
    width: '500px',
    height: '500px',
    'margin-left': 'auto',
    'margin-right': 'auto',
    border: '0',
    zIndex: '9999999', // Make sure it's on top
    overflow: 'hidden'
  })

  // When the page loads, insert our browser extension app.
  iFrame.src = chrome.runtime.getURL('www/index.html#popup')
  document.body.prepend(iFrame)
  setTimeout(setFocus, 100)
})()
