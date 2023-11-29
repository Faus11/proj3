import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ai-cockpit';
  pages: Array<string> = [];
  search = '';
  
  get page() {
    return this.pages[this.pages.length - 1];
  }
  
  onKeyDown(e: KeyboardEvent) {
    // Escape goes to previous page
    // Backspace goes to previous page when search is empty
    if (e.key === 'Escape' || (e.key === 'Backspace' && !this.search)) {
      e.preventDefault();
      this.pages = this.pages.slice(0, -1);
    }
  }
  
  setSearch(ev: Event) {
    this.search = (ev.target as HTMLInputElement)?.value;
  }
  
  setPages(page: string) {
    this.pages.push(page);
  }
  
 

}

