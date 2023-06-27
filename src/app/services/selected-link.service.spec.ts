import { TestBed } from '@angular/core/testing';

import { SelectedLinkService } from './selected-link.service';

describe('SelectedLinkService', () => {
  let service: SelectedLinkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectedLinkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
