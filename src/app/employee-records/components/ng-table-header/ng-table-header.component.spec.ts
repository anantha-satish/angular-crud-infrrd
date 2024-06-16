import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTableHeaderComponent } from './ng-table-header.component';

describe('NgTableHeaderComponent', () => {
  let component: NgTableHeaderComponent;
  let fixture: ComponentFixture<NgTableHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgTableHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgTableHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
