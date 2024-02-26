const OpenAIApi = require('openai');

const prompt = require("prompt-sync")(); 


key = ''

const openai = new OpenAIApi.OpenAI({
    apiKey: key
});



var messages = [{role: "system", content: 'You are a Python Helper. When the user asks questions about python, and you are to respond with a berif answer.'}]

const AskGPT = async() => {
    const user_prompt = prompt("Enter your prompt (or press enter to stop): ");

    if (user_prompt == ''){
        return
    }

    messages = [...messages, {role: "user", content: user_prompt}]
    try {
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: messages
        });
        const aiResponse  = response.choices[0].message.content
        console.log(aiResponse)
        messages = [...messages, {role: "assistant", content: aiResponse}]
        AskGPT()
    } catch (err) {
        console.log('Failed to send message', err);
    
    }
}

AskGPT()