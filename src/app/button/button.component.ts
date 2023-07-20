import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnChanges, OnInit, OnDestroy {
  @Input() color!:string
  @Input() label!:string
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Changes ->', changes);
  }

  ngOnInit(): void {
    console.log('OnInit');
  }
  ngOnDestroy(): void {
    console.log('OnDestroy');
  }

}
