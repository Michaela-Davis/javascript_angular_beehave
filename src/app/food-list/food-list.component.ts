import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Food } from '../food.model';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  @Input() childFoodList:Food[];
  @Output() clickSender = new EventEmitter();

  selectedFood: Food = null;
  showFood: Food = null;

  editButtonHasBeenClicked(foodToEdit: Food) {
    this.clickSender.emit(foodToEdit);
  }

  showFoodDetails(currentFood) {
    this.showFood = currentFood;
  }
  
  hideFoodDetails(currentFood) {
    this.showFood = null;
  }

  // when I tried taking this & the corresponding OnInit out the webpack wouldn't build
  ngOnInit() {
  }

}
