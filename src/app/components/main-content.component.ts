import { Component, inject } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { AppStore } from '../app.store';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
    selector: 'ap-main-content',
    imports: [MatProgressSpinnerModule],
    template: `
        @if(loading()) {
            <mat-spinner></mat-spinner>
        } @else {

            @if(url()) {
                <img [src]="url()" />
            } @else {
                <h4>No category selected</h4>
            }

        }
    `
})
export class MainContentComponent {

    readonly store = inject(AppStore);

    readonly url = toSignal(this.store.url$);
    readonly loading = toSignal(this.store.loading$);
}