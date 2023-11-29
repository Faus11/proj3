import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmdkComponent } from './cmdk.component';

describe('CmdkComponent', () => {
  let component: CmdkComponent;
  let fixture: ComponentFixture<CmdkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CmdkComponent]
    });
    fixture = TestBed.createComponent(CmdkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
