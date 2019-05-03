import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'tech-thumbnail',
  templateUrl: './tech-thumbnail.component.html',
  styleUrls: ['./tech-thumbnail.component.css']
})
export class TechThumbnailComponent implements OnInit {

  @Input() tech;  
  constructor(private router:Router) { }

  ngOnInit() {
  }
}
