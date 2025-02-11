import { Component, inject } from '@angular/core';
import { MatListOption, MatSelectionList, MatSelectionListChange } from '@angular/material/list';
import { AppStore } from '../app.store';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
    selector: 'ap-categories-list',
    imports: [
        MatSelectionList,
        MatListOption,
    ],
    template: `
    <mat-selection-list
      (selectionChange)="valueChanged($event)"
      multiple="false"
      hideSingleSelectionIndicator="true"
    >
      @for (option of options; track option) {
      <mat-list-option
        [value]="option.value"
        [selected]="selectedValue() === option.value"
      >
        {{ option.label }}</mat-list-option
      >
      }
    </mat-selection-list>
    `
})
export class CategoriesListComponent {

    readonly store = inject(AppStore);

    readonly selectedValue = toSignal(this.store.selectedValue$, { requireSync: true })

    readonly options = [
        { label: 'Backgrounds', value: 'backgrounds' },
        { label: 'Fashion', value: 'fashion' },
        { label: "Nature", value: "nature" },
        { label: "Science", value: "science" },
        { label: "Education", value: "education" },
        { label: "Feelings", value: "feelings" },
        { label: "Health", value: "health" },
        { label: "People", value: "people" },
        { label: "Places", value: "places" },
        { label: "Animals", value: "animals" },
        { label: "Industry", value: "industry" },
        { label: "Computer", value: "computer" },
        { label: "Food", value: "food" },
        { label: "Sports", value: "sports" },
        { label: "Transportation", value: "transportation" },
        { label: "Travel", value: "travel" },
        { label: "Buildings", value: "buildings" },
        { label: "Business", value: "business" },
        { label: "Music", value: "music" }
    ]

    valueChanged(selectionChanged: MatSelectionListChange) {
        const [option] = selectionChanged.options;

        this.store.valueChanged(option.value);
    }
}