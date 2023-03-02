import { TestBed } from '@angular/core/testing';

import { ListePersonneService } from './liste-personne.service';

describe('ListePersonneService', () => {
  let service: ListePersonneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListePersonneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
