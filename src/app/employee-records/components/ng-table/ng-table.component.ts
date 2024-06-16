import { Component, Input, OnInit } from '@angular/core';
import { JsonPipe, NgIf, TitleCasePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Employee } from '../../models/employee.model';
import { EmployeeRecordsService } from '../../service/employee-records.service';
import { FilterPipe } from '../../pipes/filter.pipe';
import { EditorModalComponent } from '../editor-modal/editor-modal.component';
import { NgTableHeaderComponent } from '../ng-table-header/ng-table-header.component';

@Component({
  selector: 'ng-table',
  standalone: true,
  imports: [JsonPipe, NgIf, TitleCasePipe, FilterPipe, FormsModule, ReactiveFormsModule, EditorModalComponent, NgTableHeaderComponent],
  templateUrl: './ng-table.component.html',
  styleUrl: './ng-table.component.scss'
})
export class NgTableComponent implements OnInit {
  @Input() searchText: string = '';
  public records: Employee[] = [];
  public columns: any[] = [
    {
      id: 1,
      label: "Name",
      category: "name"
    },
    {
      id: 2,
      label: "Company",
      category: "company"
    },
    {
      id: 3,
      label: "Email Id",
      category: "email"
    },
    {
      id: 4,
      label: "Contact No.",
      category: "contactNumber"
    },
    {
      id: 5,
      label: "Designation",
      category: "designation"
    }
  ];
  public employee = {
    id: 0,
    name: "",
    company: "",
    email: "",
    contactNumber: "",
    designation: ""
  };
  public enableEditor: boolean = false;
  public enableEditMode: boolean = false;

  constructor(private _employeeRecordsService: EmployeeRecordsService) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  searchTable(value: string): void {
    this.searchText = value;
  }

  filterColumnData(event: Event, colName: string) {
    const filterValue = (event.target as HTMLInputElement).value;
    if (filterValue.length) {
      this.records = this.records.filter((a: any) => {
        return a[colName].toLowerCase().indexOf(filterValue.toLowerCase()) !== -1;
      });
    } else {
      this.getEmployees();
    }
  }

  getEmployees() {
    this._employeeRecordsService.getEmployees().subscribe((response) => {
      this.records = response;
    });
  }

  createEmployee(): void {
    this.employee = {
      id: -1,
      name: "",
      company: "",
      email: "",
      contactNumber: "",
      designation: ""
    };
    this.enableEditor = true;
    this.enableEditMode = false;
  }

  editEmployee(employee: Employee) {
    this.employee = employee;
    this.enableEditor = true;
    this.enableEditMode = true;
  }


  removeEmployee(employee: Employee) {
    const id = Number(employee.id);
    this._employeeRecordsService.deleteEmployee(id).subscribe();
    this.getEmployees();
  }

  closeModal(): void {
    this.enableEditor = false;
    this.getEmployees();
  }
}
