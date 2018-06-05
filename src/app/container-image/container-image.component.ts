import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container-image',
  templateUrl: './container-image.component.html',
  styleUrls: ['./container-image.component.scss']
})
export class ContainerImageComponent implements OnInit {
  favorite: Boolean = false;
  images = ['/assets/worf.jpg'];
  imageIndex = 0;
  arrayIndex = 1;
  data = {
    id: 4,
    title: 'Abstrato',
    is_public: 1,
    is_deleted: 0,
    created: '2018-01-14 14:27:36',
    edition_file: 'http://longwallpapers.com/Desktop-Wallpaper/mercedes-wallpapers-wide-For-Desktop-Wallpaper.jpg'
  };
  data_array = Object.entries(this.data).map((value) => (value));
  constructor() {
    // console.log(this.data);
    // console.log(this.data_array);
  }

  ngOnInit() {
  }

  onFavorite () {
    this.favorite = !this.favorite;
  }

}
