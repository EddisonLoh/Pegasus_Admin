import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  handleError(error: any): void {
    // Force console log even if something is suppressing logs
    window['forceLog'] = function(msg) {
      var div = document.createElement('div');
      div.style.color = 'red';
      div.style.backgroundColor = 'white';
      div.style.padding = '10px';
      div.style.position = 'fixed';
      div.style.top = '10px';
      div.style.left = '10px';
      div.style.zIndex = '9999';
      div.innerHTML = msg;
      document.body.appendChild(div);
    };
    
    const errorMsg = error.message || JSON.stringify(error);
    console.error('Global error handler caught error:', error);
    window['forceLog']('ERROR: ' + errorMsg);
    
    // Try to log to an element on the page
    try {
      // Add a visible error message to the body
      const errorDiv = document.createElement('div');
      errorDiv.style.color = 'red';
      errorDiv.style.backgroundColor = 'white';
      errorDiv.style.padding = '20px';
      errorDiv.style.margin = '20px';
      errorDiv.style.border = '1px solid red';
      errorDiv.innerHTML = `<h3>Application Error</h3><p>${errorMsg}</p>`;
      document.body.appendChild(errorDiv);
    } catch (e) {
      console.error('Failed to add error to DOM', e);
    }
  }
} 