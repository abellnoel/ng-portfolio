import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TopbarComponent } from './topbar.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('TopbarComponent', () => {
    let component: TopbarComponent;
    let fixture: ComponentFixture<TopbarComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TopbarComponent, RouterTestingModule],
        }).compileComponents();

        fixture = TestBed.createComponent(TopbarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
