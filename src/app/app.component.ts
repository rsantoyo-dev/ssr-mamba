import {Component, computed, inject, OnInit, signal, WritableSignal} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {HttpClient} from "@angular/common/http";
import {SjDirective} from "super-jss";
import {BillInfo} from "./model";
import {StrapiCMSService} from "./service/strapi-cms.service";
import { BillCardComponent } from "./components/bill-card/bill-card.component";
import { BillListComponent } from "./components/bill-list/bill-list.component";

@Component({
    selector: 'app-root',
    standalone: true,
    template: `
    <div class="p-5 bg-primary">
      <app-bill-list [bills]="strapi.bills()"></app-bill-list>
    </div>
  `,
    imports: [CommonModule, RouterOutlet, SjDirective, BillCardComponent, BillListComponent]
})

export class AppComponent implements OnInit{
  title = 'ssr-mamba';

  strapi = inject(StrapiCMSService);

  ngOnInit() {}

}
