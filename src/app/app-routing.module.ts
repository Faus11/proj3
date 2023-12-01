import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CmdkComponent } from './cmdk/cmdk.component';

const routes: Routes = [
  
  { path: '', redirectTo: 'cmdk', pathMatch: 'full' },
  { path: 'cmdk', component: CmdkComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
