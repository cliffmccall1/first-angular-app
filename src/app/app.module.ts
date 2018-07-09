import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GreetingComponent } from './components/greeting/greeting.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { NewcontactComponent } from './components/newcontact/newcontact.component';
import { SkillsModule } from './modules/skills/skills.module';
import { ContactsModule } from './modules/contacts/contacts.module';

@NgModule({
  declarations: [
    AppComponent,
    GreetingComponent,
    ContactFormComponent,
    NewcontactComponent
  ],
  imports: [BrowserModule, FormsModule, SkillsModule, ContactsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
