import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import {MatButtonModule,
    MatCheckboxModule,
    MatExpansionModule, MatIconModule,
      MatListModule, MatMenuModule,
     MatSidenavModule,  MatToolbarModule } from '@angular/material';

@NgModule ({
    declarations: [],
    imports: [
        BrowserAnimationsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        MatSidenavModule,
        FlexLayoutModule,
        MatExpansionModule,
        MatListModule,
    ],
    providers: [],

})

export class MaterialModule { }
