import { Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {

  @ViewChild('searchElement', { static: true }) searchElement!: ElementRef;
  @Input() limited?: boolean;
  @Input() auto?: boolean = true;
  @Output() searchPromptChanged = new EventEmitter<any>();

  searchForm!: FormGroup;
  focused: boolean = false;
  searchResults: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      search: new FormControl(''),
    });
  }

  ngAfterViewInit() {
    if(this.auto !== false) {
      this.searchForm.valueChanges.subscribe((event) => {
        this.search(event);
      });
    }
  }

  onFocus() {
    this.focused = true;
  }

  @HostListener('document:click', ['$event'])
  focusOut(event: any) {
    if (!this.searchElement.nativeElement.contains(event.target)) {
      this.focused = false;
    }
  }

  search(event: any) {
    let promptsStr = '';
    if(event.search) {
      promptsStr = event.search;
    } else {
      promptsStr = this.searchForm.value.search;
    }
    let prompts = promptsStr.trim().split(' ');
    this.searchPromptChanged.emit(prompts);
  }

}
