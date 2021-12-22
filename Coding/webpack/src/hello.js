import("./index.css")
import image from "../image/react.jpg"

let main = document.getElementById('main');

let h1 = document.createElement('h1')

h1.textContent = 'Webpack'
h1.setAttribute("class", 'heading')
let img = document.createElement('img')
img.src = image
img.setAttribute("class", 'image')
let p1 = document.createElement('p')
p1.setAttribute("class", 'para1')
p1.textContent ="Hello  My Name is Rohit Baghel"
let p2 = document.createElement('p')
p2.setAttribute("class", 'para1')
p2.textContent ="This is my unit 5 first project with webpack"
main.append(h1,img,p1,p2)


