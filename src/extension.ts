import * as vscode from 'vscode';
import * as commands from './commands';

export function activate(context: vscode.ExtensionContext) {

	for (const commandName in commands) {
		const typedCommand = commandName as keyof typeof commands;
		context.subscriptions.push(vscode.commands.registerCommand(`chuckle.${commandName}`, commands[typedCommand]));
	}

}

export function deactivate() {

}