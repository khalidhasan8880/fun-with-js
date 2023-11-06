
// first step 
// let names = [];
// const doc = document.querySelector('[aria-labelledby=":r29n:"]')
// doc.querySelectorAll('[data-visualcompletion="ignore-dynamic"] div a').forEach(element => {
//   names.push(element.textContent.trim());
// });
// chatGPT : give me only girls names in an array :


// second step 
const onlyGirls = ["Mishqat Jahan", "Tanha Islam", "Mohuya Smrity"]

const doc = document.querySelector('[aria-labelledby=":r29n:"]')
doc.querySelectorAll('[data-visualcompletion="ignore-dynamic"] div').forEach(element => {
  // console.log()
if (onlyGirls.includes(element.querySelector('a')?.textContent.trim())) {
    element.querySelector('[aria-label="Add friend"]')?.click()
}
});
