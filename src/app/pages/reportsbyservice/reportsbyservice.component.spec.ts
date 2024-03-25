import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsbyserviceComponent } from './reportsbyservice.component';

describe('ReportsbyserviceComponent', () => {
  let component: ReportsbyserviceComponent;
  let fixture: ComponentFixture<ReportsbyserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportsbyserviceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReportsbyserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
