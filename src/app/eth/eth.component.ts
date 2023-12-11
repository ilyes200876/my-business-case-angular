import { Component, OnInit, ViewChild } from '@angular/core';
import { EthService } from 'src/services/eth/eth.service';
import { EthInterface } from 'src/app/interfaces/eth-interface';
import { Chart } from 'chart.js/auto'

@Component({
  selector: 'app-eth',
  templateUrl: './eth.component.html',
  styleUrls: ['./eth.component.scss']
})
export class EthComponent implements OnInit{

  ethData: EthInterface[];
  ethFormattedDates: string[] = [];
  ethPrices: number[] = [];
  canvas: any;
  ctx: any;
  @ViewChild('mychart') mychart: any;

  constructor(private ethService: EthService){}
  
  ngOnInit(){
    this.getEthData();
  }
  
  getEthData(){
    this.ethService.getEthPrice().subscribe((data: EthInterface[])=>{
    this.ethData = data;
    console.log(this.ethData);
  
    for(let i = this.ethData.length - 1; i >= 0; i--){
      this.ethPrices.push(this.ethData[i].ethValue)
      const newDate: Date  = new Date(this.ethData[i].createdAt);
      const year: number = newDate.getFullYear();
      const mounth: number = newDate.getMonth() + 1;
      const day: number = newDate.getDate(); 
      
      const formattedDate = day + '-' + mounth + '-' + year;
      this.ethFormattedDates.push(formattedDate);
    }
    
    this.canvas = this.mychart.nativeElement;
    this.ctx = this.canvas.getContext('2d');
    
    new Chart(this.ctx, {
      type: 'line',
      data: {
        datasets: [{
          label: 'EthValue',
          data: this.ethPrices,
          backgroundColor: 'rgb(115 185 243 / 65%',
          fill: true,
        }],
        labels: this.ethFormattedDates
      }
    });
    })
  }
}