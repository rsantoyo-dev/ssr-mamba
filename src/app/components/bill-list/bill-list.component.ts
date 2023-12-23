import { Component, Input } from '@angular/core';
import { BillInfo } from '../..';
import { BillCardComponent } from "../bill-card/bill-card.component";

@Component({
    selector: 'app-bill-list',
    standalone: true,
    template: `
    <div class="p-5 bg-primary">
      @for (bill of bills; track bill.id) {
        <app-bill-card [bill]="bill"></app-bill-card>
      }
    </div>
  `,
    imports: [BillCardComponent]
})
export class BillListComponent {

  @Input() bills: BillInfo[] | undefined = [] as BillInfo[]; 
}
