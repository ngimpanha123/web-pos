// ==========================================================>> Core Library
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// ==========================================================>> Custom Library
import { SharedModule } from 'app/shared/shared.module';
import { ScrollbarModule } from 'helpers/directives/scrollbar';
import { ListingComponent } from './listing/listing.component';
import { CreateComponent } from './create/create.component';
import { ViewComponent } from './view/view.component';
import { OverViewComponent } from './view/overview/overview.component';
import { OrderTransactionComponent } from './view/order_transaction/order_transaction.component';
import { MatTableModule } from '@angular/material/table';

const productsRoutes: Routes = [
    {
        path: '',
        component: ListingComponent
    },
    {
        path: ':id/view',
        component: ViewComponent
    }

];

@NgModule({
    imports: [
        SharedModule,
        ScrollbarModule,
        RouterModule.forChild(productsRoutes),
        MatTableModule,

    ],
    declarations: [
        ListingComponent,
        CreateComponent,
        ViewComponent,
        OverViewComponent,
        OrderTransactionComponent
    ]
})
export class ProductModule {}
