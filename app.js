var el = document.querySelectorAll('.color-switcher li'),
    colors = [],
    localColor = localStorage.getItem('pagecolor');
  
 // get color from localStorage
document.body.classList.add(localColor);


for(let index = 0; index < el.length; index++) {
    
    // Get Colors From  Attribute : data-color
    colors.push(el[index].getAttribute('data-color'));

    // Add Event Click
    el[index].addEventListener('click', function() {

        // emove all classList names
        document.body.classList.remove(...colors);

        // set color name in class of body 
        document.body.classList.add(this.getAttribute('data-color'));

        // add color value in localStorage
        localStorage.setItem('pagecolor', this.getAttribute('data-color'));

   
    },false);  
}