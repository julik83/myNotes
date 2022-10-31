// token from https://www.youtube.com/watch?v=PoRJizFvM7s&t=659s&ab_channel=TraversyMedia
// only callbacks, + my own usefull callback function

////////Trawesy async crash course//////////
posts = [
  { title : 'post1', body : 'I am post1' },
  { title : "post2", body : "I am post2" }
]

function GetPosts(){
  setTimeout(
    () => {
      let output = '';
      posts.forEach((post) => {
        output += `<li>${post.title}<li>`;  
      });
      document.body.innerHTML = output; 
    }, 5000
  )
}


function CreatePost(post, callback){
  setTimeout(() => {
    posts.push(post)
    callback()
  }, 4000);
}

CreatePost({ title : "post3", body : "I am post3"},
GetPosts)

/////////////////myF1///////////////////////

function function5(){
  console.log('5');
}

function function4(callback){
  console.log('4');
  callback();
}

function function3(callback){
  console.log('3');
  callback();
}

function function2(callback){
  console.log('2');
  callback();
}

function function1(callback){
  console.log('1');
  callback();
}

setTimeout(() => function1(() => setTimeout(() => function2(() => setTimeout(() => function3(() => setTimeout(() => function4(() => setTimeout(function5, 3000)), 10000)), 6000)), 3000)), 1000)

///////////////////myF2///////////////////////
var x = 5;

function action1(arg1, arg2, callback){
   console.log('I am here 1')
   x += callback(arg2, arg1)
   console.log(x);
}

function operation(param1, param2){
  return param1 + param2
}

action1(1, 2, operation);
















































