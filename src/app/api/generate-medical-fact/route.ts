// app/api/generate-medical-fact/route.ts

import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';

// *** ADD THIS LINE FOR EDGE RUNTIME ***
export const runtime = 'edge';
// *************************************

const API_KEY = process.env.GEMINI_API_KEY;

if (!API_KEY) {
    console.error('ERROR: GEMINI_API_KEY environment variable is not set. Please check your .env.local file.');
}

const genAI = new GoogleGenerativeAI(API_KEY || '');

export async function GET(request: Request) {
    try {
        const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
        const prompt = `Provide a single, interesting, and verified medical fact about the human body. 
                        Also, provide a relevant medical category for this fact (e.g., Cardiology, Neurology, Dermatology, Physiology, etc.).
                        Format your response as a JSON object with two keys: "fact" (string) and "category" (string).
                        Example: {"fact": "The human brain generates enough electricity to power a small light bulb.", "category": "Neurology"}.`;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        let text = response.text();

        if (text.startsWith('```json')) {
            text = text.replace('```json\n', '').replace('\n```', '');
        } else if (text.startsWith('```')) {
            text = text.replace('```\n', '').replace('\n```', '');
        }

        console.log("Gemini Raw Response Text (after markdown removal):", text);

        let factData: { fact: string; category: string };
        try {
            factData = JSON.parse(text);
        } catch (jsonError) {
            console.error("ERROR: Failed to parse JSON from Gemini response:", jsonError);
            console.error("Problematic text received:", text);
            const factMatch = text.match(/"fact"\s*:\s*"(.*?)(?<!\\)"/);
            const categoryMatch = text.match(/"category"\s*:\s*"(.*?)(?<!\\)"/);

            if (factMatch && categoryMatch && factMatch[1] && categoryMatch[1]) {
                factData = {
                    fact: factMatch[1].replace(/\\"/g, '"'),
                    category: categoryMatch[1].replace(/\\"/g, '"')
                };
                console.warn("WARNING: JSON parsing failed, but successfully extracted data using regex.");
            } else {
                return NextResponse.json({ message: 'AI response was not valid JSON and could not be parsed.' }, { status: 500 });
            }
        }

        if (factData && typeof factData.fact === 'string' && typeof factData.category === 'string') {
            return NextResponse.json(factData, { status: 200 });
        } else {
            console.error("ERROR: AI response did not contain expected 'fact' and 'category' strings or they were not strings:", factData);
            return NextResponse.json({ message: 'AI generated data in an unexpected format. Please try again.' }, { status: 500 });
        }

    } catch (error: any) {
        console.error('ERROR: Failed to call Gemini API or internal server error:', error);
        return NextResponse.json({ message: 'Failed to generate medical fact from AI.', error: error.message }, { status: 500 });
    }
}