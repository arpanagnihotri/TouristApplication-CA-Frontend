import { Component, OnInit } from '@angular/core';
import { Tourist } from '../tourist';
import { TouristService } from '../tourist.service';

@Component({
  selector: 'app-tourist-list',
  templateUrl: './tourist-list.component.html',
  styleUrls: ['./tourist-list.component.css']
})
export class TouristListComponent implements OnInit {
  tourists!: Tourist[];
  displayedColumns = ['id','firstname','lastname','gender','age','fromplace','visitdays'];
  dataSource = this.tourists;
  constructor(private touristService: TouristService) { }

  ngOnInit(): void {
    this.getTourists();
  }
  private getTourists() {
    this.touristService.getTouristsList().subscribe((data: Tourist[]) => {
      this.tourists = data;
    });
  }

}
