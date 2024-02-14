// ==========================================================>> Core Library
import { Component, EventEmitter, Inject, OnInit, ViewChild, Input } from '@angular/core';
import { NgForm, UntypedFormBuilder, UntypedFormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

// ==========================================================>> Third Party Library
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

// ==========================================================>> Custom Library
import { SnackbarService } from 'app/shared/services/snackbar.service';
import { ProductsService } from '../../product.service';
import { environment as env } from 'environments/environment';
import { LoadingService } from 'helpers/services/loading';


@Component({
    selector: 'app-order-services',
    templateUrl: './update.component.html',
    styleUrls: ['./update.component.scss'],
})
export class OrderTransactionComponent implements OnInit {
    @ViewChild('updateNgForm') updateNgForm: NgForm;
    @Input() public data: any;
    public FILE_PUBLIC_BASE_URL: string = env.FILE_PUBLIC_BASE_URL;
    form: UntypedFormGroup;
    public src: string = 'assets/icons/icon-img.png';
    isLoading: boolean = false;
    public type:any;


    constructor(
        private _snackBar: SnackbarService,
        private productService: ProductsService,
        private readonly _router: Router,
        private formBuilder: UntypedFormBuilder
    ) {}

    ngOnInit(): void {

}







}
