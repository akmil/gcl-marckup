import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/do';

import { TagInputAutocompleteComponent } from './components/tag-input-autocomplete/TagInputAutocompleteComponent';
import { TagInputComponent } from './components/tag-input/TagInput';
import { TagInputItemComponent } from './components/tag-input-item/TagInputItemComponent';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    TagInputAutocompleteComponent,
    TagInputComponent,
    TagInputItemComponent
  ],
  exports: [
    TagInputComponent
  ]
})
export class RlTagInputModule {}
