# AngularJS Problem Statement

1.	Create a view for add employee with below fields with native angular validations
    a.	First name ( text field )
    b.	Last name ( text field )
    c.	Designation ( select field ) 
    d.	Age( number field )
    e.	Add button

2. Create another view for show list of added employees in table
    2.1 Table should contain below columns
        a.	Name
        b.	Designation name,
        c.	Age
        d.	Actions
    2.2  Actions should be edit and remove buttons
    2.3 If user clicks on edit button should go to edit employee page
    2.4 If user clicks on remove button row should be deleted

3. Create another view for edit employee
    3.1 Pre fill all the fields of the selected employee
    3.2 Save the edited details and redirect to list of employee view

## Validations:
1.	First name and Last name should be allowed only characters
2.	Age should be greater than 18 and less than 60

## Data:
1.	Designation options
    a.	Assistant Manager
    b.	Manager
    c.	Software Engineer 1

## Guidelines:
    ●	Use browser storage for storing employees data
    ●	Use any css framework
    ●	Routing is recommended
