import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Inject,
  Page,
  Edit,
  Toolbar,
} from "@syncfusion/ej2-react-grids";
import rolesData from "../datasource/UserDS.json";
import { Header } from "../components";
import RolesForm from "../components/Forms/RolesForm";

const Roles = () => {
  const editOptions = {
    allowEditing: true,
    allowAdding: true,
    allowDeleting: true,
    newRowPosition: "Top",
    mode: "Dialog",
  };
  const toolbarOptions = ["Add", "Edit", "Delete"];

  return (
    <div className="mt-24 m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Master" title="Roles" />
      <GridComponent
        dataSource={rolesData}
        toolbar={toolbarOptions}
        allowPaging={true}
        editSettings={editOptions}
        pageSettings={{ pageCount: 5 }}
        // pageSettings={{ pageSize: 5 }}
      >
        <ColumnsDirective>
          <ColumnDirective
            field="RoleName"
            headerText="Roles Name"
            width="100"
          />
        </ColumnsDirective>
        <Inject services={[Page, Toolbar, Edit]} />
      </GridComponent>
    </div>
  );
};

export default Roles;
