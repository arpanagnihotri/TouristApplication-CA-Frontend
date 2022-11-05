import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tourist } from '../tourist';
import { TouristService } from '../tourist.service';

@Component({
  selector: 'app-add-tourist',
  templateUrl: './add-tourist.component.html',
  styleUrls: ['./add-tourist.component.css']
})
export class AddTouristComponent implements OnInit {
  tourist: Tourist = new Tourist();
  constructor(private touristService: TouristService, private router: Router) { }

  ngOnInit(): void {
  }

  addTourist() {
    this.touristService.createTourist(this.tourist).subscribe(data => {
      console.log(data);
      this.goToHome();
    },
      error => console.log(error));
  }

  goToHome() {
    this.router.navigate(['/']);
  }

  onSubmit() {
    console.log(this.tourist);
    alert("Successfully Registered !!")
    this.addTourist();
  }

}
