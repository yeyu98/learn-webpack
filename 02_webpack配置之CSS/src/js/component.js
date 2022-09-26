import '../css/index.css'
import '../css/component.less'

function component () {
    const element = document.createElement('div')
    element.innerText = 'Hello, world!'
    element.className = 'content'
    return element
}

document.body.appendChild(component())