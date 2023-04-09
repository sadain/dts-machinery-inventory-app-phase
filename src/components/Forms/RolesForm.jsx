import React from "react";
import { TextBoxComponent } from "@syncfusion/ej2-react-inputs";
// import { RadioButtonComponent } from '@syncfusion/ej2-react-buttons';

const RolesForm = (props) => {
  return (
    <div className="m-2 md:m-10 mt-12 p-16 md:p-10">
      <div className="form-row">
        <div className="form-group col-md-6">
          <TextBoxComponent
            id="name"
            value={props.name}
            placeholder="Roles Name"
            floatLabelType="Auto"
          />
        </div>
        <div className="form-group col-md-6">
          <TextBoxComponent
            id="createdby"
            value={props.createdby}
            placeholder="Created By"
            floatLabelType="Auto"
          />
        </div>
        {/* <div className="form-group col-md-6">
            <ul>
                <li>
                <RadioButtonComponent id="status" label="Active" value="active" name="Roles" />
                </li>
                <li>
                <RadioButtonComponent id="status" label="In Active" value="inactive" name="Roles" />
                </li>
            </ul>
        </div> */}
      </div>
    </div>
  );
};

export default RolesForm;
