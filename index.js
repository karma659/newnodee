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
