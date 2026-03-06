# Work Order Schedule Timeline

## Overview

This project is an interactive **Work Order Schedule Timeline** built using **Angular 17 (Standalone Components)** for a manufacturing ERP system.

The application allows planners to:

- Visualize work orders across multiple work centers
- Switch between **Day / Week / Month** zoom levels
- Create new work orders directly from the timeline
- Edit and delete existing work orders
- Detect overlapping work orders on the same work center
- View a dynamic current-day vertical indicator
- Interact with a slide-out create/edit panel
- See status-based visual indicators

---

## Technology Stack

- **Angular 17+ (Standalone Components)**
- **TypeScript (Strict Mode)**
- **SCSS**
- **Reactive Forms**
- **ng-select**
- **@ng-bootstrap/ng-bootstrap (ngb-datepicker)**
- **Circular Std Font**

---

## Project Structure
# Work Order Schedule Timeline

## Overview

This project is an interactive **Work Order Schedule Timeline** built using **Angular 17 (Standalone Components)** for a manufacturing ERP system.

The application allows planners to:

- Visualize work orders across multiple work centers
- Switch between **Day / Week / Month** zoom levels
- Create new work orders directly from the timeline
- Edit and delete existing work orders
- Detect overlapping work orders on the same work center
- View a dynamic current-day vertical indicator
- Interact with a slide-out create/edit panel
- See status-based visual indicators

---

## Technology Stack

- **Angular 17+ (Standalone Components)**
- **TypeScript (Strict Mode)**
- **SCSS**
- **Reactive Forms**
- **ng-select**
- **@ng-bootstrap/ng-bootstrap (ngb-datepicker)**
- **Circular Std Font**

---

## Project Structure
src/
└── app/
└── features/
└── timeline/
├── timeline.component.ts
├── timeline.component.html
├── timeline.component.scss
└── components/
└── work-order-panel/
├── work-order-panel.ts
├── work-order-panel.html
└── work-order-panel.scss


---

## Data Structure

All documents follow the required ERP format:

```typescript
{
  docId: string;
  docType: string;
  data: { ... }
}
```

## Work Center Document

```interface WorkCenterDocument {
  docId: string;
  docType: 'workCenter';
  data: {
    name: string;
  };
}
```
## Work Order Document

```interface WorkOrderDocument {
  docId: string;
  docType: 'workOrder';
  data: {
    name: string;
    workCenterId: string;
    status: 'open' | 'in-progress' | 'complete' | 'blocked';
    startDate: string; // ISO format
    endDate: string;   // ISO format
  };
}
```
## Features Implemented
**Timeline Grid**

Fixed left panel for work centers

Horizontally scrollable timeline

Day / Week / Month zoom levels

Dynamic date header

Current-day vertical indicator

Hover states for rows

**Work Order Bars**

Positioned using date difference calculations

Width based on duration

Status-based visual indicators

Three-dot action menu (Edit / Delete)

No overlap allowed on same work center

**Create / Edit Panel**

Slide-out panel

Reactive Form implementation

Required field validation

Date validation

Overlap detection logic

Create & Save modes supported

## Overlap Detection

**Prevents overlapping work orders on the same work center.**

```newStart <= existingEnd && newEnd >= existingStar```

## How to run the application!

1. Clone the Repository
```git clone <https://github.com/John27052001/work-order-schedule-timeline>
cd work-order-schedule-timeline
```

## Install Dependencies

```npm install
```

## Run the Application

``` npm serve
http://localhost:4300
```
## Design Implementation
Pixel-aligned layout based on provided Sketch designs

Circular Std font integrated

Status accent strip styling

Clean minimal UI for production ERP feel

Smooth hover interactions

## Key Implementation Decisions
1. Standalone Components

Used Angular 17 standalone architecture for cleaner modular structure.

2. Reactive Forms

Used FormGroup for form validation and better state management.

3. Absolute Positioning for Bars

Bars are positioned using:

```position = (startDate - visibleStart) * columnWidth
width = (endDate - startDate) * columnWidth
```
4. Overlap Prevention

Overlap detection prevents scheduling conflicts within the same work center.

## Author

**Megha John Babu**
Frontend Technical Test Submission
