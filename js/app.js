import Location from './location.js'

const map = document.getElementById('particles-js')
const menu = document.getElementById('dropdown-menu')


function myLocation(e){
    const location = new Location(e,map)
    const writeIcon = e.target.dataset.icon

    if(writeIcon){
        location.renamePoint()
    }

    const myCoordinates= location.getCoordinates() 
    location.addMyPoint(myCoordinates,menu)
    
}
map.addEventListener('click',myLocation)