import { Component } from '@angular/core';
import { ChatGptService } from '/Users/hannuvalve/negotiations-gpt/src/app/chat-gpt.service';

@Component({
  selector: 'app-chat-interface',
  templateUrl: './chat-interface.component.html',
  styleUrls: ['./chat-interface.component.scss'],
})
export class ChatInterfaceComponent {
  showChatGPT: boolean = true;
  userInput: string = '';
  messages: { text: string; isUser: boolean }[] = []; // Updated to store both user and GPT messages
  output: string = '';

  constructor(public chatGptService: ChatGptService) {}

  startChat() {
    this.showChatGPT = false;
  }

  sendUserInput(userInput: string) {
    this.userInput = userInput;
    this.sendUserMessage();
  }

  sendUserMessage() {
    if (this.userInput.trim() !== '') {
      this.showChatGPT = false;
      this.messages.push({ text: this.userInput, isUser: true }); // Store user message
      console.log(this.userInput);
      this.chatGptService.sendUserInput(this.userInput, 240).subscribe((response: any) => {
        this.output = response.choices[0].text;
        this.messages.push({ text: this.output, isUser: false }); // Store GPT response
        
      });

      this.userInput = ''; // Clear userInput after sending the message
    }
  }

  sendQuestion(input: string) {
    const question = input;
    this.sendUserInput(question);
  }
}
