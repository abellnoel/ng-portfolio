import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'abn-search-results',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './search-results.component.html',
    styleUrls: ['./search-results.component.css'],
})
export class SearchResultsComponent implements OnInit {
    query = '';

    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        this.route.paramMap.subscribe((paramMap) => {
            this.query = paramMap.get('searchQuery') ?? '';
        });
    }
}
