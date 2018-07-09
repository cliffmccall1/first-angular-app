import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Skill } from '../../../shared/models/skill';
import { Level } from '../../../shared/types/level.enum';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  skills: Skill[] = [
    {
      id: 0,
      name: 'Angular',
      level: Level.Beginner
    },
    {
      id: 1,
      name: 'Chopping Wood',
      level: Level.Expert
    },
    {
      id: 2,
      name: 'Playing Bass (guitar... not the fish)',
      level: Level.Intermediate
    }
  ];

  getSkills = (): Observable<Skill[]> => {
    return of(this.skills);
  };
}
