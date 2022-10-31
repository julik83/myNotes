getPocemons = (resource) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.addEventListener('load', () => {
            if(request.readyState === 4 && request.status === 200 ){
                const data =JSON.parse(request.responseText)
                resolve(data)
            }
            else if(request.readyState === 4)
                reject('I did not get data')
        })

        request.open('GET', resource);
        request.send();
    })
}

getPocemons('https://pokeapi.co/api/v2/pokemon/ditto').then((data) => console.log(data)).catch((err) => console.log(err))

