import { Component, OnInit } from '@angular/core';
import { EthService } from 'src/services/eth/eth.service';
import { EthInterface } from 'src/app/interfaces/eth-interface';
// import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-eth',
  templateUrl: './eth.component.html',
  styleUrls: ['./eth.component.scss']
})
export class EthComponent implements OnInit{

  
//   ethData: EthInterface[];
//   ethFormattedDates: string[] = [];
//   lineChart = new Chart(); 

//   constructor(private ethService: EthService){}
  
  ngOnInit(){
//     this.getEthData();
//     // this.lineChart;
  }
  
//   getEthData(){
//     this.ethService.getEthPrice().subscribe((data: EthInterface[])=>{
//     this.ethData = data;
//     console.log(this.ethData);
  
//     for(let i = this.ethData.length - 1; i >= 0; i--){
//       const newDate: Date  = new Date(this.ethData[i].createdAt);
//       const year: number = newDate.getFullYear();
//       const mounth: number = newDate.getMonth() + 1;
//       const day: number = newDate.getDate(); 
      
//       const formattedDate = day + '-' + mounth + '-' + year;
//       this.ethFormattedDates.push(formattedDate);
//     }
//     console.log(this.ethFormattedDates);
    
//     this.lineChart;
//     this.lineChart = new Chart({
//       chart: {
//       type: 'line'
//     },
//     title: {
//       text: "Prix d'eth en euro"
//     },
//     credits: {
//       enabled: false
//     },
//     series: [
//       {
//         name: 'Line 1',
//         data: this.ethData.map((item: any) => parseFloat(item.ethValue)), // Specify the type as 'any'
//         borderColor: 'blue'
//       }as any
//     ]
//   })
  
// })
// }

// chart = new Chart({
//   chart: {
//     type: 'line'
//   },
//   title: {
//     text: 'Linechart'
//   },
//   credits: {
//     enabled: false
//   },
//   series: [
//     {
//       name: 'Line 1',
//       data: [1, 2, 4]
//     }as any,
//     {
//       name: 'Line 2',
//       data: [4, 2, 1]
//     }as any
//   ]
// });




// const ctx = document.getElementById('myChart');

// line = new Chart(ctx, {
//   type: 'bar',
//   data: {
//     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//     datasets: [{
//       label: '# of Votes',
//       data: [12, 19, 3, 5, 2, 3],
//       borderWidth: 1
//     }]
//   },
//   options: {
//     scales: {
//       y: {
//         beginAtZero: true
//       }
//     }
//   }
// });

    
//     for(let i = this.ethData.length - 1; i >= 0; i--){
//       this.ethData[i].createdAt = this.formatEthDate(this.ethData[i].createdAt)
//       console.log(this.ethData[i].createdAt);
        
//     })

//     // let newDate: Date  = new Date(date);
//     // let year :number = newDate.getFullYear();
//     // let month:number = newDate.getMonth() +1;
//     // let day :number = newDate.getDate();

//     // return` ${day}-${month}-${year}`;
//   }

//   formatEthDate(date: Date): string{

//     let formattedDate: Date  = new Date(date);
//     let year: number = formattedDate.getFullYear();
//     let mounth: number = formattedDate.getMonth() + 1;
//     let day: number = formattedDate.getDay(); 

//     return day + '-' + mounth + '-' + year;
//   }

}
