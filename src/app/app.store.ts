import { inject } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store'
import { tapResponse } from '@ngrx/operators';
import { EMPTY, Observable, of, switchMap, tap } from 'rxjs';
import { ImageGeneratorService } from './image-generator.service';

export interface IAppStore {
    url: string | null;
    loading: boolean;
    selectedValue: string | null;
}

export class AppStore extends ComponentStore<IAppStore> {

    readonly url$ = of(null);
    readonly loading$ = of(false);
    readonly selectedValue$ = of(null);

    readonly valueChanged = (value: string) => {
        console.log(value);
        // implement value changed effect
    };

    private _updateValue = this.updater((state, value: string) => ({
        ...state,
        selectedValue: value
    }));

    private _updateLoading = this.updater((state, loading: boolean) => ({
        ...state,
        loading
    }));

    private _imageGenerator = inject(ImageGeneratorService);

    constructor() {
        super({
            selectedValue: null,
            url: null,
            loading: false,
        })
    }
}
