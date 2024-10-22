import * as vscode from 'vscode';

export function getSelectedText(): string | undefined {
    const editor = vscode.window.activeTextEditor;
    if (editor) {
        const selection = editor.selection;
        const text = editor.document.getText(selection);
        return text;
    }
    return undefined;
}

export async function openJsonFileToSide(data: any) {
    const doc = await vscode.workspace.openTextDocument({
        language: 'json',
        content: JSON.stringify(data, null, 2)
    });
    return vscode.window.showTextDocument(doc, vscode.ViewColumn.Two, true);
}

export function config<T>(name: string): T {
    const config = vscode.workspace.getConfiguration(`chuckle`);
    const configValue = config.get<T>(name);
    if (configValue === undefined) {
        throw new Error(`chuckle.${name} is undefined.`);
    }
    return configValue;
}