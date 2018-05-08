import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginationComponent } from './components/pagination.component';
import { PaginationLabels } from './pagination.types';
import { PAGINATION_LABELS, DEFAULT_TRANSLATIONS } from './pagination.conf';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        PaginationComponent
    ],
    exports: [
        PaginationComponent
    ],
    providers: [
        { provide: PAGINATION_LABELS, useValue: DEFAULT_TRANSLATIONS }
    ]
})
export class PaginationModule {
    static forChild(
        paginationLabels: PaginationLabels
    ): ModuleWithProviders {
        return {
            ngModule: PaginationModule,
            providers: [
                { provide: PAGINATION_LABELS, useValue: paginationLabels }
            ]
        };
    }
}
