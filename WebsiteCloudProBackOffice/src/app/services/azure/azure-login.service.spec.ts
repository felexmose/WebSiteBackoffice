import { TestBed } from '@angular/core/testing';

import { AzureLoginService } from './azure-login.service';

describe('AzureLoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AzureLoginService = TestBed.get(AzureLoginService);
    expect(service).toBeTruthy();
  });
});
