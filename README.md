# Event-Management-System
This project is a web-based Event Management System designed to manage memberships, transactions, and reports with role-based access control for Admin and Users.  The application follows a structured flow (as per the provided flowchart) and ensures proper validation, session handling, and secure authentication.

🚀 Key Features
🔐 Authentication & Security
User Login/Register system
Passwords are securely hidden while typing
Proper session management implemented
👤 Role-Based Access
Admin
Access to:
Maintenance Module
Reports Module
Transactions Module
User
Access to:
Reports Module
Transactions Module
❌ No access to Maintenance Module
🛠️ Modules
1. Maintenance Module (Admin Only)
Mandatory module
Acts as the base for:
Reports
Transactions
2. Membership Management
➕ Add Membership
All fields are mandatory
User must select one duration:
6 Months (default)
1 Year
2 Years
Uses radio button selection (only one allowed)
🔄 Update Membership
Membership Number is mandatory
Auto-populates member details
Options available:
Extend membership (default: 6 months)
Cancel membership
3. Reports & Transactions
Generated based on Maintenance data
Accessible by both Admin and Users
✅ Functional Requirements
✔ Form validations applied on all inputs
✔ Radio buttons allow only one selection
✔ Checkbox logic:
Checked = Yes
Unchecked = No
✔ UI supports basic formatting (functional focus over styling)
✔ Flow strictly follows the defined flowchart
🔗 Navigation Note
A chart navigation link is available on all pages (for reference only)
Not required in the final working application
🎯 Objective

To build a structured system that:

Manages event-related memberships
Ensures controlled access via roles
Maintains clean data flow between modules
Demonstrates proper frontend + backend integration
📌 Tech Stack (You can edit this)
Frontend: HTML, CSS, JavaScript / React
Backend: Node.js / Java / etc.
Database: MySQL / MongoDB
