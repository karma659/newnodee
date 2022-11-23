/*
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


//sync function

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

// async function
async function f() {

    let promise = new Promise((res, rej) => {
      setTimeout(() => res("Hello"), 1000)
    });
  
    let result = await promise
  
   console.log(result);
  }
  
  f();