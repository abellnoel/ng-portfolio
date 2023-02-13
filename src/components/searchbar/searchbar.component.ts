import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { NgbToast } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'abn-searchbar',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, NgbToast, RouterLink],
    templateUrl: './searchbar.component.html',
    styleUrls: ['./searchbar.component.css'],
})
export class SearchbarComponent {
    searchForm = this.formBuilder.group({ searchQuery: '' });
    showAlert = false;

    constructor(private formBuilder: FormBuilder) {}

    resetForm() {
        this.searchForm.reset();
    }

    getSearchQuery() {
        return this.searchForm.value.searchQuery ?? '';
    }
}
