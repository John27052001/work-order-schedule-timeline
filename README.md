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

**Work Center Document**

