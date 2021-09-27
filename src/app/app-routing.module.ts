import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './dashboard/accounts/accounts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { KpisComponent } from './dashboard/kpis/kpis.component';
import { MembersListComponent } from './dashboard/members-list/members-list.component';
import { SettingsComponent } from './dashboard/settings/settings.component';
import { UploadComponent } from './dashboard/upload/upload.component';

const routes: Routes = [
  {
    path:'',
    component:DashboardComponent,
    children:[
      {
        path:'',
        component:KpisComponent
      },
      {
        path:'members',
        component:MembersListComponent
      },
      {
        path:'accounts',
        component:AccountsComponent
      },
      {
        path:'settings',
        component:SettingsComponent
      },
      {
        path:'upload',
        component:UploadComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
