import { Component, OnInit } from '@angular/core';
import { LoaderService } from '@app/shared/loader/overlay/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
  loading: boolean;
  constructor(private loadingService: LoaderService) {
    this.loadingService.isLoading.subscribe((res) => {
      this.loading = res;
    });
  }

  ngOnInit(): void {}
}
