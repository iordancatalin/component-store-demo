import { inject } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store'
import { tapResponse } from '@ngrx/operators';
import { EMPTY, Observable, switchMap, tap } from 'rxjs';
import { ImageGeneratorService } from './image-generator.service';

export interface IAppStore {
    url: string | null;
    loading: boolean;
    selectedValue: string | null;
}

export class AppStore extends ComponentStore<IAppStore> {

    readonly url$ = this.select(state => state.url);
    readonly loading$ = this.select(state => state.loading);
    readonly selectedValue = this.select(state => state.selectedValue);

    readonly valueChanged = this.effect((value$: Observable<string>) => value$.pipe(
        tap((value) => {
            this._updateValue(value);
            this._updateLoading(true);
        }),
        switchMap((value) => this._imageGenerator.generateURL(value).pipe(
            tapResponse((url) => this._urlLoaded(url), () => EMPTY)
        )),
    ))

    private _updateLoading = this.updater((state, loading: boolean) => ({
        ...state,
        loading
    }));

    private _updateValue = this.updater((state, value: string) => ({
        ...state,
        selectedValue: value
    }))

    private _urlLoaded = this.updater((state, imageURL: string) => ({
        ...state,
        url: imageURL,
        loading: false,
    }))

    private _imageGenerator = inject(ImageGeneratorService);

    constructor() {
        super({
            selectedValue: null,
            url: null,
            loading: false,
        })
    }
}
