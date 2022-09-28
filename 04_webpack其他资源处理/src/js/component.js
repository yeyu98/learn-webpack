import '../css/index.css'
import '../css/component.less'
import '../font/iconfont.css'
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

    const iEle = document.createElement('i')
    iEle.className = 'iconfont icon-zu9 icon'
    element.appendChild(iEle)

    return element
}

document.body.appendChild(component())