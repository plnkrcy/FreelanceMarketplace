# Portfolio Page Tests

## ✅ Test Scenario: Display Freelancer Information

### Test Steps
1. Navigate to dashboard.
2. Click on a freelancer to open their portfolio.
3. Check that freelancer info and jobs are visible.

### Expected Result
Freelancer details and a list of past jobs should display. (Since there is no UI for now, only mock data has been printed to the console.)

---

## ✅ Test Scenario: Show Comments for Job

### Test Steps
1. On the portfolio page, click "Show Comments" on a job.
2. Observe comment section appears.

### Expected Result
Comments load for that job and are visible. (Since the UI is not available yet, the results are currently printed to the console using mock data.)

---

## ✅ Test Scenario: Filter Job Count Range

### Test Steps
1. Navigate to the portfolio page.
2. Apply a filter to display freelancers with a job count between 3 and 7.

### Expected Result
Freelancers whose completed job counts fall within the specified range (3 to 7) are listed.
(Since the UI is not available yet, the results are currently printed to the console using mock data.)

---
## For the proper version of this table of test scenarios, you can display them in the IDE.
## |TC ID | Test Scenario                 | Steps                             | Expected Result                                       |
   |TC-P1 | Display freelancer info       | Open portfolio page               | Freelancer name, phone, address, website are visible  |
   |TC-P2 | List past jobs                | Load portfolio                    | Job titles and bodies from /posts displayed           |
   |TC-P3 | Show comment count            | Load jobs                         | Each job shows total comments fetched from /comments  |
   |TC-P4 | Show comments on button click | Click "Show Comments" under a job | Comments appear with name, email, body                |
   |TC-P5 | Open hire popup               | Click "Hire Freelancer"           | Popup with Name, Subject, Message appears             |
   |TC-P6 | Filter job count range        | Filter Job Count                  | Display freelancer informatons within job count range |
