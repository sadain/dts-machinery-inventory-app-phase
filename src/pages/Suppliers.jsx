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
import { SupplierData, SupplierGrid } from "../datasource/Exdata";
import { Header } from "../components";

const Supplier = () => {
  const editOptions = {
    allowEditing: true,
    allowAdding: true,
    allowDeleting: true,
    newRowPosition: "Top",
    mode: "Dialog",
  };
  const toolbarOptions = ["Add", "Edit", "Delete"];
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Master" title="Supplier" />
      <GridComponent
        dataSource={SupplierData}        
        toolbar={toolbarOptions}
        allowPaging={true}
        editSettings={editOptions}
        pageSettings={{ pageCount: 5 }}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {SupplierGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Page, Edit, Toolbar]} />
      </GridComponent>
    </div>
  );
};

export default Supplier
