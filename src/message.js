const vscode = require("vscode");

export const showInfoMessage = (message) => {
  vscode.window.showInformationMessage(message);
};

export const showErrorMessage = (message) => {
  vscode.window.showErrorMessage(message);
};
