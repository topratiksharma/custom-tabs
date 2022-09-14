import { Component, Input } from '@angular/core';

@Component({
  selector: 'nz-tab',
  templateUrl: 'nz-tab.component.html',
  styleUrls: ['nz-tab.component.scss'],
})
export class NzTabComponent {
  constructor() {}

  @Input() nzTitle: string;
  @Input() active = false;
}
