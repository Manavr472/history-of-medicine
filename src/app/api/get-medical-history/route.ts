// app/api/get-medical-history/route.ts

import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';

export const runtime = 'edge';

const API_KEY = process.env.GEMINI_API_KEY;

if (!API_KEY) {
    console.error('ERROR: GEMINI_API_KEY environment variable is not set. Please check your .env.local file.');
}

const genAI = new GoogleGenerativeAI(API_KEY || '');

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const month = searchParams.get('month');
        const day = searchParams.get('day');

        if (!month || !day) {
            return NextResponse.json({ message: 'Month and day parameters are required' }, { status: 400 });
        }

        const monthNames = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];

        const monthName = monthNames[parseInt(month) - 1];
        const model = genAI.getGenerativeModel({ model: 'gemini-2.5-pro' });
        
        const prompt = `As a medical historian, provide 2-3 significant historical medical events, discoveries, or breakthroughs that occurred on ${monthName} ${day} throughout history. Focus on:
        - Major medical discoveries
        - Groundbreaking surgical procedures
        - Important medical inventions or technologies
        - Significant developments in medical treatment
        - Notable births or deaths of influential medical figures

        Format your response as a JSON array with objects containing:
        - year (number, the year the event occurred)
        - title (string, a concise headline)
        - description (string, 2-3 detailed sentences about the event)
        - importance (array of strings, 2-3 points about the historical significance)

        Example format:
        [
          {
            "year": 1928,
            "title": "Alexander Fleming Discovers Penicillin",
            "description": "Dr. Alexander Fleming accidentally discovered penicillin when he noticed that mold growing on a Staphylococcus culture plate had created a bacteria-free zone. This observation led to the development of the first antibiotic drug.",
            "importance": [
              "Launched the age of antibiotics in modern medicine",
              "Saved millions of lives by providing treatment for previously deadly bacterial infections"
            ]
          }
        ]

        Ensure all information is historically accurate and verified. Include exact dates and proper names where possible.`;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        let text = response.text();

        // Clean up the response if it contains markdown code blocks
        if (text.startsWith('```json')) {
            text = text.replace('```json\n', '').replace('\n```', '');
        } else if (text.startsWith('```')) {
            text = text.replace('```\n', '').replace('\n```', '');
        }

        try {
            const events = JSON.parse(text);
            return NextResponse.json(events, { status: 200 });
        } catch (jsonError) {
            console.error("ERROR: Failed to parse JSON from Gemini response:", jsonError);
            return NextResponse.json({ message: 'Failed to parse AI response' }, { status: 500 });
        }

    } catch (error: any) {
        console.error('ERROR:', error);
        return NextResponse.json({ message: 'Failed to generate medical history events', error: error.message }, { status: 500 });
    }
}
