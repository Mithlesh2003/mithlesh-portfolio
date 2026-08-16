# Project screenshots

Drop images for each case study into a folder named after the project slug:

```
public/projects/adc-quotation-costing-platform/
public/projects/order-to-delivery-system/
public/projects/part-code-system/
public/projects/inventory-management-system/
public/projects/purchase-management-system/
public/projects/master-data-foundation/
public/projects/ticketing-task-management/
public/projects/help-slip-system/
public/projects/role-based-dashboards/
public/projects/payment-recovery-automation/
```

Then register each image in `src/content/projects.ts`, in that project's
`images` array:

```ts
images: [
  {
    src: "/projects/order-to-delivery-system/stage-dashboard.png",
    alt: "O2D stage dashboard",
    caption: "Live order stages with cycle time measured at each gate",
  },
],
```

The first image in the array is used as the card cover on the home page.
An empty array renders a "screenshots coming" placeholder — never a broken
image — so it is always safe to deploy before the screenshots exist.

## Before you publish a screenshot

These are internal company systems. Mask before uploading:

- customer and vendor names, GSTINs, addresses, phone numbers
- prices, rates, margins and invoice values you are not authorised to show
- employee names and login identifiers

Safe alternatives: crop to the UI structure, blur the data column, or use a
demo/dummy record. Prefer PNG for UI, JPG for photos, and keep each file under
~500 KB (1600px wide is plenty).

Photos of the physical work — racking, location labels, the consolidated
store hall — carry the IMS story well and usually need no masking.
