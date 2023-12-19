import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ChatGptService {
  
  private apiUrl = 'https://api.openai.com/v1/completions'; // Proxy server URL + OpenAI API URL
  
  constructor(private http: HttpClient) {}
  
  sendUserInput(prompt: string, maxTokens: number): Observable<any> {
    
    const body = {
      // model: 'gpt-3.5-turbo-0613',
      model: 'text-davinci-003',
      prompt,
      max_tokens: maxTokens,
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${environment.apiKey}`
    });
    const options = { headers };
    return this.http.post<any>(this.apiUrl, body, options);
    // Add loop if null
  }

}
