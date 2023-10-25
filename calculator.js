//Function to calculate BMI
function calculateBMI() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value) / 100; // Convert height to meters

    if (isNaN(weight) || isNaN(height)) {
        document.getElementById("bmi").innerHTML = "Please enter valid values.";
        return;
    }

    const bmi = weight / (height * height);
    const resultText = `Your BMI is: ${bmi.toFixed(2)}`;

    let interpretation = "Normal weight";

    if (bmi < 18.5) {
        interpretation = "Underweight";
    } else if (bmi >= 25) {
        interpretation = "Overweight";
    }

    document.getElementById("bmi").innerHTML = `${resultText}<br>(${interpretation})`;
}

//Function to calculate BMR
function calculateBMR() {
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    const age = parseInt(document.getElementById("age").value);

    if (isNaN(weight) || isNaN(height) || isNaN(age)) {
        document.getElementById("bmr").innerHTML = "Please enter valid values.";
        return;
    }

    let bmr;

    if (gender === "male") {
        bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else if (gender === "female") {
        bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }

    document.getElementById("bmr").innerHTML = `Your BMR is: ${bmr.toFixed(2)} calories per day`;
}

//Function to calculate Body Fat
function calculateBodyFat() {
    const neck = parseFloat(document.getElementById("neck").value);
    const waist = parseFloat(document.getElementById("waist").value);

    if (isNaN(neck) || isNaN(waist)) {
        document.getElementById("bodyFat").innerHTML = "Please enter valid values.";
        return;
    }

    // Calculate body fat percentage using the Navy Method
    const bodyFatPercentage = (86.010 * Math.log10(waist - neck) - 70.041).toFixed(2);

    document.getElementById("bodyFat").innerHTML = `Your estimated body fat percentage is: ${bodyFatPercentage}%`;
}

//Function to calculate Ideal weight
function calculateIdealWeight() {
    const height = parseFloat(document.getElementById("height").value);
    const gender = document.getElementById("gender").value;

    if (isNaN(height) || height <= 0) {
        document.getElementById("idealWeight").innerHTML = "Please enter a valid height.";
        return;
    }

    let idealWeight;
    
    if (gender === "male") {
        idealWeight = (height - 100) * 0.9;
    } else {
        idealWeight = (height - 100) * 0.85;
    }

    document.getElementById("idealWeight").innerHTML = `Your ideal weight is approximately: ${idealWeight.toFixed(2)} kg`;
}