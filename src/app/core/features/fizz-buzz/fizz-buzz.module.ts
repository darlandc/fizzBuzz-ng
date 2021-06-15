import { FizzBuzzComponent } from './fizzz-buzz.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisualNutsRule } from './rules/visual-nuts-rule';
import { NutsRule } from './rules/nuts-rule';
import { VisualRule } from './rules/visual-rule';

@NgModule({
  declarations: [FizzBuzzComponent],
  imports: [CommonModule],
  exports: [FizzBuzzComponent],
  providers: [VisualNutsRule, NutsRule, VisualRule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FizzBuzzModule {}
