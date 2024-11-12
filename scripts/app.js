const form = document.getElementById('student-form');
const output = document.getElementById('output');

form.addEventListener('submit', (e => {
    e.preventDefault()

    const name = form.elements['user-name'].value
    const password = form.elements['user-password'].value;

    output.style.visibility =  "visible" ;
    
    output.innerHTML = `
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Password:</strong> ${password}</p>`;

}))


let total = 0;
numbers = [1,2,3,4,5]
function calculateTotal(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if(numbers[i] % 2 === 0) {
            total += numbers[i] * 2;
        }
    }
}
calculateTotal(numbers)
console.log("Oop Total: " + total)


const total2 = numbers.filter((n) => n % 2 ===0).map((n) => n * 2).reduce((sum, n) => sum + n, 0)

console.log("Functional Total2: " + total)
