// ==========================================================>> Core Library
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// ==========================================================>> Custom Library
import { ProductModule } from 'app/main/product/product/product.module';
import { ProductTypeModule } from 'app/main/product/type/product-type.module';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'all',
                loadChildren: () => import('app/main/product/product/product.module').then(m => m.ProductModule)
            },
            {
                path: 'types',
                loadChildren: () => import('app/main/product/type/product-type.module').then(m => m.ProductTypeModule)
            }
        ]
    },
];

@NgModule({
    imports: [

        RouterModule.forChild(routes),
        ProductModule,
        ProductTypeModule

    ],
    exports: [

    ]
})
export class ProductMainModule{}
