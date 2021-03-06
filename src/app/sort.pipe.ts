import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: Array<string>,args:any[]): any {
    const sortField=args[0];
    const sortDirection=args[1];
    //multiplier for reversing sorting order
    let multiplier=1;

    //checking for sort direction and toggling multiplier
    if(sortDirection==='desc')
    {
      multiplier=-1;
    }

    //sorting logic based on sorting direction
    value.sort((a:any,b:any)=>{
      if(a[sortField]<b[sortField]){
        return -1*multiplier;
      }
      else if(a[sortField]>b[sortField])
      {
        return 1*multiplier;
      }
      else
      {
        return 0;
      }
    })

    //returning results
    return value;
  }

}
