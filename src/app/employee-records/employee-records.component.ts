import { Component } from '@angular/core';
import { NgTableComponent } from './components/ng-table/ng-table.component';

@Component({
  selector: 'app-employee-records',
  standalone: true,
  imports: [NgTableComponent],
  templateUrl: './employee-records.component.html',
  styleUrl: './employee-records.component.scss'
})
export class EmployeeRecordsComponent {
}
