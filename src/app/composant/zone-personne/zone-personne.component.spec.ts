import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonePersonneComponent } from './zone-personne.component';

describe('ZonePersonneComponent', () => {
  let component: ZonePersonneComponent;
  let fixture: ComponentFixture<ZonePersonneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZonePersonneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZonePersonneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
