import { Component, OnInit } from '@angular/core';
import { HomeModel } from '../home/home.model';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {
  source="https://firebasestorage.googleapis.com/v0/b/looplap-8d5e7.appspot.com/o/explore-section1.jpg?alt=media&token=cc772f7c-1764-49e8-812c-44ee48b3abf4";

  explore : HomeModel[] = [
    new HomeModel(faCheck,'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi distinctio iusto, perspiciatis mollitia natus harum?'),
    new HomeModel(faCheck,'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi distinctio iusto, perspiciatis mollitia natus harum?'),
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
