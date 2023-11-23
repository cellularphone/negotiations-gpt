import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-chat-interface',
  templateUrl: './chat-interface.component.html',
  styleUrls: ['./chat-interface.component.scss']
})
export class ChatInterfaceComponent {
  showChatGPT: boolean = true; // Initially show the ChatGPT-like section

 
  
  constructor(private http: HttpClient) {}
 // Function to toggle to chat interface when the conversation starts
  startChat() {
  this.showChatGPT = false;
  // Add any other logic related to starting the chat
  }
  sendUserInput(userInput: string) {
    // Call the GPT API with user input¨
    console.log("SEND TEST");
    this.showChatGPT = false;
    // this.http.post('YOUR_GPT_API_ENDPOINT', { message: userInput }).subscribe((response: any) => {
    //   console.log(response); // Handle the response from the GPT API
    //   // Display the response in the chat interface messages section
    // });
  }

  sendQuestion(input: string) {
    const question = input;
    console.log(question);
    
    this.sendUserInput(question); // Call the method to send the question to the API
  }

}
