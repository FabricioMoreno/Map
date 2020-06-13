const map = document.getElementById('particles-js')
function getCoordinates(e){
    const x = e.x
    const y = e.y
    
    return {xAxis: x, 
            yAxis: y}
}

console.log(map)
function myLocation(e){
    const myCoordinates = getCoordinates(e)
    
}
map.addEventListener('click',myLocation)