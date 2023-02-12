import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BaseComponent } from './base.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('BaseComponent', () => {
    let component: BaseComponent;
    let fixture: ComponentFixture<BaseComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [BaseComponent, RouterTestingModule],
        }).compileComponents();

        fixture = TestBed.createComponent(BaseComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
