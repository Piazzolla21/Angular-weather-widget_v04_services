import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';   
import { environment } from 'src/environments/environment';
import { Servizio01Service } from '../servizio01.service';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements OnInit, OnDestroy {

  AirData : any;
  subscription:Subscription;
  apiEndpoint=environment.apiEndpoint
  
  constructor(private serv01 : Servizio01Service) { }
  

  ngOnInit(): void {
    this.AirData= {
      main : {}
    }
    this.getAirData()
  }
  getAirData(){
    let observable=this.serv01.httpGet(this.apiEndpoint)
    this.subscription=observable.subscribe( httpResponse => { console.log(httpResponse); this.setAirData(httpResponse) })
  }

  setAirData(data : any) {
    this.AirData = data;
    let giorno = this.AirData[0].data
    this.AirData.giorno = giorno
    let desc = this.AirData[0].descrizione
    this.AirData.descrizione = desc
    let prev = this.AirData[0].previsione
    this.AirData.previsione = prev
    let tend = this.AirData[0].tendenza
    this.AirData.tendenza = tend
    

  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe() 
      console.log("oggetto WeatherWidgetMainComponent distrutto ")
    }
  }

}
