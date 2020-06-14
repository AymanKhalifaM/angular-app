import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-explore-head',
  templateUrl: './explore-head.component.html',
  styleUrls: ['./explore-head.component.css']
})
export class ExploreHeadComponent implements OnInit {
  

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  navigate(){
    this.router.navigate(['home'])
  }
}
