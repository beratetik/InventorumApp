import { FormInputType } from '../../types/FormInputType';

const fields: FormInputType[][] = [
  [
    {
      "property": "first_name",
      "label": "First Name",
      "type": "text",
      "placeholder": "Enter Name Here",
      "required": true
    },
    {
      "property": "last_name",
      "label": "Last Name",
      "type": "text",
      "placeholder": "Enter Last Name Here"
    }
  ],
  [
    {
      "property": "gender",
      "label": "Gender",
      "type": "radio",
      "options": {
        "male": "Male",
        "female": "Female",
        "other": "Other"
      }
    }
  ],
  [
    {
      "property": "email",
      "label": "Email",
      "type": "email",
      "placeholder": "example@email.com",
      "required": true
    }
  ],
  [
    {
      "property": "department",
      "label": "Department",
      "type": "select",
      "placeholder": "Select Department",
      "options": {
        "marketing": "Marketing",
        "sales": "Sales",
        "it": "IT",
        "support": "Support"
      }
    },
    {
      "property": "contribution",
      "label": "Contribution",
      "type": "number",
      "placeholder": "eg. 4.870,65€"
    }
  ],
  [
    {
      "property": "isActive",
      "type": "checkbox",
      "options": {
        "isActive": "Is Active"
      }
    }
  ]
]

export default fields
