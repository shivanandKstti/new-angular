import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Counter App';

  count: number = 0;

  handleIncrease = () => {
    if (this.count < 10) {
      this.count = this.count + 1;
    } else {
      alert(`You can increase up to 10 only`);
    }
  }

  handleDecrease = () => {
    if (this.count > 0) {
      this.count = this.count - 1;
    } else {
      alert('Decrease till 0 i think you reached count 0')
    }
  }

  handleReset = () => {
    this.count = 0;
  }
}