import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'art-card',
  templateUrl: './art-card.component.html',
  styleUrls: ['./art-card.component.scss']
})
export class ArtCardComponent implements OnInit {




  @Input() image: string;
  @Input() type: string;
  @Input() artist: string;
  @Input() profession: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
