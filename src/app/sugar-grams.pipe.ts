import { Pipe, PipeTransform } from '@angular/core';
import { Food } from './food.model';

@Pipe({
  name: 'sugarGrams',
  pure: false
})
export class SugarGramsPipe implements PipeTransform {

  transform(input: Food[], desiredSugar) {
    var output: Food[] = [];
    if(desiredSugar === "lessThanFifteen") {
      for(var i = 0; i< input.length; i++) {
        if(input[i].gramsOfSugar < 15){
          output.push(input[i]);
        }
      }
      return output;
    } else if(desiredSugar === "greaterThanFifteen") {
      for(var i = 0; i< input.length; i++) {
        if(input[i].gramsOfSugar >= 15){
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }

}
