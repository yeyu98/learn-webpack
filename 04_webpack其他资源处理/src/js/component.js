import '../css/index.css'
import '../css/component.less'
import touxiang from '../img/touxiang.jpg'
import data from '../txt/data.txt'

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

    const spanEle = document.createElement('span')
    spanEle.innerText = data
    
    element.appendChild(spanEle)
    return element
}

document.body.appendChild(component())