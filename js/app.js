const map = document.getElementById('particles-js')
const menu = document.getElementById('dropdown-menu')
let numOfPoint = 1

function getCoordinates(e){
    const x = e.clientX
    const y = e.clientY
    if(e.target.classList.contains("particles-js-canvas-el") || e.target.classList.contains("main-btn") || e.target.classList.contains("left-menu")){
        return {xAxis: x, 
            yAxis: y}
    }
    return{}
}

function graphMyCoordinates(x,y){
    const point = document.createElement('div')
    point.style.marginTop = `${y}px`
    point.style.marginLeft = `${x}px`
    point.className = 'point-graph'
    map.insertBefore(point, map.childNodes[0]);
}
function addMyCoordinates({xAxis=null,yAxis=null}){
    if(xAxis === null || yAxis === null){
        return
    }
    graphMyCoordinates(xAxis,yAxis)
    const point = document.createElement('div')
    point.className = "point"
    const content = `
                        <div class="point-header">
                            <p class="point-name" id="1">Punto${numOfPoint}</p>
                            <label for="${numOfPoint++}" id="icon-write"><i class="fas fa-pen-alt"></i></label>
                        </div>
                        <div class="point-content">
                            <p>(${xAxis},${yAxis})</p>
                        </div>
                    `
    point.innerHTML = content
    menu.appendChild(point)
}
function myLocation(e){
    const myCoordinates= getCoordinates(e)
    addMyCoordinates(myCoordinates)
}
map.addEventListener('click',myLocation)