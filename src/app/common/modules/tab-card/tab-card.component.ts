import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-tab-card',
  templateUrl: './tab-card.component.html',
  styleUrls: ['./tab-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabCardComponent {}
