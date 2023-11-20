import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ComponentsComponent } from './components/components.component';



@NgModule({
  declarations: [
    ProductComponent,
    ComponentsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductModule { }
