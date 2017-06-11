import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { ExpensesComponent } from './expenses.component';
import { ExpensesRouteModule } from './expenses-route.module';

@NgModule({
    declarations: [ExpensesComponent],
    imports: [NativeScriptModule, NativeScriptFormsModule, ExpensesRouteModule],
    exports: [ExpensesComponent],
    schemas: [NO_ERRORS_SCHEMA],
    providers: []
})
export class ExpensesModule {

}
