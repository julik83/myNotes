//Promise it self is asynchronous
tryPromise = () => {
    return new Promise((resolve, reject) => {

        resolve('Hello Kitty')
        
    })
}
//callback with XMLHttprequest or add is asynchroneous, itself is not
tryCallback = (callback) => {
    const request = new XMLHttpRequest();
    
    request.addEventListener('readystatechange', () => {
        if(request.readyState === 4){
            const data = JSON.parse(request.responseText);
            callback(data) 
        }  
    })
    request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
    request.send();
    //this here is not asynchroneous
    callback('Aha I am dummy data an Im not async');
    console.log('Aha')
};


console.log(1)
console.log(2)

tryCallback((data) => {
    console.log(`callback fired: ${data}`);
});

tryPromise().then((data) => console.log(data))

console.log(3)
console.log(3)
console.log(3)
console.log(3)

