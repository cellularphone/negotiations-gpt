import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatGptService {
  
  // private apiKey = '' // Replace with your API key
  private apiUrl = 'https://api.openai.com/v1/completions'; // Proxy server URL + OpenAI API URL
  // private apiKey= environment.API_KEY
  private apiKey = ""

  // Use apiKey in your application logic
  
  constructor(private http: HttpClient) {}
  
  sendUserInput(prompt: string, maxTokens: number, temperature: number): Observable<any> {
    
    const body = {
      model: 'text-davinci-003',
      prompt,
      max_tokens: maxTokens,
      temperature: temperature,
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.apiKey}`
    });
    const options = { headers };
    return this.http.post<any>(this.apiUrl, body, options);
    // Add loop if null

    
  }

}
