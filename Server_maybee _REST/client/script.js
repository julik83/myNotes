// const xhr = new XMLHttpRequest();

// xhr.onreadystatechange = function () {
//     if (xhr.readyState = 4) {
//         if (xhr.status == 200) {
//             console.log(xhr.responseText)
//         }

//         if (xhr.status == 404) {
//             console.log("Resource not found");
//         }
//     }
// };

// xhr.open('get', 'localhost:3000', true);
// xhr.send()

// console.log('I want to win')



// makeGET = () => {
//     fetch('http://localhost:3000')
// .then(res => {
//     if(res.ok){
//         // "https://stackoverflow.com/questions/19696240/proper-way-to-return-json-using-node-or-express"
//         //res is returned Promise
//         console.log(res.status);
//         x = res.json(); 
//         console.log(x); //returnes whole promise
//         return x;
//     } else {
//         console.log('Not succsess')
//     }
// })
// .then(
//     (data) => { 
//         console.log(data)
//         })
           
// .catch(error => console.log('ERROR'))
// }

// makeGET();
