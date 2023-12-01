
let counter = 1;
function callMyFunc(params) {
    document.getElementById('composerInput').innerText = counter
    document.querySelector('[value="Send"]').click()
    counter++
}
 setInterval(() => {
   if (counter < 5) {
    callMyFunc()
   }    
}, 1000);


















// Cancel all friend requests with one click.
// document.querySelectorAll('[aria-level="Cancel request"]').forEach(x=>x.click())




// first step 
// let names = [];
// const doc = document.querySelector('[aria-labelledby=":r29n:"]')
// doc.querySelectorAll('[data-visualcompletion="ignore-dynamic"] div a').forEach(element => {
//   names.push(element.textContent.trim());
// });

// const mainBody = document.querySelector('[aria-labelledby=":r29n:"]')
// mainBody.querySelectorAll('[data-visualcompletion="ignore-dynamic"] div').forEach(element => {
//   // console.log()
// if (onlyGirls.includes(element.querySelector('a')?.textContent.trim())) {
//     element.querySelector('[aria-label="Add friend"]')?.click()
// }
// });
