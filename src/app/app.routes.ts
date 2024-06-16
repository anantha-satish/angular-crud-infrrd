import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeeRecordsComponent } from './employee-records/employee-records.component';

export const routes: Routes = [
    {
        path: 'employee-record',
        component: EmployeeRecordsComponent
    },
    { path: '', redirectTo: '/employee-record', pathMatch: 'full' }, // redirect to `first-component`
    { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];