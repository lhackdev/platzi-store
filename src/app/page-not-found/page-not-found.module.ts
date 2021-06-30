import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PageNotFoundComponentRoutingModule } from './page-not-found-routing.module';
import { SharedModule } from '../shared/shared.module';




@NgModule({
    declarations: [
        PageNotFoundComponent
    ],
    imports: [
        PageNotFoundComponentRoutingModule,
        SharedModule
    ]
})
export class PageNotFoundModule{

}