import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneAffichageComponent } from './zone-affichage.component';

describe('ZoneAffichageComponent', () => {
  let component: ZoneAffichageComponent;
  let fixture: ComponentFixture<ZoneAffichageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZoneAffichageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZoneAffichageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
