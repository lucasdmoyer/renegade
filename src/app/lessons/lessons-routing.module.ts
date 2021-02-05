import { SimpleQuantModelComponent } from './simple-quant-model/simple-quant-model.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BalanceSheetComponent } from './balance-sheet/balance-sheet.component';
import { DerivativesComponent } from './derivatives/derivatives.component';
import { MacroEconomicsComponent } from './macro-economics/macro-economics.component';
import { FinCrisisTimelineComponent } from './fin-crisis-timeline/fin-crisis-timeline.component';
import { FutureForwardPricingComponent } from './future-forward-pricing/future-forward-pricing.component';
import { CommercialBanksComponent } from './commercial-banks/commercial-banks.component';

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
  },
  {
    path:'fin-crisis-timeline',
    component:FinCrisisTimelineComponent
  },
  {
    path: 'forward-future-pricing',
    component: FutureForwardPricingComponent
  },
  {
    path: 'commercial-banks',
    component: CommercialBanksComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LessonsRoutingModule { }
