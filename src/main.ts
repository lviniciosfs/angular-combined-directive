import { Submit } from './app/submit';
import { Component, signal } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  imports: [
    Submit
  ],
  template: `
    <button appSubmit [pending]="isSaving()" (click)="go()">Submit</button>
  `,
})
export class App {
  name = 'Angular';
  isSaving = signal(false);

  go(){
    this.isSaving.set(true);
    setTimeout(() => {this.isSaving.set(false)}, 5000)
  }
}

bootstrapApplication(App);
