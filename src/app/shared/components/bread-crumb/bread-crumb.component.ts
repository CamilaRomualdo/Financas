import {Component, Input, OnInit} from '@angular/core';

interface BreadCrumpItem {
  text: string;
  link?: string;
}

@Component({
  selector: 'app-bread-crumb',
  templateUrl: './bread-crumb.component.html',
  styleUrls: ['./bread-crumb.component.scss']
})
export class BreadCrumbComponent implements OnInit {

  @Input() items: Array<BreadCrumpItem> = [];

  constructor() { }

  ngOnInit() {
  }

  isTheLastItem(item: BreadCrumpItem): boolean {
    const index = this.items.indexOf(item);
    return index + 1 == this.items.length;
  }
}
