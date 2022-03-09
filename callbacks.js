

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


// function writePosts(post,callback)
// {
//     setTimeout(()=>{
//         posts.push(post);
//         callback();

//     }
//     ,2000);
// }

// //console.log(posts);


// writePosts({title : "Post Three", body : "This is the body for post three"},getPosts)


//Another example explaining how callbacks can be used..


const userLeft = false ;
const userWatchingCatMemes = false ;


function watchJSvideos ( callBack, errorCallBack)
{
    if(userLeft)
    {
        // let message ={
        //     name :"UserLeft",
        //     message : " :("

        // };
        errorCallBack({
            name : "User Left",
            message : ":("
        })

        
    }
    else if(userWatchingCatMemes){
        errorCallBack( {
            name: "User watching Cat Memes!",
            message : "Catmemes >> Javascript "
        })

    }
    else 
    {

        // let message = 'JS Wins!';

        callBack('JS Wins')

    }
}

// function callBack(message) {
//     console.log(`Success ${message}`);

// };

// function errorCallBack (error)
// {
//     console.log(error.name + ' ' + error.message);
// }

watchJSvideos((message) => {
    console.log(`Success ${message}`);
  
}, (error) => {
    console.log(error.name + ' ' + error.message);
});


