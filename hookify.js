// Hookify AI Hook Generator JS

async function generateHooks() {
    // Topic input
    const topic = document.getElementById("topic").value;
    const resultBox = document.getElementById("result");

    // Result me loading dikhao
    resultBox.innerHTML = "Generating hooks...";

    try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer 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"
            },
            body: JSON.stringify({
                model: "gpt-4o-mini",
                messages: [
                    { role: "user", content: `Generate 5 viral hooks for topic: ${topic}` }
                ],
                max_tokens: 150
            })
        });

        const data = await response.json();
        resultBox.innerHTML = data.choices[0].message.content;

    } catch (error) {
        console.error(error);
        resultBox.innerHTML = "Error generating hooks. Check your API key and internet.";
    }
      }
