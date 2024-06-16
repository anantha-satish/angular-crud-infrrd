import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeRecordsService } from '../../service/employee-records.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'editor-modal',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgIf],
  templateUrl: './editor-modal.component.html',
  styleUrl: './editor-modal.component.scss'
})
export class EditorModalComponent {
  @Input() public enableEditMode: boolean = false;
  @Input() public employeeCount: number = -1;
  @Input() public employee = {
    id: -1,
    name: "",
    company: "",
    email: "",
    contactNumber: "",
    designation: ""
  };
  @Output() public closeModal = new EventEmitter();

  constructor(private _employeeRecordsService: EmployeeRecordsService) { }

  public addEmployee() {
    const { name, company, email, contactNumber, designation } = this.employee;
    const data = {
      id: this.employeeCount + 1,
      name,
      company,
      email,
      contactNumber,
      designation
    };
    if (name && email) {
      this._employeeRecordsService.createEmployee(data).subscribe();
    }

    this._clearFields();
    this.closeModal.emit();
  }

  public updateEmployee() {
    this._employeeRecordsService.editEmployee(this.employee).subscribe();
    this._clearFields();
    this.closeModal.emit();
  }

  public cancelUpdate() {
    this._clearFields();
    this.closeModal.emit();
  }

  private _clearFields() {
    this.employee = {
      id: -1,
      name: "",
      company: "",
      email: "",
      contactNumber: "",
      designation: ""
    }
  }
}
