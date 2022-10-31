const requeste = new XMLHttpRequest();

requeste.addEventListener('load', () => {
    console.log(requeste.responseText)
})

requeste.open('GET', 'https://jsonplaceholder.typicode.com/posts');
requeste.send();





