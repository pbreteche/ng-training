import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TrainingThumbnailComponent } from './training-thumbnail/training-thumbnail.component';
import { TrainingDetailComponent } from './training-detail/training-detail.component';
import { TrainingCreateComponent } from './training-create/training-create.component';

@NgModule({
  declarations: [
    AppComponent,
    TrainingThumbnailComponent,
    TrainingDetailComponent,
    TrainingCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
