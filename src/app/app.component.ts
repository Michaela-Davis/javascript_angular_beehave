import { Component } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Beehave';

  masterFoodList: Food[] = [
    new Food('Mango', '1 mango contains 46 grams of sugar', 46),
    new Food('Multi-grain Bread', '1 slice (41 grams) contains 2.6 grams of sugar', 3),
    new Food('Whole Milk', '1 cup of whole milk contains 12 grams of sugar', 12),
    new Food('Raspberries', '1 cup of raspberries contains 5 grams of sugar', 5),
    new Food('Dark Chocolate', 'A 1-ounce bar of dark chocolate with 70 to 85 percent cocoa contains 6.8 grams of sugar', 7),
    new Food('Milky Way Midnight', '1 of these candy bars contains 24 grams of sugar', 24),
    new Food('Chocolate Cake', '1 (64 grams) piece of cake with frosting contains 26 grams of sugar', 26)
  ]

  addFood(newFoodFromChild: Food) {
    this.masterFoodList.push(newFoodFromChild);
  }

}
