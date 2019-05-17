import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { WrapperComponent } from './wrapper/wrapper.component';
import { InputComponent } from './input/input.component';
import { PostComponent } from './post/post.component';
import { TimeagoModule, TimeagoFormatter, TimeagoCustomFormatter, TimeagoClock } from 'ngx-timeago';

@NgModule({
  declarations: [WrapperComponent, InputComponent, PostComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatProgressBarModule,
    TimeagoModule.forChild()
  ]
})
export class SearchModule { }
