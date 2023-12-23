import {computed, inject, Injectable, signal} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {toSignal} from "@angular/core/rxjs-interop";
import {BillInfo} from "../model";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StrapiCMSService {

  http = inject(HttpClient);
  rootUrl = 'http://localhost:1337/api/';


  bills = toSignal(
    this.http.get<{ data: BillInfo[] } | undefined>(this.rootUrl + 'bill-infos').pipe(
      map((data: any) => data?.data as BillInfo[] | undefined)
    ),
    {initialValue: [] as BillInfo[]}
  );



  getBills() {
    /*this.billsRequest.subscribe((data: any) => {
      console.log(data.data as BillInfo[])
      this.bills.set(data.data)
    });*/
  }

  getBillInfo(id: number) {
    return toSignal(this.http.get(this.rootUrl + 'bill-infos/' + id));
  }

}


/*
http.get('http://localhost:1337/api/bill-infos/1').
subscribe((data: any) => {
  this.billInfo.set(data.data)
});*/
