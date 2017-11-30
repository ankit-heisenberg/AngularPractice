import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common'

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { TvserieslistService } from './services/tvserieslist/tvserieslist.service';
import { SaveformComponent } from './saveform/saveform.component';
import { BoldDirective } from './directives/bold/bold.directive';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    SaveformComponent,
    BoldDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule
  ],
  providers: [TvserieslistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
