let numOfPoint = 1

export default class Location {
    constructor(e,map){
        this.e = e
        this.map = map
    }

    getCoordinates(){

        const x = this.e.clientX
        const y = this.e.clientY

        if(this.e.target.classList.contains("particles-js-canvas-el") || this.e.target.classList.contains("main-btn") || this.e.target.classList.contains("left-menu")){
            return {xAxis: x, 
                yAxis: y}
        }
        return{}
    }
    
    graphMyPoint(x,y){
        const point = document.createElement('div')
        point.style.marginTop = `${y}px`
        point.style.marginLeft = `${x}px`
        point.className = 'point-graph'
        this.map.insertBefore(point, this.map.childNodes[0]);
    }

    addMyPoint({xAxis=null,yAxis=null},menu){
        if(xAxis === null || yAxis === null){
            return
        }
        this.graphMyPoint(xAxis,yAxis)
        const point = document.createElement('div')
        point.className = "point"
        const content = `
                            <div class="point-header">
                                <p class="point-name" id=${numOfPoint}>Punto${numOfPoint}</p>
                                <label for="${numOfPoint}" id="icon-write" data-icon="write" data-num=${numOfPoint}><i class="fas fa-pen-alt" data-icon="write" data-num=${numOfPoint}></i></label>
                            </div>
                            <div class="point-content">
                                <p>(${xAxis},${yAxis})</p>
                            </div>
                        `
        numOfPoint++
        point.innerHTML = content
        menu.appendChild(point)

    }

    async renamePoint(){
        const actualPoint = document.getElementById(this.e.target.dataset.num)
        const text = await swal("Write your new point name:",{ content: "input",}).then((value) => value )
        if(text === ''){
            swal("Invalid name", "","error");
        }
        else{
            actualPoint.textContent = text
            swal("Good Name", "","success");
        }
    }

}
