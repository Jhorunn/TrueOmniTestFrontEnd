import { Component, Input, OnInit } from '@angular/core';
import { CompanyInterface } from 'src/app/interfaces/company.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-companies-card',
  templateUrl: './companies-card.component.html',
  styleUrls: ['./companies-card.component.css']
})
export class CompaniesCardComponent implements OnInit {

  constructor() { }

  @Input() company!: CompanyInterface;

  imageUrl: string = "";

  ngOnInit(): void {
    this.imageUrl = this.company.image_List.split('|')[0];
  }

  popUp() {
    Swal.fire({
      title: this.company.company,
      html: this.company.description,
      imageUrl: this.imageUrl,
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Custom image',
    })
  }

}
