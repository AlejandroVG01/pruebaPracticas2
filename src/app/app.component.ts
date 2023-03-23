import { Component } from '@angular/core';
import { ApexOptions,ApexChart  } from 'ng-apexcharts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'graficas';
  
  series = [
    {
      name: "Ventas",
      data: [30, 40, 45, 50, 49]
    }
  ];
  
  chart: ApexChart = {
      type: "bar",
      height: 350
  };
  
  xaxis = {
    categories: ["Enero", "Febrero", "Marzo", "Abril", "Mayo"]
  };
  fill = {
    colors: ['#FF4560', '#008FFB', '#00E396', '#FEB019', '#775DD0']
  };
}
