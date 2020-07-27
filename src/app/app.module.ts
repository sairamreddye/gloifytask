import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchboxComponent } from './searchbox/searchbox.component';
import { HttpClientModule  } from '@angular/common/http';
import { TweetsComponent } from './tweets/tweets.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchboxComponent,
    TweetsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
