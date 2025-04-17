# Hire Freelancer Tests

## ✅ Test Scenario: Form Validation

### Test Steps
1. Navigate to the dashboard or section containing the Hire Freelancer feature.
2. Click on the "Hire Freelancer" button to open the popup form.
3. Leave all the required fields empty.
4. Click the Submit or Hire button.
   
### Expected Result
Validation messages should appear for each empty required field (e.g., "Name is required", "Email is required").
The form should not be submitted.
The popup should remain open, highlighting fields with errors.

---
## For the proper version of this table of test scenarios, you can display them in the IDE.
## |TC ID | Test Scenario         | Steps                      | Expected Result                      |
   |TC-H1 | Popup displays fields | Open hire popup            | All fields present                   |
   |TC-H2 | Form validation       | Submit with empty fields   | Validation errors shown              |
   |TC-H3 | Simulated submit      | Fill all fields and submit | Popup closes / success message shown |
