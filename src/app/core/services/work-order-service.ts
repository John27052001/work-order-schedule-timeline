import { Injectable, signal } from '@angular/core';
import { WorkCenterDocument } from '../models/work-center.model';
import { WorkOrderDocument } from '../models/work-order.model';

@Injectable({
  providedIn: 'root'
})
export class WorkOrderService {

  // 5 Work Centers (Requirement)
  workCenters: WorkCenterDocument[] = [
    { docId: 'wc1', docType: 'workCenter', data: { name: 'Extrusion Line A' }},
    { docId: 'wc2', docType: 'workCenter', data: { name: 'CNC Machine 1' }},
    { docId: 'wc3', docType: 'workCenter', data: { name: 'Assembly Station' }},
    { docId: 'wc4', docType: 'workCenter', data: { name: 'Quality Control' }},
    { docId: 'wc5', docType: 'workCenter', data: { name: 'Packaging Line' }},
  ];

  // 8 Work Orders (Requirement)
  workOrders = signal<WorkOrderDocument[]>([
    {
      docId: 'wo1',
      docType: 'workOrder',
      data: {
        name: 'Order 1001',
        workCenterId: 'wc1',
        status: 'complete',
        startDate: '2026-03-01',
        endDate: '2026-03-05'
      }
    },
    {
      docId: 'wo2',
      docType: 'workOrder',
      data: {
        name: 'Order 1002',
        workCenterId: 'wc1',
        status: 'open',
        startDate: '2026-03-08',
        endDate: '2026-03-12'
      }
    },
    {
      docId: 'wo3',
      docType: 'workOrder',
      data: {
        name: 'Order 2001',
        workCenterId: 'wc2',
        status: 'in-progress',
        startDate: '2026-03-03',
        endDate: '2026-03-10'
      }
    },
    {
      docId: 'wo4',
      docType: 'workOrder',
      data: {
        name: 'Order 3001',
        workCenterId: 'wc3',
        status: 'blocked',
        startDate: '2026-02-25',
        endDate: '2026-03-07'
      }
    },
    {
      docId: 'wo5',
      docType: 'workOrder',
      data: {
        name: 'Order 4001',
        workCenterId: 'wc4',
        status: 'complete',
        startDate: '2026-03-06',
        endDate: '2026-03-15'
      }
    },
    {
      docId: 'wo6',
      docType: 'workOrder',
      data: {
        name: 'Order 5001',
        workCenterId: 'wc5',
        status: 'open',
        startDate: '2026-03-02',
        endDate: '2026-03-09'
      }
    },
    {
      docId: 'wo7',
      docType: 'workOrder',
      data: {
        name: 'Order 6001',
        workCenterId: 'wc3',
        status: 'in-progress',
        startDate: '2026-03-12',
        endDate: '2026-03-18'
      }
    },
    {
      docId: 'wo8',
      docType: 'workOrder',
      data: {
        name: 'Order 7001',
        workCenterId: 'wc2',
        status: 'blocked',
        startDate: '2026-03-15',
        endDate: '2026-03-20'
      }
    }
  ]);
}