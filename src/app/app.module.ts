import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TrainingThumbnailComponent } from './training-thumbnail/training-thumbnail.component';
import { TrainingDetailComponent } from './training-detail/training-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TrainingThumbnailComponent,
    TrainingDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
