import { Country } from './../../models/country.model';
import { Observable } from 'rxjs';
import { GetDataService } from 'src/app/services/get-data.service';
import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
})
export class CountriesComponent implements OnInit {
  country$: Observable<Country>;
  constructor(private data: GetDataService) {}

  ngOnInit(): void {}
  selected(e): void {
    this.country$ = this.data.getCountry(e);
    this.country$.subscribe((data) => console.log(data));
  }
}
