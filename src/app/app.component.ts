import { GetDataService } from 'src/app/services/get-data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private dataService: GetDataService) {
    this.dataService.loadSummary().subscribe((res) => {
      console.info(res.Message || 'Data Saved to Session Storage.');
      return sessionStorage.setItem('Data', JSON.stringify(res));
    });
  }
}
