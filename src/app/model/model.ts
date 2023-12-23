export type BillInfo = {
  id?: number;
  attributes?: BillInfoAttributes,
  meta?: Object;
}

export type BillInfoAttributes = {
  totalAmount: number;
  tps: number;
  tvq: number;
  otherTax: number;
  country: string;
  province: string;
}

export type StrapiResponse = {
  data?: any[],
  meta?: any;
}
