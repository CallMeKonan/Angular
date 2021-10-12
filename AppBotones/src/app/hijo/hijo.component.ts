import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {

  @Input() escondido = false;

  ngOnChages(changes: SimpleChanges){
  }

}
