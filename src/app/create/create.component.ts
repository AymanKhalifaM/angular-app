import { Component, OnInit } from '@angular/core';
import { HomeModel } from '../home/home.model';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  source="https://firebasestorage.googleapis.com/v0/b/looplap-8d5e7.appspot.com/o/create-section1.jpg?alt=media&token=0828ae2b-940b-4a73-960d-870203e03ad2";
create : HomeModel[]=[
  new HomeModel(faCheck,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi distinctio iusto, perspiciatis mollitia natus harum?"),
  new HomeModel(faCheck,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi distinctio iusto, perspiciatis mollitia natus harum?")
];
  

  constructor() { }

  ngOnInit(): void {
  }

}
