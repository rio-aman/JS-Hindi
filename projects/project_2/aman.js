//  calculate button is submit button

const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)


// form submit in post type or in get type nd it goes to server which we have to stop and it is an default action 

form.addEventListener('submit', function (e) {
    e.preventDefault();
   // this is to prevent default action 

    const height = parseInt(document.querySelector('#height').value);  
    // yaha pr value milegi vo string hogi to hme pare method se use jasa chahe change kar sakte hai 
    // mai yaha pr integer me change kar raha hu  
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height ${height}`;
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight ${weight}`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        //show the result
        results.innerHTML = `<span>${bmi}</span>`;
    }
});


