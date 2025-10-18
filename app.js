let userName = prompt('✒ Please enter your name: 😊');
alert('🎉 Hi, Welcome ' + userName.toUpperCase() + ' 😊');

function calculatesum(){
let a = prompt('Enter first number.');
let b = prompt('Enter second number.');
let c = parseInt(a) + parseInt(b);

let output = document.getElementById('output')

output.innerHTML = 
`
    <h1 class='heading'> <u>SUM CALCULATOR</u> </h1>
    <div class='result-box'>
    <h3>So ${userName}</h3>
    <h1>✨ The Sum of</h1>
    <h2>${a}</h2>
    <h2>and</h2>
    <h2>${b}</h2>
    <h2>is:</h2>
    <h2 class="result">${c}</h2>
   </div>
   `
}
calculatesum()

// Try Again button click hone par dobara run karo
document.getElementById('tryAgain').addEventListener('click', calculatesum);