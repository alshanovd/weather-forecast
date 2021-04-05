import { ChangeDetectionStrategy } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotFoundComponent } from './not-found.component';

describe('NotFoundComponent', () => {
    let fixture: ComponentFixture<NotFoundComponent>;
    let component: NotFoundComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [NotFoundComponent],
        })
            .overrideComponent(NotFoundComponent, {
                set: { changeDetection: ChangeDetectionStrategy.Default },
            })
            .compileComponents();

        fixture = TestBed.createComponent(NotFoundComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create <add-city> component', () => {
        expect(component).toBeTruthy();
    });

    it('should show title', async () => {
        const expectedTitle = '404';
        component.title = expectedTitle;

        fixture.detectChanges();

        const title = fixture.nativeElement.querySelector('.title');
        expect(title.textContent).toBe(expectedTitle, 'Title has not changed');
    });
});
