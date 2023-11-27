import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-chat-interface',
  templateUrl: './chat-interface.component.html',
  styleUrls: ['./chat-interface.component.scss']
})
export class ChatInterfaceComponent {
  showChatGPT: boolean = true; // Initially show the ChatGPT-like section
  userInput: string = ''; // Initialize or define userInput in your component
  messages: string[] = []; // Array to store user messages
  
  
  constructor(private http: HttpClient) {}
 // Function to toggle to chat interface when the conversation starts
  startChat() {
  this.showChatGPT = false;
  // Add any other logic related to starting the chat
  }
  sendUserInput(userInput: string) {
    // Call the GPT API with user input¨
    console.log(userInput);
    this.showChatGPT = false;
    this.userInput = userInput;
    // this.http.post('YOUR_GPT_API_ENDPOINT', { message: userInput }).subscribe((response: any) => {
    //   console.log(response); // Handle the response from the GPT API
    //   // Display the response in the chat interface messages section
    // });
    this.sendUserMessage()
  }
  sendUserMessage() {
    if (this.userInput.trim() !== '') {
      this.messages.push(this.userInput); // Add user message to the array
      // Optionally, you can perform any sending logic here if needed
      this.userInput = ''; // Clear userInput after sending the message
    }
  }
  sendQuestion(input: string) {
    const question = input;
    this.sendUserInput(question); // Call the method to send the question to the API
  }
  sendMessage() {
    // Handle sending the user input
    console.log("User input: " + this.userInput);
    // You can perform actions like sending the user input to the chat system, etc.
  }
}
