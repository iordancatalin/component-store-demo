import { inject } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store'
import { tapResponse } from '@ngrx/operators'
import { EMPTY, Observable, of, switchMap, tap } from 'rxjs';
import { ImageGeneratorService } from './image-generator.service';

export interface IAppStore {
    url: string | null;
    loading: boolean;
    selectedValue: string | null;
}

export class AppStore extends ComponentStore<IAppStore> {

    readonly url$ = this.select(state => state.url);
    readonly loading$ = this.select(state => state.loading);
    readonly selectedValue$ = this.select(state => state.selectedValue);

    readonly valueChanged = this.effect((category$: Observable<string>) => category$.pipe(
        tap(category => {
            this._updateValue(category);
            this._updateLoading(true);
        }),
        switchMap(category => this._imageGenerator.generateURL(category).pipe(
            tapResponse((url) => {
                this._updateURL(url);
            }, () => EMPTY)
        )),
    ));

    private _updateURL = this.updater((state, url: string) => ({
        ...state,
        url,
        loading: false,
    }))

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
