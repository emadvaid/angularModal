import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ModalComponent } from './components/modal/modal.component';
import { TestComponent } from './components/test-component/test.component';
import { TestModalComponent } from './components/test-modal/test-modal.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ModalComponent,
    TestComponent,
    TestModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [NgbActiveModal],
  bootstrap: [AppComponent],
  entryComponents: [
    TestModalComponent
  ]
})
export class AppModule { }
