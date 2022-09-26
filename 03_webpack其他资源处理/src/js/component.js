import '../css/index.css'
import '../css/component.less'
import touxiang from '../img/touxiang.jpg'

function component () {
    const element = document.createElement('div')
    element.innerText = 'Hello, world!'
    element.className = 'content'

    const image = new Image()
    image.src = touxiang
    element.appendChild(image)

    const bgDivEle = document.createElement('div')
    bgDivEle.className = 'bg-image'

    element.appendChild(bgDivEle)
    return element
}

document.body.appendChild(component())