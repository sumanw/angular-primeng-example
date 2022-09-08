import { Component, Input } from '@angular/core';
//https://next.angular.io/api/common/NgOptimizedImage
@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent {
  @Input() name: string;
}
