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
import { PurchaseOrderData, PurchaseOrderGrid } from "../datasource/Exdata";
import { Header } from "../components";
import PurchaseOrderFrom from "../components/Forms/PurchaseOrderFrom";

const PurchaseOrders = () => {
  const editOptions = {
    allowEditing: true,
    allowAdding: true,
    allowDeleting: true,
    newRowPosition: "Top",
    mode: "Dialog",
  };
  const toolbarOptions = ["Edit", "Delete"];
  return (
    <div
      className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl"
    >
      <Header category="Master" title="Sales Invoice" />
      <PurchaseOrderFrom />
      <GridComponent
        dataSource={PurchaseOrderData}
        toolbar={toolbarOptions}
        editSettings={editOptions}
        pageSettings={{ pageCount: 5 }}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {PurchaseOrderGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Edit, Toolbar]} />
      </GridComponent>
    </div>
  );
};

export default PurchaseOrders;
