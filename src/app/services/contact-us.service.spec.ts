import { TestBed } from '@angular/core/testing';
import { AppModule } from '../app.module';

import { ContactUsService } from './contact-us.service';

describe('ContactUsService', () => {
  let service: ContactUsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[AppModule]
    });
    service = TestBed.inject(ContactUsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
