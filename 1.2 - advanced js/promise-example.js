const wait = ms => new Promise((resolve)=>setTimeout(resolve, ms))

wait(2500).then(() => console.log(3));
wait(3000).then(() => console.log(4));
wait(2000).then(() => console.log(2));
console.log(1);