import * as ts from 'typescript';

export function getDeclarations(selectedText: string): ts.Node[] {
    const sourceFile = ts.createSourceFile(
        'temp.ts', 
        selectedText, 
        ts.ScriptTarget.Latest, 
        true, 
        ts.ScriptKind.TS
    );

    let declarations: ts.Node[] = [];
    function checkNode(node: ts.Node) {
        if (ts.isTypeAliasDeclaration(node) || ts.isInterfaceDeclaration(node)) {
            declarations.push(node);
            return;
        }
        ts.forEachChild(node, checkNode);
    }

    checkNode(sourceFile);
    return declarations;
}