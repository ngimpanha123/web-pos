// ==========================================================>> Core Library
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// ==========================================================>> Custom Library
import { SharedModule } from 'app/shared/shared.module';
import { ScrollbarModule } from 'helpers/directives/scrollbar';
import { ListingComponent } from './listing/listing.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { OverViewComponent } from './update/overview/update.component';
import { OrderTransactionComponent } from './update/order_transaction/update.component';
import { MatTableModule } from '@angular/material/table';

const productsRoutes: Routes = [
    {
        path: '',
        component: ListingComponent
    },
    {
        path: ':id/update',
        component: UpdateComponent
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
        UpdateComponent,
        OverViewComponent,
        OrderTransactionComponent
    ]
})
export class ProductModule {}
