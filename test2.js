function checkResult() {
    let analytical = 0;
    let intuitive = 0;

    const answers = document.querySelectorAll("input[type='radio']:checked");

    answers.forEach(answer => {
        if (answer.value === "analytical") {
            analytical++;
        } else if (answer.value === "intuitive") {
            intuitive++;
        }
    });

    let resultText = "";

    if (analytical > intuitive) {
        resultText = `
            <strong>You have an Analytical decision-making style 📊</strong><br><br>
            You rely on logic, data, and structured analysis when making choices.
            This makes you highly reliable, thorough, and strategic.<br><br>
            Your strength lies in planning ahead, minimizing risks, and making informed decisions.
            However, focusing too much on analysis can sometimes slow you down or make you hesitant
            to act on instinct.<br><br>
            Knowing your style helps you communicate clearly in teams or relationships,
            set realistic goals, and balance logic with flexibility.
        `;
    } 
    else if (intuitive > analytical) {
        resultText = `
            <strong>You have an Intuitive decision-making style 💡</strong><br><br>
            You rely on gut feelings, instinct, and patterns to guide your choices.
            This makes you adaptable, creative, and capable of thinking outside the box.<br><br>
            Your strength lies in flexibility and quick thinking, but sometimes decisions
            may feel impulsive or overlook key details.<br><br>
            Understanding your intuitive nature can help you combine creativity with caution,
            and improve collaboration by explaining your reasoning to others.
        `;
    } 
    else {
        resultText = `
            <strong>You have a Balanced decision-making style ⚖️</strong><br><br>
            You can alternate between analytical and intuitive approaches depending on the situation.
            This allows you to adapt to circumstances and consider both data and instincts.<br><br>
            Your strength lies in flexibility and perspective, but be mindful of overthinking
            or relying solely on gut feelings.<br><br>
            Knowing your balanced style helps you navigate choices confidently,
            work effectively with different personality types, and strengthen relationships.
        `;
    }

    document.getElementById("result").innerHTML = resultText;
}

const totalQuestions = document.querySelectorAll(".question").length;
const progressBar = document.getElementById("progressBar");
const radios = document.querySelectorAll("input[type='radio']");

radios.forEach(radio => {
    radio.addEventListener("change", updateProgress);
});

function updateProgress() {
    const answeredQuestions = new Set();

    radios.forEach(radio => {
        if (radio.checked) {
            answeredQuestions.add(radio.name);
        }
    });

    const progress = (answeredQuestions.size / totalQuestions) * 100;
    progressBar.style.width = progress + "%";
}
