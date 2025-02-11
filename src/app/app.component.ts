import { Component } from '@angular/core';
import { MatDivider } from '@angular/material/divider';
import {
    MatListOption,
    MatSelectionList,
} from '@angular/material/list';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        MatSelectionList,
        MatListOption,
        MatDivider,
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'component-store-demo';


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

}
