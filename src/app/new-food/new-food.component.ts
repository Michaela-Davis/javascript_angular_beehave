import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Food } from '../food.model';

@Component({
  selector: 'app-new-food',
  templateUrl: './new-food.component.html',
  styleUrls: ['./new-food.component.css']
})
export class NewFoodComponent implements OnInit {
  @Input() childSelectedFood: Food;
  @Output() newFoodSender = new EventEmitter();

  showNew: boolean = false;

  submitForm(food: string, details: string, gramsOfSugar: number) {
      var newFoodToAdd: Food = new Food(food, details, gramsOfSugar);
      this.newFoodSender.emit(newFoodToAdd);
  }

  showNewFood() {
    this.showNew = true;
  }

  hideNewFood() {
    this.showNew = false;
  }

  ngOnInit() {
  }

}
