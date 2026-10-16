import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TicketService } from './ticket.service';

describe('TicketService', () => {
  let component: TicketService;
  let fixture: ComponentFixture<TicketService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TicketService],
    }).compileComponents();

    fixture = TestBed.createComponent(TicketService);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
