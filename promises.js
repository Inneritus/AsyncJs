

// const posts = [
//     { title : "Post One",
//     body : 'This is the body for Post one'},
//     { title : "Post Two",
//     body : 'This is the body for Post two'}
// ]


// function getPosts() {
//     //callbackfn

//     setTimeout(() =>
//     {
//         let output= '';
//         posts.forEach( post=> {
//             output += `<li>${post.title}</li>`;
//          });
//          document.body.innerHTML= output;

//     },1000);
// }


// function writePosts(post)
// {

//     return new Promise((resolve, reject)=> {

//         setTimeout(()=>{
//             posts.push(post);

//             let error = true;

//             if(!error) 
//             {
//                 resolve();

//             }
//             else {
//                 reject('Error: Something went wrong')
//             }
    
            
    
//         }
//         ,2000);

//     })
    
// }

// writePosts({title : 'Love is war', body:"Guess what....Love is still war"})
//     .then(getPosts)
//     .catch(err=>{
//         console.log(err);
//     })

    //Promise.ALL

    // const Promise1= Promise.resolve('Hello World');
    // const Promise2 = 10;
    // const Promise3 = new Promise((resolve,reject) => {
    //     setTimeout(resolve,2000,'Goodbye');
    // });

   

    // const Promise4= fetch('https://jsonplaceholder.typicode.com/users').then(res => 
    //     {return res.json()}
    // );

    // Promise.all([Promise1,Promise2,Promise3,Promise4]).then(value => {
    //     console.log(value);

    // });

    async function getUsers() {

        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = res.json();
        console.log(data);

    }


    getUsers();
    

// const userLeft = false ;
// const userWatchingCatMemes = true ;


// //Another Example to showcase Promises

// function watchJSvideos()
// {
    
//     return new Promise ((resolve,reject) => {
//         if(userLeft)
//     {   reject({
//             name : "User Left",
//             message : ":("
//         })

        
//     }
//     else if(userWatchingCatMemes){
//         reject( {
//             name: "User watching Cat Memes!",
//             message : "Catmemes >> Javascript "
//         })

//     }
//     else 
//     {
//         resolve('JS Wins')
//     }
//     });

// }

// watchJSvideos().then((message) => {
//     console.log(`Success ${message}`);
  
// }).catch((error) => {
//     console.log(error.name + ' ' + error.message);
// });