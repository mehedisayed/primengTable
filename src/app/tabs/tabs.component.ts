import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

declare var getHost: any;

export interface Tab {
  Title: string;
  Url: SafeResourceUrl;
  Select: boolean;
}

export interface Messaging {
  Message: string;
  ReceivedData: any;
}

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  tabs: Tab[];
  selectedIndex = 0;

  constructor(private sanitizer: DomSanitizer, private ref: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.tabs = [{Title: 'Dashboard', Url: this.sanitizer.bypassSecurityTrustResourceUrl('/dashboard'), Select: true}];
  }

  ngAfterContentChecked() {
    this.ref.detectChanges();
  }



  RenameDoc(): void {
    alert('rename');
  }

  changeTab(event): void {
    this.tabs[this.selectedIndex].Select = false;
    this.selectedIndex = event.index;
    this.tabs[this.selectedIndex].Select = true;
  }

  closeTab(event): void {
    this.tabs[this.selectedIndex].Select = false;
    this.tabs[0].Select = true;
    this.selectedIndex = 0;
    this.tabs.splice(event.index, 1);
  }

  addTab(title: string, url: string): void {
    const tab = {Title: title, Url: this.sanitizer.bypassSecurityTrustResourceUrl(url), Select: false};
    let index = this.tabs.findIndex(t => t.Title === tab.Title);

    if (index === -1) {
      this.tabs.push(tab);
      index = this.tabs.length - 1;
    }

    this.tabs[this.selectedIndex].Select = false;
    this.tabs[index].Select = true;
    this.selectedIndex = index;

  }

  renameTab(oldTitle: string, newTitle: string, url: string): void {

    const tab = this.tabs.find(t => t.Title === oldTitle);

    if (tab === undefined) {
      return;
    }

    tab.Title = newTitle;
    tab.Url = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
