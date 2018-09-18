import { Component , OnInit} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import {MasterDataServiceService} from './../services/master-data-service.service';
import {JobCreationHelper} from './jobCreationHelper';

@Component({
  selector: 'app-job-creation',
  templateUrl: './job-creation.component.html',
  styleUrls: ['./job-creation.component.css']
})
export class JobCreationComponent implements OnInit {
    
  data : any[];  
  rangeSlidConfig: any = {
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
  }
  /* multi select reviewrs*/
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  /* multi select reviewrs end */

  /* multi select institutes*/
  institutesList = [];
  institutesSelected = [];
  /* multi select institutes end */

  /* multi select institutes*/
  locations = [];
  locationsSelected = [];
  /* multi select institutes end */



  constructor(
    private masterData : MasterDataServiceService,
    private jcHelper : JobCreationHelper
  ) { }

  ngOnInit () {
    this.masterData.getMasterData().subscribe(data => this.onLoad(data));
  }
  onLoad(data:any){
     this.dropdownList = data.data.reviewerList;
     this.dropdownSettings = this.jcHelper.getReviewerListConfig();
     this.institutesList = data.data.institutes;
     this.locations = data.data.locations_city;
  }
  onItemSelect (item:any) {
    console.log(item);
  }
  onSelectAll (items: any) {
    console.log(items);
  }


  jobProfile = new FormGroup({
  	institutes : new FormControl(this.institutesSelected),
  	jobLocations : new FormControl(''),
  	interviewLocation : new FormControl(''),
  	skills : new FormControl(''),
  	noticePeriodRangeDays : new FormGroup({
  		min : new FormControl(''),
        max : new FormControl(''),
  	}),
    myRange : new FormControl([1,15]),
  	isOnlineTest : new FormControl(false),
  	interviewType : new FormControl(''),
  	walkInDetails : new FormGroup({
  		date : new FormControl(''),
  		reportingTime : new FormControl('')

  	}),
  	onlineTestLink : new FormControl(''),
  	contactPerson : new FormControl(''),
  	reviewerList : new FormControl(this.selectedItems),
  	startDate : new FormControl(''),
  	endDate : new FormControl(''),
  	isActive : new FormControl(true),
  	linkedInLink : new FormControl(''),
  	domainRequired : new FormControl(''),
    description : new FormControl('')
  });


}
