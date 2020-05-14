(function () {
  const iFrame = document.createElement('iframe'),
    defaultFrameHeight = '256px'

  /**
   * Set the height of our iFrame housing our BEX
   * @param height
   */
  const setIFrameHeight = height => {
    iFrame.height = height
  }

  /**
   * Reset the iFrame to it's default height e.g The height of the top bar.
   */
  const resetIFrameHeight = () => {
    setIFrameHeight(defaultFrameHeight)
  }

  /**
   * The code below will get everything going. Initialise the iFrame with defaults and add it to the page.
   * @type {string}
   */
  iFrame.id = 'bex-app-iframe'
  // iFrame.width = '100%'
  // resetIFrameHeight()

  // Assign some styling so it looks seamless

  /* Object.assign(iFrame.style, {
    position: 'fixed',
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
    border: '0',
    zIndex: '9999999', // Make sure it's on top
    overflow: 'visible'
  }) */

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
})()
