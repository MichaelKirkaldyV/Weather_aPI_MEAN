import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChicagoComponent } from './chicago/chicago.component';
import { SeattleComponent } from './seattle/seattle.component';
import { LosangelesComponent } from './losangeles/losangeles.component';
import { NewyorkComponent } from './newyork/newyork.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
	{ path: 'chicago', component: ChicagoComponent},
	{ path: 'seattle', component: SeattleComponent},
	{ path: 'losangeles', component: LosangelesComponent },
	{ path: 'newyork', component: NewyorkComponent },

	//Blank path will redirect back to chicago.
	{ path: '', pathMatch: 'full', redirectTo: '/chicago' },
  	// the ** will catch anything that did not match any of the above routes
  	{ path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
