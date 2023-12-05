import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { ChatInterfaceComponent } from './chat-interface/chat-interface.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

const routes: Routes = [
  { path: 'about',component: AboutPageComponent},
  { path: 'contact',component: ContactPageComponent},
  { path: '', component: ChatInterfaceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
