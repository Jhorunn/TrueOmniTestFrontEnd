import { Component, OnInit } from '@angular/core';
import { CompanyInterface } from 'src/app/interfaces/company.interface';
import { CompaniesService } from 'src/app/services/companies.service';



@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {

  classBoolean: boolean = true;

  constructor(private readonly compService: CompaniesService) { }

  companies: CompanyInterface[] = [];
  page: number = 1;
  recodsPerpage: number = 30;
  showSpinner: boolean = true;

  ngOnInit(): void {
    this.showSpinner = true;
    this.getCompanies();
  }

  getCompanies(): void{
    this.showSpinner = true;
    this.compService.getCompanies(this.page, this.recodsPerpage).subscribe(companies => {
      companies.forEach(company => {
        if (company.image_List) {
          this.companies.push(company);
        }
      })
      this.showSpinner = false;
    });
  }

  onScroll() {
    this.page++;
    this.getCompanies();
  }

  changeContainer() {
    this.classBoolean = !this.classBoolean;
  }

}
