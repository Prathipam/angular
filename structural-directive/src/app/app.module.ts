import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestIfComponent } from './test-if/test-if.component';
import { SwitchComponent } from './switch/switch.component';
import { ForDirComponent } from './for-dir/for-dir.component';

@NgModule({
  declarations: [
    AppComponent,
    TestIfComponent,
    SwitchComponent,
    ForDirComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
