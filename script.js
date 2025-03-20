
function spin() {
    const symbols = ["🍋", "🍊", "🍉", "⭐", "🍇"];
    let slot1 = document.getElementById("slot1");
    let slot2 = document.getElementById("slot2");
    let slot3 = document.getElementById("slot3");
    let resultText = document.getElementById("result");

    let rand1 = symbols[Math.floor(Math.random() * symbols.length)];
    let rand2 = symbols[Math.floor(Math.random() * symbols.length)];
    let rand3 = symbols[Math.floor(Math.random() * symbols.length)];

    // slot1.textContent = rand1;
    // slot2.textContent = rand2;
    // slot3.textContent = rand3;
    const imagem = ["spr/Can.png","spr/Ok.png"];
    let imagem1 = document.getElementById('img1');
    let imagem2 = document.getElementById('img2');
    let imagem3 = document.getElementById('img3');
    let resultImage = document.getelementById("resultado")

    if (rand1 === rand2 && rand2 === rand3) {
        resultText.textContent = "🎉 Você ganhou! 🎉";
    } else {
        resultText.textContent = "Tente novamente!";
    }
}