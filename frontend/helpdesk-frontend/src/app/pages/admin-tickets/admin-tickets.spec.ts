import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminTickets } from './admin-tickets';

describe('AdminTickets', () => { //used to group related test cases for component,service or function
  let component: AdminTickets;
  let fixture: ComponentFixture<AdminTickets>;

  beforeEach(async () => { 
    await TestBed.configureTestingModule({
      imports: [AdminTickets], //testing admin tickets
    }).compileComponents();

    fixture = TestBed.createComponent(AdminTickets);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
