import {Component, OnInit} from "@angular/core";
import {Message} from "../class/Message";
import {isDate} from "rxjs/internal-compatibility";


@Component({
  selector: 'app-haut',
  templateUrl: './haut.component.html',
  styleUrls: ['./haut.component.css']
})
export class HautComponent implements OnInit {

//La liste des messages est alimentée grâce à un tableau de messages créé en dur dans
// l’application.
lstMessage = Array<Message>();
message1 = new Message(1, "Ok google", "Actarus",new Date());
message2 = new Message(2, "Ok google", "Paul",new Date());
message3 = new Message(3, "Ok google", "Paul",new Date());

  constructor() {
  this.lstMessage = [this.message1,this.message2,this.message3];
  }

  ngOnInit(): void {
  }

}
