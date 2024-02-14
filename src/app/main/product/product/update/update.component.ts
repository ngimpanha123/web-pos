    // ==========================================================>> Core Library
    import { Component, EventEmitter, Inject, OnInit, ViewChild } from '@angular/core';
    import { NgForm, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
    import { ActivatedRoute } from '@angular/router';

    // ==========================================================>> Third Party Library
    import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
    import { MatTabsModule } from '@angular/material/tabs';

    // ==========================================================>> Custom Library
    import { SnackbarService } from 'app/shared/services/snackbar.service';
    import { ProductsService } from '../product.service';
    import { environment as env } from 'environments/environment';
    import { LoadingService } from 'helpers/services/loading';
    import { OverViewComponent } from './overview/update.component';
    @Component({
            selector: 'app-update',
            templateUrl: './update.component.html',
            styleUrls: ['./update.component.scss']
        })
        export class UpdateComponent implements OnInit {
            public FILE_PUBLIC_BASE_URL: string = env.FILE_PUBLIC_BASE_URL;
            @ViewChild('updateNgForm') updateNgForm: NgForm;
            yourDataObject: any;
            public saving: boolean = false;
            public update: UntypedFormGroup;
            public isLoading: boolean = false;
            public data: any = {};
            public mode: any;
            public src: string = 'assets/icons/icon-img.png';
            public products_type: any[][];
            public id: number;
            public isSearching = false;

            constructor(
            private _formBuilder: UntypedFormBuilder,
            private _productsService: ProductsService,
            private snackBar: SnackbarService,
            private _route: ActivatedRoute,
            ) {}
            ngOnInit(): void {
                this._route.paramMap.subscribe((params) => {
                    this.id = +params.get('id');
                });

                this.isSearching = true;

                this._productsService.view(this.id).subscribe(
                    (res: any) => {
                        this.data = res;
                        this.isSearching = false;
                        console.log('Data in UpdateComponent:', this.data);

                        // Uncomment the line below for testing the data flow
                        // this.overviewComponent.data = this.data;
                    },
                    (error) => {
                        console.error('Error loading data:', error);
                        this.isSearching = false;
                    }
                );
            }
        }


