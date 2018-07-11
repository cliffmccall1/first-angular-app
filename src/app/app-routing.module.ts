import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { SkillsComponent } from './modules/skills/component/skills/skills.component';
import { GreetingComponent } from './components/greeting/greeting.component';
import { DisplayMoviesComponent } from './modules/movies/display-movies/display-movies.component';
import { DisplayMusicComponent } from './modules/music/display-music/display-music.component';

const routes: Routes = [
  {
    path: 'music',
    component: DisplayMusicComponent
  },
  {
    path: 'movies',
    component: DisplayMoviesComponent
  },
  {
    path: 'contact',
    component: ContactFormComponent
  },
  {
    path: 'skills',
    component: SkillsComponent
  },
  {
    path: 'greeting',
    component: GreetingComponent
  },
  {
    path: '',
    redirectTo: '/greeting',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
