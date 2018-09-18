import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class JobCreationHelper{

	getReviewerList(reviewers : any)
	{

	}

	getInstitutes(institutes : any)
	{

	}

	getLocations(locations : any)
	{

	}

	getSkills(skills:any)
	{

	}

	getReviewerListConfig()
	{
		return {
        singleSelection: false,
        idField: 'id',
        textField: 'name',
        selectAllText: 'Select All',
        unSelectAllText: 'UnSelect All',
        itemsShowLimit: 3,
        allowSearchFilter: true
      };
	}

	getExpRangeSlidConfig()
	{
		
		return {
		    behaviour: 'drag',
		    connect: [true, true, true],
		    tooltips: [true, true],
		    start: [20, 40],
		    keyboard: true, 
		    step: 1,
		    pageSteps: 1, 
		    range: {
		    min: 0,
		    max: 100
		    }
		};
  }


}