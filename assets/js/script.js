const form = document.getElementById('form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    const bmi = (weight / (height * height)).toFixed(2);

    const value = document.getElementById('value');
    let description = '';

    value.classList.remove('normal');
    value.classList.remove('attention');

    document.getElementById('infos').classList.remove('hidden');

    if (bmi < 18.5) {
        description = 'Cuidado! Você está abaixo do peso!';
        value.classList.add('attention');
    } 
    else if (bmi >= 18.5 && bmi < 25) {
        description = 'Você está no peso ideal!';
        value.classList.add('normal');
    } 
    else if (bmi >= 25 && bmi < 30) {
        description = 'Cuidado! Você está com sobrepeso!';
        value.classList.add('attention');
    } 
    else if (bmi >= 30 && bmi < 35) {
        description = 'Cuidado! Você está com obesidade moderada!';
        value.classList.add('attention');
    } 
    else if (bmi >= 35 && bmi < 40) {
        description = 'Cuidado! Você está com obesidade severa!';
        value.classList.add('attention');
    } 
    else {
        description = 'Cuidado! Você está com obesidade mórbida!';
        value.classList.add('attention');
    }

    value.textContent = bmi.replace('.', ',');
    document.querySelector('#description span').textContent = description;
});
