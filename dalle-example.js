
const prompt = require("prompt-sync")(); 
const DALLE_API_ENDPOINT = 'https://api.openai.com/v1/images/generations';
const API_KEY = '';


async function generateImage(prompt) {
    try {
        const response = await fetch(DALLE_API_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${API_KEY}`
            },
            body: JSON.stringify({
                prompt: prompt,
                n: 1, // Number of images to generate
                size: "1024x1024" // Size of the generated image
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error generating image:', error);
    }
}

// Example usage
user_prompt = prompt("Write DallE prompt: ")
generateImage(user_prompt)
    .then(data => {
        if (data && data.data && data.data[0]) {
            const imageUrl = data.data[0].url;
            console.log('Generated image URL:', imageUrl);
        }
    });
