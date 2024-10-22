import * as vscode from 'vscode';
import { ExtensionContext } from "vscode";
import { getSelectedText, openJsonFileToSide } from "../util/vscode";
import { getDeclarations } from '../util/typescript';
import { fetchMockData } from '../util/llm';

export async function mockDataFromSelection(context: ExtensionContext) {

    const selectedText = getSelectedText();
    if (selectedText === undefined) {
        vscode.window.showErrorMessage('No text selected.');
        return;
    }

    const declarations = getDeclarations(selectedText);
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