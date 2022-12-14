import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FuseSplashScreenModule } from '@fuse/services/splash-screen';
import { FuseCardModule } from '@fuse/components/card';
import { FuseAlertModule } from '@fuse/components/alert';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatBadgeModule } from '@angular/material/badge';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatRippleModule } from '@angular/material/core';

import { NgApexchartsModule } from 'ng-apexcharts';
import { TranslocoModule } from '@ngneat/transloco';
import { ApiService } from './api.service';
import { WebcamModule } from 'ngx-webcam';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        FuseSplashScreenModule,
        FuseCardModule,
        FuseAlertModule,

        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatToolbarModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatChipsModule,
        MatDatepickerModule,
        MatSlideToggleModule,
        MatCardModule,
        MatDividerModule,
        MatInputModule,
        MatListModule,
        MatBadgeModule,
        MatGridListModule,
        MatButtonToggleModule,
        MatDialogModule,
        MatRadioModule,
        MatTooltipModule,
        MatSidenavModule,
        MatSelectModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        MatProgressSpinnerModule,
        MatProgressBarModule,
        MatTabsModule,
        MatExpansionModule,
        MatSnackBarModule,
        MatStepperModule,
        MatRippleModule,
        TranslocoModule,

        NgApexchartsModule,
        WebcamModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        FuseSplashScreenModule,
        FuseCardModule,
        FuseAlertModule,

        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatToolbarModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatChipsModule,
        MatDatepickerModule,
        MatSlideToggleModule,
        MatCardModule,
        MatDividerModule,
        MatInputModule,
        MatListModule,
        MatBadgeModule,
        MatGridListModule,
        MatButtonToggleModule,
        MatDialogModule,
        MatRadioModule,
        MatTooltipModule,
        MatSidenavModule,
        MatSelectModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        MatProgressSpinnerModule,
        MatProgressBarModule,
        MatTabsModule,
        MatExpansionModule,
        MatSnackBarModule,
        MatStepperModule,
        MatRippleModule,
        TranslocoModule,

        NgApexchartsModule,
        WebcamModule
    ],
    declarations: [
    ],
    entryComponents: [
    ],
    providers: [
        ApiService
    ]
})
export class SharedModule {
}
