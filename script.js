const items = document.querySelectorAll ('.item');
console.log (items);

items.forEach (item => {
item.addEventListener ('mouseover', ()=> {
    removeFocus ();
item.classList.add('selected');
})
removeFocus = () => {
    items.forEach(item => {
        item.classList.remove ('selected');
    })
}
})

const back = document.querySelector ('#back');
const next = document.querySelector ('#next');
console.log (back);
const photos = ['https://cdn.glitch.com/1bf924cb-0cf4-42f3-bb9c-257bb7bde8cb%2F11.jpg?v=1631546129687', 'https://cdn.glitch.com/1bf924cb-0cf4-42f3-bb9c-257bb7bde8cb%2F22.jpg?v=1631546198777', 'https://cdn.glitch.com/1bf924cb-0cf4-42f3-bb9c-257bb7bde8cb%2F33.jpg?v=1631546227927', 'https://cdn.glitch.com/1bf924cb-0cf4-42f3-bb9c-257bb7bde8cb%2F44.jpg?v=1631546258685', 'https://cdn.glitch.com/1bf924cb-0cf4-42f3-bb9c-257bb7bde8cb%2F55.jpg?v=1631546289692'];
console.log (photos[4]);

let i=0;
next.addEventListener('click', ()=>{
    i++;
    if (i > photos.length - 1){
        i=0;
    }
    document.querySelector('#pictures').src=photos[i];
})
back.addEventListener('click', ()=>{
    i--;
    if (i < 0) {
    i = photos.length - 1;
    }
    document.querySelector('#pictures').src=photos[i];
})