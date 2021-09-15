import { TestBed } from '@angular/core/testing';
import { AppModule } from '../app.module';

import { WebSocketService } from './web-socket.service';

describe('WebSocketService', () => {
  let service: WebSocketService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[AppModule]
    });
    service = TestBed.inject(WebSocketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
