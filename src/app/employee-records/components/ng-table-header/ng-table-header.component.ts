import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../../pipes/filter.pipe';

@Component({
  selector: 'ng-table-header',
  standalone: true,
  imports: [FormsModule, FilterPipe],
  templateUrl: './ng-table-header.component.html',
  styleUrl: './ng-table-header.component.scss'
})
export class NgTableHeaderComponent {
  @Output() public tableSearch = new EventEmitter<string>();
  @Output() public createRecord = new EventEmitter();
  public searchText: string = '';
  public getResults(): void {
    this.tableSearch.emit(this.searchText);
  }
  public addNewEmployee(): void {
    this.createRecord.emit();
  }
}
