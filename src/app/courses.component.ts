
import { Component } from "@angular/core";


@Component({
  selector: 'courses',
  template: `
      <button [style.backgroundColor]="isActive ? 'lightblue' : 'white'" 
              [style.borderStyle]="isActive ? 'solid' : 'hidden'"
              [style.borderWidth]="isActive ? '1px' : '5px'"
              [style.borderRadius]="isActive ? '15px' : '10px'"
              [style.padding]="isActive ? '10px 24px' : '14px 40px'"
      >Save</button>
    `
})
export class CoursesComponent {
  
  isActive = true;

  //Logic for calling an HTTP service
}