
let string = "";
let btn = document.querySelectorAll('.btn');

Array.from(btn).forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            // Replace 'x' and '÷' with '*' and '/' respectively before evaluating
            string = string.replace(/x/g, '*').replace(/÷/g, '/');
            try {
                let result = eval(string);
                if (typeof result === 'number') {
                    result = result.toFixed(2);  // Round the result to 2 decimal places
                }
                document.querySelector('input').value = result;
                string = result;  // Update string with the formatted result
            } catch {
                document.querySelector('input').value = "Error";
                string = "";
            }
        } else if (e.target.innerHTML == 'AC') {
            string = "";
            document.querySelector('input').value = string;
        } else {
            console.log(e.target.innerHTML);
            string += e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    });
});