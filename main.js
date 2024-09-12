(function () {
const template = document.createElement('template')
template.innerHTML = `
<style>
</style>
<div id="root" style="width: 100%; height: 100%;">
Hello WebComponent
</div>
`
class Main extends HTMLElement {
constructor () {
super()
this._shadowRoot = this.attachShadow({ mode: 'open' })
this._shadowRoot.appendChild(template.content.cloneNode(true))
this._root = this._shadowRoot.getElementById('root')
}
}
customElements.define('com-sap-sac-exercise-pbh-main', Main)
})()

onCustomWidgetResize (Width, height) {
  this.render()
}

onCustomWidgetAfterUpdate (changedProps) {
  
}

onCustomWidgetDestroy () {
  
}

render () {
  this._root.textContent = `Hello Custom Widget clientWidth: ${this.clientWidth}, clientHeight: ${this.clientHeight}`
}
