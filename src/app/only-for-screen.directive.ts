import { Directive, TemplateRef, ViewContainerRef, Input, HostListener, AfterViewInit } from '@angular/core';


@Directive({
  selector: '[onlyForScreen]'
})
export class OnlyForScreenDirective implements AfterViewInit {

  viewportWidth: any;

  config: IConfig = {
    mobile: 360,
    tablet: 768
  }

  mobile: boolean = false;
  tablet: boolean = false;
  desktop: boolean = false;



  @HostListener('window:resize', ['$event'])
  getScreenSize() {
    this.viewportWidth = window.innerWidth;
    console.log(this.viewportWidth);
  }


  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {
    this.getScreenSize();

    this.mobile = this.viewportWidth <= this.config.mobile;
    this.tablet = this.config.mobile < this.viewportWidth && this.viewportWidth <= this.config.tablet;
    this.desktop = this.config.tablet < this.viewportWidth;
  }

  ngAfterViewInit() {
  }


  @Input('onlyForScreen') set display(view: string) {

    if (view === 'mobile' && this.mobile) {
      this.viewContainer.clear();
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else if (view === 'tablet' && this.tablet) {
      this.viewContainer.clear();
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else if (view === 'desktop' && this.desktop) {
      this.viewContainer.clear();
      this.viewContainer.createEmbeddedView(this.templateRef);
    }

  }

}



interface IConfig {
  mobile: number;
  tablet: number;
}
