import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GreetingComponent } from './components/greeting/greeting.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { NewcontactComponent } from './components/newcontact/newcontact.component';
import { SkillsModule } from './modules/skills/skills.module';
import { ContactsModule } from './modules/contacts/contacts.module';
import { AppRoutingModule } from './/app-routing.module';
import { MoviesModule } from './modules/movies/movies.module';
import { MusicModule } from './modules/music/music.module';

@NgModule({
  declarations: [
    AppComponent,
    GreetingComponent,
    ContactFormComponent,
    NewcontactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SkillsModule,
    ContactsModule,
    MoviesModule,
    AppRoutingModule,
    MusicModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
