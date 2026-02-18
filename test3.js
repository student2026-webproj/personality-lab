function checkResult() {
    let planner = 0;
    let spontaneous = 0;

    const answers = document.querySelectorAll("input[type='radio']:checked");

    answers.forEach(answer => {
        if (answer.value === "planner") {
            planner++;
        } else if (answer.value === "spontaneous") {
            spontaneous++;
        }
    });

    let resultText = "";

    if (planner > spontaneous) {
        resultText = `
            <strong>You are a Planner 📅</strong><br><br>
            You thrive when your life is organized and predictable. Planning gives you a sense of control 
            and allows you to manage time efficiently. Others see you as reliable and dependable, which 
            makes you an anchor in your relationships.<br><br>
            <strong>Strengths:</strong> Excellent time management, foresight, and reliability.<br>
            <strong>Challenges:</strong> Overplanning may lead to anxiety or difficulty adapting to unexpected changes.<br><br>
            <strong>Relationship Tip:</strong> Communicate that your planning is meant for security, not control. 
            Practice letting others contribute ideas, and occasionally embrace spontaneity to strengthen connections.
        `;
    } 
    else if (spontaneous > planner) {
        resultText = `
            <strong>You are Spontaneous ✨</strong><br><br>
            You love flexibility and enjoy adapting to whatever life brings. Your creativity and open-mindedness 
            make you fun and exciting to be around. You can navigate uncertainty with ease and think on your feet.<br><br>
            <strong>Strengths:</strong> Adaptability, creativity, and a sense of adventure.<br>
            <strong>Challenges:</strong> Lack of structure can sometimes lead to misunderstandings or stress.<br><br>
            <strong>Relationship Tip:</strong> Introduce small routines or agreements that support your connections 
            without sacrificing your freedom. Explain your flexible nature to others so they understand your perspective.
        `;
    } 
    else {
        resultText = `
            <strong>You are a Balanced Planner-Spontaneous mix ⚖️</strong><br><br>
            You can plan carefully when needed, but you also adapt easily to change. This balance allows you 
            to navigate life smoothly and connect well with both structured and flexible personalities.<br><br>
            <strong>Strengths:</strong> Versatility, adaptability, and perspective.<br>
            <strong>Challenges:</strong> Finding the right balance between structure and freedom in stressful situations.<br><br>
            <strong>Relationship Tip:</strong> Be aware of when planning is necessary and when letting go can strengthen 
            relationships. Communicate openly about your style to improve harmony and understanding.
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