import DateTimeFormat = Intl.DateTimeFormat;

export  class RateModel {

  idrate: number;
  price: number;
  status: string;
  name: string;
  destination: string;
  date_schedule: DateTimeFormat;
  space_available: number;
  origin: string;

  constructor(idrate:number) {
  }

}
