import { Directive, ElementRef, Input, OnInit } from '@angular/core';


@Directive({
  selector: '[appBox]'
})
export class BoxDirective implements OnInit{

  @Input()
  borderStyle:string = 'solid';

  @Input()
  borderColor: string = 'black';

  @Input()
  borderThickness: number =1;

  constructor(private elementRef: ElementRef) { 
  }

  ngOnInit()
  {
    console.log("inside box directive constructor...")

    this.elementRef.nativeElement.style.border = `${this.borderThickness}px ${this.borderStyle} ${this.borderColor}`;
    this.elementRef.nativeElement.style.height = "100px";
    this.elementRef.nativeElement.style.width = "100px";
    this.elementRef.nativeElement.style.display = "inline-block";
    this.elementRef.nativeElement.style.margin = "10px";


  }


}
