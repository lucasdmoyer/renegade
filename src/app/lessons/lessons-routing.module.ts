import { SimpleQuantModelComponent } from './simple-quant-model/simple-quant-model.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BalanceSheetComponent } from './balance-sheet/balance-sheet.component';
import { DerivativesComponent } from './derivatives/derivatives.component';
import { MacroEconomicsComponent } from './macro-economics/macro-economics.component';

const routes: Routes = [
  {
    path: 'balance-sheet',
    component:BalanceSheetComponent
  },
  {
    path:'simple-quant-model',
    component:SimpleQuantModelComponent
  },
  {
    path:'derivatives',
    component:DerivativesComponent
  },
  {
    path:'macro-economics',
    component:MacroEconomicsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LessonsRoutingModule { }
