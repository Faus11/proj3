import { Component } from '@angular/core';

@Component({
  selector: 'app-cmdk',
  templateUrl: './cmdk.component.html',
  styleUrls: [
    './cmdk.component.css'
  ]
  
})
export class CmdkComponent {
  value = 'Linear';
  setValue(value: string) {
    this.value = value;
  }
}
