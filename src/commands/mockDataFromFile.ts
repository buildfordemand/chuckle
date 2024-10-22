import * as vscode from 'vscode';
import { ExtensionContext } from "vscode";
import { getSelectedText, openJsonFileToSide } from "../util/vscode";
import { getDeclarations } from '../util/typescript';
import { fetchMockData } from '../util/llm';

export async function mockDataFromFile(context: ExtensionContext) {

    const textEditor = vscode.window.activeTextEditor;
    if (textEditor === undefined) {
        vscode.window.showErrorMessage('No text editor focused.');
        return;
    }
    
    const text = textEditor.document.getText();
    const declarations = getDeclarations(text);
    if (declarations.length === 0) {
        vscode.window.showErrorMessage('No TypeScript declarations selected.');
        return;
    }

    let mockData;
    try {
        mockData = await fetchMockData(declarations);
    } catch (e) {
        vscode.window.showErrorMessage(`Error generating mock data: ${e}`);
        return;
    }

    openJsonFileToSide(mockData);
}