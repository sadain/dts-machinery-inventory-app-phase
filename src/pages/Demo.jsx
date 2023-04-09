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
import { MaskedTextBoxComponent } from "@syncfusion/ej2-react-inputs";
import data from "../datasource/Demo.json";
import { Header } from "../components";
import {
  useQuery,
} from "@tanstack/react-query";


const Demo = () => {
  async function getCountry(){
    const request = await fetch("https://localhost:7174/api/Country/GetAll");
    return request.json();
  }
  const { isLoading, error, data: countrydata, isFetching } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      getCountry()
  });

console.log("country",countrydata );

  const editOptions = {
    allowEditing: true,
    allowAdding: true,
    allowDeleting: true,
    newRowPosition: "Top",
    mode: "Dialog",
  };

  const toolbarOptions = ["Add", "Edit", "Delete"]

  function editTempleate(args) {
    return (
      <MaskedTextBoxComponent
        value={args.PhoneNumber}
        mask="000-000-0000"
        id="PhoneNumber"
      />
    );
  }

  return (
    <div className="mt-24 m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Master" title="Demo" />
      <GridComponent
        dataSource={countrydata}
        toolbar={toolbarOptions}
        allowPaging={true}
        editSettings={editOptions}
        pageSettings={{ pageCount: 5 }}
        // pageSettings={{ pageSize: 5 }}
      >
        <ColumnsDirective>
          <ColumnDirective
            field="id"
            headerText="ID"
            width="100"
          />
          <ColumnDirective
            field="name"
            headerText="Name"
            width="150"
          />
          {/* <ColumnDirective
            field="OrderID"
            headerText="Invoice ID"
            width="100"
          />
          <ColumnDirective
            field="CustomerID"
            headerText="Customer ID"
            width="150"
          /> */}
          {/* <ColumnDirective
            field="ShipCountry"
            headerText="Ship Country"
            editType="dropdownedit"
          />
          <ColumnDirective field="ShipName" headerText="Ship Name" />
          <ColumnDirective
            field="Freight"
            textAlign="Right"
            format="C2"
            width="150"
            editType="numericedit"
          />
          <ColumnDirective
            field="OrderDate"
            type="Date"
            width="150"
            editType="datepickeredit"
            format="y-m-d"
          />
          <ColumnDirective
            field="PhoneNumber"
            headerText="PhoneNumber"
            width="150"
            editTempleate={editTempleate}
          /> */}
        </ColumnsDirective>
        <Inject services={[Page, Toolbar, Edit]} />
      </GridComponent>
    </div>
  );
};

export default Demo;
