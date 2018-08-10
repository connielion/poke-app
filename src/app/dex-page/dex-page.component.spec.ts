import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DexPageComponent } from './dex-page.component';

describe('DexPageComponent', () => {
  let component: DexPageComponent;
  let fixture: ComponentFixture<DexPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DexPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DexPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
