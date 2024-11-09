// Check if user is already logged in
function checkLoginStatus() {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
        displayUserProfile(user);
    }
}

// Login function
function login(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const age = document.getElementById("age").value;
    const height = document.getElementById("login-height").value;
    const weight = document.getElementById("login-weight").value;
    const goal = document.getElementById("goal").value;

    if (username && password && age && height && weight && goal) {
        const user = { username, age, height, weight, goal };
        localStorage.setItem("user", JSON.stringify(user));
        displayUserProfile(user);
    } else {
        document.getElementById("login-error").textContent = "Please fill out all fields.";
    }
}

// Display user profile
function displayUserProfile(user) {
    document.getElementById("login-section").style.display = "none";
    document.getElementById("user-profile").style.display = "block";
    document.getElementById("user-name").textContent = user.username;
    document.getElementById("user-age").textContent = user.age;
    document.getElementById("user-height").textContent = user.height;
    document.getElementById("user-weight").textContent = user.weight;
    document.getElementById("user-goal").textContent = user.goal;

    const goalMessage = document.getElementById("goal-message");
    switch (user.goal) {
        case "Lose Weight":
            goalMessage.textContent = "Let's work on a weight-loss plan!";
            break;
        case "Build Muscle":
            goalMessage.textContent = "Let's create a muscle-building routine!";
            break;
        case "Improve Health":
            goalMessage.textContent = "We’ll focus on overall health improvements!";
            break;
        case "Maintain Weight":
            goalMessage.textContent = "Maintaining weight is our goal!";
            break;
        default:
            goalMessage.textContent = "";
    }

    document.getElementById("logout").style.display = "inline";
}

// Logout function
function logout() {
    localStorage.removeItem("user");
    document.getElementById("login-section").style.display = "block";
    document.getElementById("user-profile").style.display = "none";
    document.getElementById("logout").style.display = "none";
}

// BMI Calculator
function calculateBMI() {
    const weight = parseFloat(document.getElementById("calc-weight").value);
    const height = parseFloat(document.getElementById("calc-height").value) / 100;

    if (weight > 0 && height > 0) {
        const bmi = (weight / (height * height)).toFixed(2);
        let bmiCategory = "";

        if (bmi < 18.5) {
            bmiCategory = "Underweight";
        } else if (bmi >= 18.5 && bmi < 24.9) {
            bmiCategory = "Normal weight";
        } else if (bmi >= 25 && bmi < 29.9) {
            bmiCategory = "Overweight";
        } else {
            bmiCategory = "Obese";
        }

        document.getElementById("bmi-result").textContent = `Your BMI is ${bmi} (${bmiCategory})`;
    } else {
        document.getElementById("bmi-result").textContent = "Please enter valid height and weight.";
    }
}

// Initialize on page load
document
