 ```
# 🏭 Work Order Schedule Timeline  
**Frontend Technical Test – Angular 17**

---

## 📌 Overview

This project is an interactive **Work Order Schedule Timeline** built using **Angular 17 (Standalone Components)** for a manufacturing ERP system.

The application allows planners to:

- Visualize work orders across multiple work centers
- Switch between Day / Week / Month zoom levels
- Create new work orders directly from the timeline
- Edit and delete existing work orders
- Detect overlapping work orders on the same work center
- View a dynamic current-day vertical indicator
- Interact with a slide-out create/edit panel
- See status-based visual indicators

The implementation follows the required ERP document structure:

```ts
{
  docId: string;
  docType: string;
  data: { ... }
}

How to Run the Application
1️⃣ Clone the Repository
git clone <your-repository-url>
cd work-order-timeline
2️⃣ Install Dependencies
npm install
3️⃣ Start Development Server
ng serve

If Angular CLI is not installed globally:

npx ng serve

If port conflict occurs:

npx ng serve --port 4300
4️⃣ Open in Browser
http://localhost:4300


Project Architecture
🔹 Angular Version

Angular 17+

Standalone Components

Strict TypeScript mode

🔹 Main Components
1. TimelineComponent

Responsible for:

Rendering timeline grid

Handling zoom levels (Day / Week / Month)

Rendering work order bars

Managing document-based data

Overlap detection logic

Current day indicator positioning

Three-dot action menu handling

2. WorkOrderPanelComponent

Responsible for:

Create/Edit slide-out panel

Reactive Form handling

Validation rules

Emitting save/close events

Libraries Used
Library	Purpose
Angular 17	Core framework
Reactive Forms	Form validation & state management
SCSS	Modular styling
ng-select	Dropdown component
@ng-bootstrap/ng-bootstrap	Datepicker component
Circular Std Font	Pixel-perfect typography

Font included:

<link rel="stylesheet" href="https://naologic-com-assets.naologic.com/fonts/circular-std/circular-std.css">
Data Structure (Required ERP Format)

All documents follow this structure:

interface WorkCenterDocument {
  docId: string;
  docType: 'workCenter';
  data: {
    name: string;
  };
}

interface WorkOrderDocument {
  docId: string;
  docType: 'workOrder';
  data: {
    name: string;
    workCenterId: string;
    status: WorkOrderStatus;
    startDate: string;
    endDate: string;
  };
}

type WorkOrderStatus =
  | 'open'
  | 'in-progress'
  | 'complete'
  | 'blocked';
Core Features Implemented
✅ Timeline Grid

Fixed left panel for work centers

Scrollable timeline grid

Day / Week / Month zoom levels

Dynamic date header rendering

Current day vertical indicator

Hover row highlighting

✅ Work Order Bars

Pixel-accurate horizontal positioning

Width calculated from start & end dates

Status-based colored accent strip

Three-dot action menu (Edit/Delete)

Hover elevation animation

TrackBy optimization to prevent flickering

✅ Create Panel

Triggered by:

Clicking empty grid cell

Clicking "Create Order" button

Includes:

Reactive Form

Required validation

Default status: Open

Pre-filled start date

Overlap prevention

✅ Edit Panel

Triggered via:

Three-dot menu → Edit

Includes:

Pre-populated form

Save updates existing document

Same overlap validation logic

Save button label switches dynamically

✅ Delete Work Order

Triggered via:

Three-dot menu → Delete

Removes document from state.

✅ Overlap Detection

Before saving a work order:

newStart <= existingEnd && newEnd >= existingStart

If overlap detected:

Show alert

Prevent save

Ensures no two work orders overlap within the same work center.

Key Technical Decisions

Used Standalone Components for cleaner architecture

Used Reactive Forms for structured validation

Used trackBy functions for rendering performance

Used document-based data structure to match ERP requirements

Separated timeline rendering logic from panel logic

Calculated bar positioning using date difference math

Explain project purpose and Angular 17 standalone structure.

2️⃣ Timeline Demo (1–2 min)

Show Day view

Switch to Week

Switch to Month

Highlight current day indicator

3️⃣ Create Work Order (1–2 min)

Click empty grid

Fill form

Save

Show new bar rendering

4️⃣ Overlap Scenario (1 min)

Try creating overlapping order

Show validation error

5️⃣ Edit (1 min)

Use three-dot menu

Modify dates

Save changes

6️⃣ Delete (30 sec)

Delete an order

7️⃣ Code Walkthrough (2–3 min)

Show document structure

Show overlap logic

Show date positioning math

Explain component separation

📦 Public Repository Requirements

Your GitHub repo includes:

Working Angular application

Sample data

Clean commit history

README.md

No console errors

Proper folder structure

## Suggested Commit History
Initial timeline grid implementation
Add work order positioning logic
Implement create/edit slide panel
Add overlap validation
Refactor to ERP document structure
Implement three-dot action menu
UI polish and pixel adjustments
Add current day indicator
Finalize README and documentation

## Conclusion

This solution focuses on:

Clean Angular architecture

Scalable timeline rendering logic

ERP-style document structure

Accurate date-based positioning

Strict overlap validation

Pixel-aligned UI styling

Performance-aware rendering

🚀 Thank you for reviewing this submission.

