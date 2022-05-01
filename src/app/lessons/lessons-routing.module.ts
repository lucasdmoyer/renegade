import { MarketingResearchComponent } from './marketing/marketing-research/marketing-research.component';
import { ProductManagementComponent } from './marketing/product-management/product-management.component';
import { ValuationComponent } from './valuation/valuation.component';
import { CreditRiskComponent } from './credit-risk/credit-risk.component';
import { VolatilitySmileComponent } from './volatility-smile/volatility-smile.component';
import { InterestRateRiskComponent } from './interest-rate-risk/interest-rate-risk.component';
import { SimpleQuantModelComponent } from './simple-quant-model/simple-quant-model.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BalanceSheetComponent } from './balance-sheet/balance-sheet.component';
import { DerivativesComponent } from './derivatives/derivatives.component';
import { MacroEconomicsComponent } from './macro-economics/macro-economics.component';
import { FinCrisisTimelineComponent } from './fin-crisis-timeline/fin-crisis-timeline.component';
import { FutureForwardPricingComponent } from './future-forward-pricing/future-forward-pricing.component';
import { CommercialBanksComponent } from './commercial-banks/commercial-banks.component';
import { OffBalanceSheetComponent } from './off-balance-sheet/off-balance-sheet.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { SwapsComponent } from './swaps/swaps.component';
import { FinancialMarketsComponent } from './financial-markets/financial-markets.component';
import { MortgageSecuritizationComponent } from './mortgage-securitization/mortgage-securitization.component';
import { OptionsMechanicsComponent } from './options-mechanics/options-mechanics.component';
import { OrganizationBuyingBehaviorComponent } from './marketing/organization-buying-behavior/organization-buying-behavior.component';
import { CorporationComponent } from '../lessions/corporation/corporation.component';

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
  },
  {
    path: 'off-balance-sheet',
    component: OffBalanceSheetComponent
  },
  {
    path: 'insurance',
    component: InsuranceComponent
  },
  {
    path: 'swaps',
    component: SwapsComponent
  },
  {
    path: 'financial-markets',
    component: FinancialMarketsComponent
  },
  {
    path: 'mortgage-securitization',
    component: MortgageSecuritizationComponent
  },
  {
    path: 'options-mechanics',
    component: OptionsMechanicsComponent
  },
  {
    path: 'interest-rate-risk',
    component: InterestRateRiskComponent
  },
  {
    path: 'volatility-smile',
    component: VolatilitySmileComponent
  },
  {
    path: 'credit-risk',
    component: CreditRiskComponent
  },
  {
    path: 'valuation',
    component: ValuationComponent
  },
  {
    path: 'marketing/product-management',
    component: ProductManagementComponent
  },
  {
    path: 'marketing/marketing-research',
    component: MarketingResearchComponent
  },
  {
    path: 'corporation',
    component: CorporationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LessonsRoutingModule { }
