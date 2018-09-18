import { Component, OnInit } from '@angular/core';
import * as jQuery from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  		$(document).ready(function () {
		$('.navbar-light .dmenu').hover(function () {
		        $(this).find('.sm-menu').first().stop(true, true).slideDown(150);
		    }, function () {
		        $(this).find('.sm-menu').first().stop(true, true).slideUp(105)
		    });
		});
  }

}
