import { Component, OnInit, OnDestroy } from '@angular/core';
import { PreloaderService } from '../../services/preloader/preloader.service';

@Component({
  selector: 'app-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.css']
})
export class PreloaderComponent implements OnInit, OnDestroy {

  constructor(private preloader: PreloaderService) { }

  isVisible: boolean = true;
  subscription: any;

  ngOnInit(): void {
    this.subscription = this.preloader.isVisibleSource$.subscribe((res: boolean) => {
      if (res) {
        this.isVisible = true;
      } else {
        this.isVisible = false;
      }
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }



}
