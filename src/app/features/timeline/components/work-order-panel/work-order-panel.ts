import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-work-order-panel',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './work-order-panel.html',
  styleUrls: ['./work-order-panel.scss']
})
export class WorkOrderPanelComponent {

  @Input() visible = false;

  // 👇 ADD THIS
  @Input() editData: any = null;

  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<any>();

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: [''],
      workCenterId: ['wc1'],
      startDate: [''],
      endDate: [''],
      status: ['open']
    });
  }

  ngOnChanges() {
    if (this.editData) {
      this.form.patchValue(this.editData);
    }
  }

  onSave() {
    this.save.emit(this.form.value);
  }

  onClose() {
    this.close.emit();
  }
}