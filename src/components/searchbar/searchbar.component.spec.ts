import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchbarComponent } from './searchbar.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('SearchbarComponent', () => {
    let component: SearchbarComponent;
    let fixture: ComponentFixture<SearchbarComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [SearchbarComponent, RouterTestingModule],
        }).compileComponents();

        fixture = TestBed.createComponent(SearchbarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
