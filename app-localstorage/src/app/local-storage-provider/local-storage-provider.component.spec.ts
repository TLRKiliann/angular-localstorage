import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalStorageProviderComponent } from './local-storage-provider.component';

describe('LocalStorageProviderComponent', () => {
  let component: LocalStorageProviderComponent;
  let fixture: ComponentFixture<LocalStorageProviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalStorageProviderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocalStorageProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
