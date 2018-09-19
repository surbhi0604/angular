import { TestBed, inject } from '@angular/core/testing';

import { DataServiceService } from './data-service.service';
import { HttpModule } from '@angular/http';

describe('DataServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule(
      {
     
      providers: [DataServiceService],
      imports: [HttpModule],
    });
  });

  it('should be created', inject([DataServiceService], (service: DataServiceService) => {
    expect(service).toBeTruthy();
  }));
});
