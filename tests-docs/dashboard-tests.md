# Dashboard Page Tests

## ✅ Test Scenario: Search by Freelancer Name

### Test Steps
1. Navigate to the dashboard.
2. Type the name "Leanne" in the name input field.
3. Verify the freelancer list is filtered to match the name.

### Expected Result
Only freelancers with the name containing "Leanne" should appear. (Since the UI is not available yet, the results are currently printed to the console using mock data.)

---

## ✅ Test Scenario: Filter by City

### Test Steps
1. Navigate to the dashboard.
2. Type "Gwenborough" in the city input field.
3. Validate that results update in real-time.

### Expected Result
Freelancers from Gwenborough are displayed. (Since the UI is not available yet, the results are currently printed to the console using mock data.)

---

## For the proper version of this table of test scenarios, you can display them in the IDE.
## |TC ID | Test Scenario                  | Steps                                                | Expected Result                                                  |
   |TC-D1 | Display freelancers list       | Open Dashboard                                       | Freelancers' name, email, phone, city, photo, job count are shown|
   |TC-D2 | Search by name                 | Type "Leanne" in the name search input               | Only freelancers with "Leanne" in their name are displayed       |
   |TC-D3 | Search by finished job count   | Enter min = 3 and max = 6 in job count search fields | Only freelancers with job count in range are shown               |
   |TC-D4 | Search by city                 | Type "Gwenborough" in city search input              | Freelancers from "Gwenborough" are displayed                     |
   |TC-D5 | Navigate to portfolio          | Click on any freelancer card                         | Portfolio page opens with freelancer details                     |
   |TC-D6 | Save freelancer                | Click "Save" on any freelancer                       | Saved state is remembered                                        |
   |TC-D7 | Filter saved freelancers       | Toggle "Saved Only" filter                           | Only saved freelancers are displayed                             |
