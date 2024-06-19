import {AfterViewInit, Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[appEllipsis]',
  standalone: true
})
export class EllipsisDirective implements AfterViewInit{

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) { }

  ngAfterViewInit() {

    const container = this.el.nativeElement;
    const content = container.innerHTML;

    console.log(container.scrollWidth);
    console.log(container.clientWidth);
    if (container.scrollWidth > container.clientWidth) {
      console.log('here');

      this.renderer.setAttribute(container, 'title', content);
      this.renderer.setStyle(container, 'white-space', 'nowrap');
      this.renderer.setStyle(container, 'overflow', 'hidden');
      this.renderer.setStyle(container, 'text-overflow', 'ellipsis');
    }
  }
}
