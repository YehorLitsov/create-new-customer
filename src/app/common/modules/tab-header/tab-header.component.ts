import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-tab-header',
  templateUrl: './tab-header.component.html',
  styleUrls: ['./tab-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabHeaderComponent {
  @Input() headline: string = 'Some test headline';
  @Input() subHeadline: string = 'Some test subheadline';
}
