getTodos = (callback) => {
const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {
    //console.log(request, request.readyState); 
    if(request.readyState === 4 && request.status === 200){
        const data = JSON.parse(request.responseText);
        /*here is some problem if we pass request.  responseText in stead of data variable it seems like insteade of responseText the console returns response but need to check*/
        callback(undefined, data)
    }else if(request.readyState === 4){
        callback("could not fetch the data", undefined)
    }
})
request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
request.send();
};

getTodos((err, data) => {
    console.log('callback fired');
    if(err){
        console.log(err);
    }else if(data){
        console.log(data);
    }
});

// !!!!!exemple of callback hell in video
