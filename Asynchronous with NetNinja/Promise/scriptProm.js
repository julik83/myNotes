getTodos = (resource) => {
    return new Promise((resolve,reject) => {
    const request = new XMLHttpRequest();
    
    request.addEventListener('readystatechange', () => {
        //console.log(request, request.readyState); 
        if(request.readyState === 4 && request.status === 200){
            const data = JSON.parse(request.responseText);
            /**!!!!!!!check coment in callback script.js*/
            resolve(data)
        }else if(request.readyState === 4){
            reject('error getting resource')
        }
    })
    //set request
    request.open('GET', resource );
    //send request 
    request.send();
    })
};


getTodos('https://jsonplaceholder.typicode.com/todoss/').then(data => {
    console.log("promise resolved:", data)
}).catch(err => {
    console.log(err)
})



//////////////////////////////////////

