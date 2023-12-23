import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {toSignal} from "@angular/core/rxjs-interop";
import {BillInfo} from "../model";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OpenAIService {

  http = inject(HttpClient);
  rootUrl = 'http://localhost:1337/api/';


  bills = toSignal(
    this.http.get<{ data: BillInfo[] } | undefined>(this.rootUrl + 'bill-infos').pipe(
      map((data: any) => data?.data as BillInfo[] | undefined)
    ),
    {initialValue: [] as BillInfo[]}
  );

  constructor() { }
}
