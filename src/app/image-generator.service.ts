import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ImageGeneratorService {

    generateURL(category: string) {
        return of(`https://api.algobook.info/v1/randomimage?category=${category}`).pipe(
            delay(2_000)
        );
    }
}