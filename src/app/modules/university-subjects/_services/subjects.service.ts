import { Injectable } from '@angular/core';
import {SubjectsHttpService} from './subjects-http'
@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

  constructor(private subjectHttpService : SubjectsHttpService) { }

  
}
