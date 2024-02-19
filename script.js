function generateQuote() {
    const name = document.getElementById('nameInput').value.trim();

    if (name === '') {
        alert('Hey, enter your name!');
        return;
    }

    const quotes = [
        `"Hey ${name},The best time to plant a tree was 20 years ago. The second best time is now." `,
        `"Hey ${name},Believe you can and you're halfway there." `,
        `"Hey ${name},The only way to do great work is to love what you do."`,
        `"Hey ${name},In the middle of difficulty lies opportunity." `,
        `"Hey ${name},Do one thing every day that scares you." `,
        `"Hey ${name}, Hold the vision, trust the process."`
    ];

    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    
    document.getElementById('quoteOutput').innerText = quote;
}
