import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child-button',
  templateUrl: './child-button.component.html',
  styleUrls: ['./child-button.component.css']
})
export class ChildButtonComponent implements OnInit {
 
  constructor() {   }
  @Output('sendtoparentfromchild') sendtoparentfromchild = new EventEmitter()
  inputtxt="";
 
  ngOnInit(): void {
  }

  sendinputvalue()
  {
    console.log(this.inputtxt)
    this.sendtoparentfromchild.emit(this.inputtxt);
  }
}


