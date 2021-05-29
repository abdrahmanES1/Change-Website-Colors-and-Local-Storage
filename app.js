var el = document.querySelectorAll('.color-switcher li'),
    colors = [],
    localColor = localStorage.getItem('pagecolor');

document.body.classList.add(localColor);

for(let index = 0; index < el.length; index++) {
    
    colors.push(el[index].getAttribute('data-color'));

    el[index].addEventListener('click', function() {

        //remove all classList names
        document.body.classList.remove(...colors);
        
        document.body.classList.add(this.getAttribute('data-color'));

        // add color value in localStorage
        localStorage.setItem('pagecolor', this.getAttribute('data-color'));

   
    },false);  
}