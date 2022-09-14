import {
  AfterContentInit,
  Component,
  ContentChildren,
  QueryList,
} from '@angular/core';
import { NzTabComponent } from '../nz-tab/nz-tab.component';

@Component({
  selector: 'nz-tabset',
  templateUrl: './nz-tabset.component.html',
  styleUrls: ['./nz-tabset.component.scss'],
})
export class NzTabsetComponent implements AfterContentInit {
  @ContentChildren(NzTabComponent) tabs: QueryList<NzTabComponent>;

  constructor() {}

  ngAfterContentInit() {
    const activeTabs = this.tabs.filter((tab) => tab.active);

    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }

  public selectTab(tab: NzTabComponent) {
    this.tabs.toArray().forEach((tab) => (tab.active = false));
    tab.active = true;
  }
}
