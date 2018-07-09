import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { SkillsComponent } from './modules/skills/component/skills/skills.component';
import { GreetingComponent } from './components/greeting/greeting.component';

const routes: Routes = [
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