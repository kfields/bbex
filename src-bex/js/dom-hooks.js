// Hooks added here have a bridge allowing communication between the Web Page and the BEX Content Script.
// More info: https://quasar.dev/quasar-cli/developing-browser-extensions/dom-hooks

export default function attachDomHooks (bridge) {
  bridge.on('close-popup', event => {
    const el = document.getElementById('bex-app-iframe')
    window.alert('attachDomHooks')
    if (el) {
      el.remove()
    }
  })
  /*
  bridge.send('message.to.quasar', {
    worked: true
  })
  */
}
