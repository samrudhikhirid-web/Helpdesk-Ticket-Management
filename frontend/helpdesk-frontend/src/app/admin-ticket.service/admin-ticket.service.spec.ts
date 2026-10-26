import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminTicketService } from './admin-ticket.service';

describe('AdminTicketService', () => {
  let component: AdminTicketService;
  let fixture: ComponentFixture<AdminTicketService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminTicketService],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminTicketService);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
