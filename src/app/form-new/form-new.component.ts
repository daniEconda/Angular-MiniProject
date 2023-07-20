import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { City } from '../services/data.service';

@Component({
  selector: 'app-form-new',
  templateUrl: './form-new.component.html',
  styleUrls: ['./form-new.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormNewComponent implements AfterViewInit {

  @Input () className = 'btn-primary';
  @Input () label!: string;
  @Input() selection!: City;
  @ViewChild('newItem')newItem!:ElementRef; 

  @Output() newItemEvent = new EventEmitter<string>();
  @Output() updateItemEvent = new EventEmitter<City>();

  ngAfterViewInit(): void {
  this.newItem.nativeElement.focus();
  }
  
  onAddNewItem():void {
    this.newItemEvent.emit(this.newItem.nativeElement.value)
    this.onClear();
  }
  onUpdateitem():void {
    const city:City = {
      _id: this.selection._id,
      name: this.newItem.nativeElement.value
    };
    this.updateItemEvent.emit(city);
    this.onClear();
  }
  private onClear():void{
    this.newItem.nativeElement.value = '';
  }
}
