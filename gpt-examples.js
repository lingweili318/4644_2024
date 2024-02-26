// Importing the OpenAI package

const OpenAIApi = require('openai');

const prompt = require("prompt-sync")(); // Package to get terminal prompt in node

//Declaring API key

// key = 'Your API key'

key = ''

// Adding API key

const openai = new OpenAIApi.OpenAI({
    apiKey: key
});

// Ask user for their prompt

const user_prompt = prompt("Enter your prompt: ");

// Format GPT input

const messages = [{role: "user", content: user_prompt}]

// Ask GPT function

const AskGPT = async(messages) => {
    try {
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: messages
        });
        console.log(response.choices[0].message.content)
    } catch (err) {
        console.log('Failed to send message', err);
    
    }
}


// Call the function on the message

AskGPT(messages)