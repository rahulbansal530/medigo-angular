import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any[],searchString:string): any[] {
    //result array for search results
    const resultData:any=[];
    for(let course of value){

      //searching for name of product
      if((course['name'].toUpperCase().includes(searchString.toUpperCase()))){
        resultData.push(course);
      }


    }
    //returning search results
    return resultData;
  }


}
