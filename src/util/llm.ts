import * as vscode from 'vscode'; 
import { Node } from "typescript";
import { config } from "./vscode";
import { ChatCompletionMessageParam } from 'openai/resources/index.mjs';

const PROVIDERS: { [key: string]: Function } = {
    openai: fetchMockDataFromChatGPT
};

export async function fetchMockData(declarations: Node[]): Promise<any> {
    const providerSelected = config<string>('llm.provider');
    const provider = PROVIDERS[providerSelected];

    const message = declarations.map(node => node.getText()).join("\n\n");
    return provider!(message);
}

async function fetchMockDataFromChatGPT(message: string): Promise<any> {
    const { OpenAI } = await import('openai');
    
    const client = new OpenAI({ apiKey: config('llm.apiKey') });
    const model = config<string>('llm.model');
    const messages: ChatCompletionMessageParam[] = [
        { role: 'system', content: `Respond only in raw JSON data. Generate mock data for a REST API based off of any TypeScript declarations provided.` },
        { role: 'user', content: message }
    ];

    const completion = await client.chat.completions.create({
        model,
        messages,
        response_format: { type: 'json_object' }
    });
    
    const result = completion.choices[0].message;
    if (result === null) {
        vscode.window.showErrorMessage('Error generating mock data: Empty response from LLM.');
        return;
    }

    const mockData = JSON.parse(result.content!);
    return mockData;
}