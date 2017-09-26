import {Component, Input} from '@angular/core';
import {Hero} from './hero'


@Component({
    selector:'hero-detail',
    template:`
    <div *ngIf="hero">
    <h1>Hero Details</h1>
    <h3>Id : {{hero.id}}</h3>
    <h3>Name: <input [(ngModel)]="hero.name" placeholder=Name></h3>
    </div>
    `
})

export class HeroDetailComponent{
    @Input() hero: Hero;
}