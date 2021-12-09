import { Component } from '@angular/core';

@Component({
  selector: 'app-group-info',
  templateUrl: './group-info.component.html',
  styleUrls: ['./group-info.component.css']
})
export class GroupInfoComponent {

  private _seeForm:boolean;
  private _darkTheme:boolean;

  constructor() {
    this._darkTheme=false;
    this._seeForm=false;
  }

  get darkTheme(){
    return this._darkTheme;
  }
  
  get seeForm(){
    return this._seeForm;
  }

  public getValue(dark:boolean){
    this._darkTheme=dark;
  }

  public showForm(){
    this._seeForm=!this._seeForm;
  }

}
