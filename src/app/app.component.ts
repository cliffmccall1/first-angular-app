import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cliff McCall';
  city = 'Temple, Tx';
  tagLine = `"Like everything else, excellence is a habit." - Ben Bergeron`;
  aboutMe =
    "SURGEON GENERAL'S WARNING: I use to play in a southern rock / hardcore band, which has it's own Wikipedia page, and I'm listed as the bass player. When I tried to add my name to the list of famous people born on June 30th, Wikipedia said I wasn't famous enough. You'd think being listed in another Wikipedia article would be enough to be considered famous.";
}
