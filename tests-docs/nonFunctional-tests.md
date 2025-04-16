# Non Functional Tests

## ✅ Test Scenario: Responsive Layout

### Test Steps
1. Open the application in a desktop browser window (e.g., 1440px width).
2. Resize the browser to tablet dimensions (e.g., 768px width).
3. Resize again to mobile view (e.g., 375px width).
4. Optionally, open Developer Tools and use device emulation (iPhone, iPad, etc.).
5. Observe the layout, component behavior, and overall responsiveness at each breakpoint.

### Expected Result
The layout should adjust fluidly.
No content should overflow the viewport.
Navigation adapts to hamburger menus or mobile drawers if applicable.
Font sizes and images scale appropriately for readability.
UI components (buttons, cards, grids) should remain usable and visually intact at all screen sizes.

---

## |TC ID | Test Scenario                | Steps                               | Expected Result                                |
   |NF1   | Responsive layout            | Open app on desktop, tablet, mobile | Layout adjusts cleanly                         |
   |NF2   | Accessible forms and buttons | Use screen reader or inspect aria-* | Proper accessibility tags and labels present   |
   |NF3   | Theme contrast               | Toggle dark/light mode              | Text contrast is readable and meets WCAG       | 
   |NF4   | Keyboard navigation          | Use Tab/Enter to move through UI    | All buttons and inputs are keyboard accessible |
   |NF5   | Navigation performance       | Click between pages                 | Smooth, no reloads or jank                     |
   |NF6   | Fast data load               | Load dashboard/portfolio            | Mock data loads quickly (sub-second ideal)     |