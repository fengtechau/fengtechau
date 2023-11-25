import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ToolsComponent } from './tools/tools.component';
import { IpComponent } from './ip/ip.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent, data: { title: 'Feng Tech' } },
  {
    path: 'texttools',
    component: ToolsComponent,
    data: { title: 'Text Convertor' },
  },
  {
    path: 'ip',
    component: IpComponent,
    data: { title: 'Curent IP Address' },
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
