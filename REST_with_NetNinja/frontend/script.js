fetch('http://localhost:4000/api/ninjas')
.then(res => {
    if(res.ok){
        x = res.json();
        console.log(x);
        return x;
    } else {
        console.log('Not succsess')
    }
})
.then(
    data => { 
        data.forEach(element => {
        console.log(element.name)
        });
    }       
)
.catch(error => console.log('ERROR'))