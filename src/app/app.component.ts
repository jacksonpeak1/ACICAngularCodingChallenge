import { Component } from '@angular/core';
import { LineOfBusiness } from './LineOfBusiness';
import { LineOfBusinessService } from './lineOfBusiness.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  linesOfBusiness: LineOfBusiness[] = [];

  constructor(private lineOfBusinessService: LineOfBusinessService) {}

  ngOnInit() {
    this.getLinesOfBusiness();
  }

  getLinesOfBusiness(): void {
    this.lineOfBusinessService
      .getLinesOfBusiness()
      .subscribe((linesOfBusiness) => {
        return (this.linesOfBusiness = linesOfBusiness.splice(0, 2));
      });
  }

  title = 'Agency Authority - Insurance Coverages Allowed to be Rated';
}
