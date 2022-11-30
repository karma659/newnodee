
/*
  // Set timeout asynchronous  function
let i=0;
function myGreeting() {
 console.log( i);
 
 ++i;
};

console.log("Happy");

for (let i = 0; i < 10; i++) {
    if (i === 5) { break; }
    const myTimeout1 = setTimeout(()=>{console.log(++i)}, 4000);
    console.log(i);

  }
 
const myTimeout2 = setTimeout(myGreeting, 2000);
const myTimeout3 = setTimeout(myGreeting, 3000);

*/

/*
//synchronous function

function f1() {
console.log("f1 finish");
  }
  function f2() {
    f1();
    console.log("f2 finish");
  }
  function f3() {
    f2();
    console.log("f3 finish");
  }
  f3();
*/
/*
//asynchronous function
async function f() {

    let promise = new Promise((res, rej) => {
      setTimeout(() => res("Hello"), 1000)
    });
  
    let result = await promise
  
   console.log(result);
  }
  
  f();
  */


   const express = require("express")
   const mongoose= require('mongoose');
   const mongoURL="mongodb+srv://Akash:Password@cluster0.duewfxs.mongodb.net/?retryWrites=true&w=majority";
   const app=express();

  mongoose.connect(mongoURL,{useNewUrlParser: true});

const con= mongoose.connection;
app.use(express.json());

try{
    con.on('open',() => {
        console.log('connected');
    })
}catch(error)
{
    console.log("Error: "+error);
}

const studentrouter= require("./routes/route");
app.use('/students',studentrouter)

 
   const port = 5020 ;
   app.listen(port,console.log("APP running in "+port));