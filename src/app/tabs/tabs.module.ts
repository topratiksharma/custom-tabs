import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzTabsetComponent } from './nz-tabset/nz-tabset.component';
import { NzTabComponent } from './nz-tab/nz-tab.component';

@NgModule({
  declarations: [NzTabsetComponent, NzTabComponent],
  imports: [CommonModule],
  exports:[NzTabsetComponent, NzTabComponent]
})
export class TabsModule {}
