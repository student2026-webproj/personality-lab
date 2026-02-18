function checkResult() {
    let intro = 0;
    let extra = 0;

    const answers = document.querySelectorAll("input[type='radio']:checked");

    answers.forEach(answer => {
        if (answer.value === "intro") {
            intro++;
        } else if (answer.value === "extra") {
            extra++;
        }
    });

    let resultText = "";

    if (intro > extra) {
        resultText = `
            <strong>You are an Introvert 🧠</strong><br><br>
            You gain energy from solitude and quiet reflection.
            You tend to form deep, meaningful connections rather than many surface-level ones.
            This makes you a thoughtful listener and emotionally aware partner or friend.<br><br>
            However, social situations can drain you if you don’t take time to recharge.
            Understanding this helps you set healthy boundaries, communicate your need
            for alone time, and avoid burnout in relationships.
        `;
    } 
    else if (extra > intro) {
        resultText = `
            <strong>You are an Extrovert 🎉</strong><br><br>
            You gain energy from being around other people and engaging socially.
            You are expressive, enthusiastic, and often bring energy into group settings.
            This makes you great at initiating conversations and building connections.<br><br>
            However, you may struggle with slowing down or spending time alone.
            Knowing this helps you practice active listening and respect quieter personalities,
            improving balance and understanding in relationships.
        `;
    } 
    else {
        resultText = `
            <strong>You are an Ambivert ⚖️</strong><br><br>
            You display both introverted and extroverted traits depending on the situation.
            You can enjoy social interaction while also valuing alone time.
            This flexibility allows you to connect easily with different personality types.<br><br>
            Understanding this balance helps you choose environments that protect your energy
            and adapt your communication style to strengthen relationships.
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
