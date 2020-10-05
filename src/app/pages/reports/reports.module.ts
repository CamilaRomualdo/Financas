import {NgModule} from '@angular/core';
import {SharedModule} from "../../shared/shared.module";
import {ReportsRoutingModule} from './reports-routing.module';
import {ReportsComponent} from './reports/reports.component';
import {ChartModule} from "primeng";

@NgModule({
  declarations: [ReportsComponent],
  imports: [
    SharedModule,
    ReportsRoutingModule,
    ChartModule
  ]
})
export class ReportsModule {
}
