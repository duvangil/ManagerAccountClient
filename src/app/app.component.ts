import { TestService } from './services/test.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';

  constructor(private testservice: TestService) {
  }

  ngOnInit() {
    this.testservice.Login().subscribe(
      data => {
        console.log(data);
      }
    );
  }
}
