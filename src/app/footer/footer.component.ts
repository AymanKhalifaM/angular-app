import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormComponent } from '../home/form/form.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  constructor(private modalService: NgbModal) {}

  open() {
    const modalRef = this.modalService.open(FormComponent);
  }

  ngOnInit(): void {
  }

}
