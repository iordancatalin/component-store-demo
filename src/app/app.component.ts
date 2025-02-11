import { Component, inject, signal } from '@angular/core';
import { MatDivider } from '@angular/material/divider';
import {
    MatListOption,
    MatSelectionList,
    MatSelectionListChange,
} from '@angular/material/list';
import { AppStore } from './app.store';
import { AsyncPipe } from '@angular/common';

import {
    toObservable,
    toSignal,
} from '@angular/core/rxjs-interop';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CategoriesListComponent } from './components/categories-list.component';
import { MainContentComponent } from "./components/main-content.component";

@Component({
    selector: 'app-root',
    imports: [
        CategoriesListComponent,
        MainContentComponent
    ],
    providers: [AppStore],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    readonly store = inject(AppStore);
}
