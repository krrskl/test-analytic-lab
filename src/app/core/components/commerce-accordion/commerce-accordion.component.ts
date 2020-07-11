import { Component, OnInit, ViewChild, Input, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-commerce-accordion',
  templateUrl: './commerce-accordion.component.html',
  styleUrls: ['./commerce-accordion.component.scss'],
})
export class CommerceAccordionComponent implements OnInit {
  accordionExapanded = false;
  @ViewChild('cc', { static: true }) cardContent: any;
  @Input() title: string;

  icon = 'fa-chevron-down';

  constructor(public renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.setStyle(
      this.cardContent.nativeElement,
      'webkitTransition',
      'max-height 500ms, padding 500ms',
    );
  }

  toggleAccordion() {
    if (this.accordionExapanded) {
      this.renderer.setStyle(
        this.cardContent.nativeElement,
        'max-height',
        '0px',
      );
      this.renderer.setStyle(
        this.cardContent.nativeElement,
        'padding',
        '0px 16px',
      );
    } else {
      this.renderer.setStyle(
        this.cardContent.nativeElement,
        'max-height',
        '500px',
      );
      this.renderer.setStyle(
        this.cardContent.nativeElement,
        'padding',
        '13px 16px',
      );
    }

    this.accordionExapanded = !this.accordionExapanded;
    this.icon =
      this.icon === 'fa-chevron-down' ? 'fa-chevron-up' : 'fa-chevron-down';
  }
}
