import { Component, OnInit, Input } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.scss']
})
export class InfoBoxComponent implements OnInit {

  @Input() title: string;
  @Input() text: string;


  constructor() { }

  ngOnInit(): void {
  }

}
