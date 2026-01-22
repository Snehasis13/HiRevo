
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY;

async function listModels() {
    if (!apiKey) {
        console.error("No API key found in environment variables.");
        return;
    }

    const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.error) {
            console.error("Error fetching models:", data.error);
        } else {
            console.log("Available Models:");
            data.models?.forEach((m: any) => {
                console.log(`- ${m.name}`);
            });
        }
    } catch (error) {
        console.error("Request failed:", error);
    }
}

listModels();
