import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkOrderPanelComponent } from './components/work-order-panel/work-order-panel';

type TimeScale = 'day' | 'week' | 'month';

interface WorkCenter {
  id: string;
  name: string;
}

interface WorkOrder {
  id: string;
  name: string;
  workCenterId: string;
  startDate: string;
  endDate: string;
  status: string;
}

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule, WorkOrderPanelComponent],
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent {

  /* ================= TIMESCALE ================= */

  timeScale: TimeScale = 'day';

  changeScale(scale: TimeScale) {
    this.timeScale = scale;
  }

  /* ================= DATE RANGE ================= */

  visibleStart = new Date(2026, 2, 1); // March 1, 2026
  columnWidth = 70;

  getDates(): Date[] {

    const year = this.visibleStart.getFullYear();
    const month = this.visibleStart.getMonth();

    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const dates: Date[] = [];

    if (this.timeScale === 'day') {
      for (let i = 1; i <= daysInMonth; i++) {
        dates.push(new Date(year, month, i));
      }
    }

    if (this.timeScale === 'week') {
      for (let i = 0; i < 5; i++) {
        const d = new Date(this.visibleStart);
        d.setDate(d.getDate() + i * 7);
        dates.push(d);
      }
    }

    if (this.timeScale === 'month') {
      for (let i = 0; i < 6; i++) {
        const d = new Date(this.visibleStart);
        d.setMonth(d.getMonth() + i);
        dates.push(d);
      }
    }

    return dates;
  }

  /* ================= DATA ================= */

  workCenters: WorkCenter[] = [
    { id: 'wc1', name: 'Extrusion Line A' },
    { id: 'wc2', name: 'CNC Machine 1' },
    { id: 'wc3', name: 'Assembly Station' },
    { id: 'wc4', name: 'Quality Control' },
    { id: 'wc5', name: 'Packaging Line' }
  ];

  workOrders: WorkOrder[] = [
    {
      id: '1',
      name: 'Order 1001',
      workCenterId: 'wc1',
      startDate: '2026-03-05',
      endDate: '2026-03-18',
      status: 'complete'
    },
    {
      id: '2',
      name: 'Order 2001',
      workCenterId: 'wc2',
      startDate: '2026-03-15',
      endDate: '2026-03-30',
      status: 'open'
    }
  ];

  /* ================= PANEL ================= */

  panelVisible = false;
  editingId: string | null = null;
  editData: any = null;

  openPanel() {
    this.editingId = null;
    this.editData = null;
    this.panelVisible = true;
  }

  openEdit(order: WorkOrder) {
    this.editingId = order.id;
    this.editData = { ...order };
    this.panelVisible = true;
    this.activeMenuId = null;
  }

  closePanel() {
    this.panelVisible = false;
  }

  /* ================= OVERLAP DETECTION ================= */

  hasOverlap(newOrder: any, excludeId?: string): boolean {

    return this.workOrders.some(existing => {

      if (existing.workCenterId !== newOrder.workCenterId) return false;
      if (excludeId && existing.id === excludeId) return false;

      const newStart = new Date(newOrder.startDate).getTime();
      const newEnd = new Date(newOrder.endDate).getTime();
      const existingStart = new Date(existing.startDate).getTime();
      const existingEnd = new Date(existing.endDate).getTime();

      return newStart <= existingEnd && newEnd >= existingStart;
    });
  }

  /* ================= SAVE ================= */

  saveOrder(data: any) {

    if (this.hasOverlap(data, this.editingId || undefined)) {
      alert('Work order overlaps with an existing order.');
      return;
    }

    if (this.editingId) {

      this.workOrders = this.workOrders.map(order =>
        order.id === this.editingId
          ? { ...order, ...data }
          : order
      );

    } else {

      const newOrder: WorkOrder = {
        id: Date.now().toString(),
        name: data.name,
        workCenterId: data.workCenterId,
        startDate: data.startDate,
        endDate: data.endDate,
        status: data.status
      };

      this.workOrders = [...this.workOrders, newOrder];
    }

    this.panelVisible = false;
    this.editingId = null;
  }

  /* ================= MENU ================= */

  activeMenuId: string | null = null;

  toggleMenu(id: string) {
    this.activeMenuId = this.activeMenuId === id ? null : id;
  }

  deleteOrder(id: string) {
    this.workOrders = this.workOrders.filter(o => o.id !== id);
    this.activeMenuId = null;
  }

  /* ================= HELPERS ================= */

  getOrdersForWorkCenter(id: string) {
    return this.workOrders.filter(o => o.workCenterId === id);
  }

  getPosition(dateStr: string): number {

    const dates = this.getDates();
    const target = new Date(dateStr);

    const index = dates.findIndex(d =>
      d.getFullYear() === target.getFullYear() &&
      d.getMonth() === target.getMonth() &&
      d.getDate() === target.getDate()
    );

    if (index === -1) return -9999;

    return index * this.columnWidth;
  }

  getWidth(startStr: string, endStr: string): number {

    const start = new Date(startStr);
    const end = new Date(endStr);

    const diff =
      (end.getTime() - start.getTime()) /
      (1000 * 60 * 60 * 24) + 1;

    return diff * this.columnWidth;
  }

  /* ================= TODAY LINE ================= */

  getTodayPosition(): number | null {

    if (this.timeScale !== 'day') return null;

    const today = new Date();
    const dates = this.getDates();

    const index = dates.findIndex(d =>
      d.getFullYear() === today.getFullYear() &&
      d.getMonth() === today.getMonth() &&
      d.getDate() === today.getDate()
    );

    if (index === -1) return null;

    return index * this.columnWidth;
  }
  trackByWorkCenter(index: number, item: any) {
    return item.id;
  }
  
  trackByOrder(index: number, item: any) {
    return item.id;
  }
  
  onGridClick(date: Date, workCenterId: string) {
    // Optional: prefill panel with clicked date
    this.editData = {
      name: '',
      workCenterId,
      startDate: date.toISOString().split('T')[0],
      endDate: date.toISOString().split('T')[0],
      status: 'open'
    };
    this.panelVisible = true;
  }
}