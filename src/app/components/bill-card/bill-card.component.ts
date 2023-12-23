import {Component, Input} from '@angular/core';
import {BillInfo} from "../../model";

@Component({
  selector: 'app-bill-card',
  standalone: true,
  imports: [],
  template: `
    <div class="flex p-5 bg-light">
      <div class="p-5">
       {{bill.id}}
      </div>
      <div class="p-5">
       {{bill.attributes?.totalAmount}}
      </div>
    </div>
  `
})




export class BillCardComponent {

  @Input() bill: BillInfo = {} as BillInfo;
  
}
