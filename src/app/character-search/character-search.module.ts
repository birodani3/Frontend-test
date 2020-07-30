import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CharacterSearchComponent } from './character-search/character-search.component';

const routes: Routes = [
    {
        path: '',
        component: CharacterSearchComponent,
        pathMatch: 'full'
    }
];

@NgModule({
    declarations: [CharacterSearchComponent],
    imports: [
        RouterModule.forChild(routes),
        CommonModule
    ]
})
export class CharacterSearchModule { }