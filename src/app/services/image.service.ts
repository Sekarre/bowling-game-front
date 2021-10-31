import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private imageMap = new Map([
    [0, ['miss.gif', 'miss2.gif', 'miss3.gif', 'miss4.gif', 'miss5.gif', 'miss6.gif']],
    [1, ['default.gif']],
    [2, ['default.gif']],
    [3, ['default.gif']],
    [4, ['default.gif']],
    [5, ['default.gif']],
    [6, ['default.gif']],
    [7, ['default.gif']],
    [8, ['default.gif']],
    [9, ['default.gif']],
    [10, ['10of10.gif', 'perfect.gif', 'ten.gif', 'ten2.gif']],
    [-1, ['default.gif']]
  ])

  constructor() { }

  getImageName(hitPins: number): string {
    const index = Math.floor(Math.random() * (this.imageMap.get(hitPins).length));

    return this.imageMap.get(hitPins)[index];
  }
}
