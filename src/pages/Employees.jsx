import React from "react";

import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
  Toolbar,
} from "@syncfusion/ej2-react-grids";
import { employeesData, employeesGrid } from "../data/dummy";
import { Header } from "../components";
import { Search } from "@syncfusion/ej2-react-dropdowns";

function Employees() {
  let grid;
  const toolbar = ["Search"];

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Employees" />
      <GridComponent
        id="gridcomp"
        dataSource={employeesData}
        allowPaging
        allowFiltering
        allowSorting
        allowExcelExport
        pageSettings={{ pageCount: 3 }}
        editSettings={{ allowDeleting: true, allowEditing: true }}
        toolbar={toolbar}
        allowPdfExport={true}
        ref={(g) => (grid = g)}
        allowResizing
      >
        <ColumnsDirective>
          {employeesGrid.map((item, idx) => (
            <ColumnDirective key={idx} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            Resize,
            Sort,
            ContextMenu,
            Filter,
            Page,
            ExcelExport,
            PdfExport,
            Toolbar,
          ]}
        />
      </GridComponent>
    </div>
  );
}

export default Employees;
