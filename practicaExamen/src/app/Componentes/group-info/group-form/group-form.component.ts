import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PlayerService } from 'src/app/Modelo/player-service.service';

@Component({
  selector: 'group-form',
  templateUrl: './group-form.component.html',
  styleUrls: ['./group-form.component.css']
})
export class GroupFormComponent {

  form:FormGroup;

  constructor(private playerService:PlayerService) {
    this.form=new FormGroup({
      name: new FormControl("",
        [
          Validators.required,
          Validators.maxLength(50)
        ]
      ),
      age: new FormControl("",
        [
          Validators.required,
          Validators.pattern("^[0-9]*$")
        ]
      )
    })
  }

  public addPlayer(name:string, age:string){
    this.playerService.addPlayer(name, Number.parseInt(age));
  }

}