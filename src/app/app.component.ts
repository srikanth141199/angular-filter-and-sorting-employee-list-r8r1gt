import { Component} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  employees: Array<any> = [{ id: 1, name: "Sri"},
   { id: 2, name: "Ziva"}, 
   { id: 3, name: "Nikki"},
   { id: 4, name: "Charan" }];

  filterValue: Array<string> = [];
  order: boolean = false;
  constructor() {
    this.filterValue = this.employees;
  }

  filterByText(initial: string) {
    this.employees = this.filterValue;
    this.employees = this.employees.filter(i => i.name.toLowerCase().indexOf(initial.toLocaleLowerCase()) !== -1);
    console.log(this.employees);
  }
}
