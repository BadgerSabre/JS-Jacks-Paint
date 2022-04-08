const paints = [
    {name: 'Lime Green', source: './assets/colors/lime-green.jpeg', price: 14.99},
    {name: 'Medium Brown', source: './assets/colors/medium-brown.jpeg', price: 11.14},
    {name: 'Royal Blue', source: './assets/colors/royal-blue.jpeg', price: 22.99},
    {name: 'Solid Red', source: './assets/colors/solid-red.jpeg', price: 13.42},
    {name: 'Solid White', source: './assets/colors/solid-white.jpeg', price: 21.98},
    {name: 'Solid Cyan', source: './assets/colors/solid-cyan.jpeg', price: 8.22},
    {name: 'Solid Yellow', source: './assets/colors/solid-yellow.jpeg', price: 14.99},
    {name: 'Solid Purple', source: './assets/colors/solid-purple.jpeg', price: 11.99},
    {name: 'Solid Black', source: './assets/colors/solid black.png', price: 4.99},
]

paints.forEach((paint) =>{
    let paintCard = document.createElement('img')
    paintCard.src = paint.source
    paintCard.classList.add('paint-card')

    paintCard.addEventListener('mouseover', () =>{
        paintCard.classList.add('dim')
        document.querySelector('#color-name').innerText = paint.name
        document.querySelector('#color-price').innerText = `$${paint.price}`
    })
    paintCard.addEventListener('mouseout', () =>{
        paintCard.classList.remove('dim')
        document.querySelector('#color-name').innerText = ''
        document.querySelector('#color-price').innerText= ''
    })

    document.querySelector('.paint-cards').append(paintCard)
})

// function configureListeners() {
//     let images = document.querySelectorAll('img')

//     for (var i = 0; i < images.length; i++) {        
//         images[i].addEventListener('mouseover', addOpacity)
//         images[i].addEventListener('mouseout', removeOpacity)
//     } 
// }

// function addOpacity(event) {
//     if(!this.classList.contains('dim')){
//         this.classList.add('dim');
//     }
//     getProductInfo(event.target.id);     
// }

// function removeOpacity(event) {
//     if(this.classList.contains('dim')){
//         this.classList.remove('dim');
//     }

//     let element = document.getElementById('color-price');
//         element.textContent = '';
        
//     let color = document.getElementById('color-name');
//         color.textContent = ''; 

//     event.preventDefault();    
// }

// function getProductInfo(paintColor) {
//     let price;
//     let colorName;  
    
//     switch (paintColor) {
//         case 'pn1':
//             price = '$14.99'
//             colorName = 'Lime Green'
//             updatePrice(colorName, price)      
//             break;           
//         case 'pn2':
//             price = '$11.14'
//             colorName = 'Medium Brown'
//             updatePrice(colorName, price)    
//             break;            
//         case 'pn3':
//             price = '$22.99'
//             colorName = 'Royal Blue'
//             updatePrice(colorName, price)  
//             break;   
//         case 'pn4':
//             price = '$13.42'
//             colorName = 'Solid Red'
//             updatePrice(colorName, price)  
//             break;   
//         case 'pn5':
//             price = '$21.98'
//             colorName = 'Solid White'
//             updatePrice(colorName, price)       
//             break;   
//         case 'pn6':
//             price = '$4.99'
//             colorName = 'Solid Black'
//             updatePrice(colorName, price)        
//             break;   
//         case 'pn7':
//             price = '$8.22'
//             colorName = 'Solid Cyan'
//             updatePrice(colorName, price) 
//             break;   
//         case 'pn8':
//             price = '$11.99'
//             colorName = 'Solid Purple'
//             updatePrice(colorName, price)   
//             break;   
//         case 'pn9':
//             price = '$14.99'
//             colorName = 'Solid Yellow'
//             updatePrice(colorName, price) 
//             break;   
//           default:              
//     }

//     function updatePrice(colorName, price)
//     {       
//         let colorPrice = document.querySelector('#color-price')
//         colorPrice.textContent = price
        
//         let color = document.querySelector('#color-name')
//         color.textContent = colorName
//     }
    
// }