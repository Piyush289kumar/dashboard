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
import { ordersData, contextMenuItems, ordersGrid } from "../data/dummy";
import { Header } from "../components";

function Orders() {
  let grid;
  const toolbar = ["PdfExport", "ExcelExport"];
  const toolbarClick = (args) => {
    // grid.pdfExport("CurrentPage");
    if (args == 'pdf') {
      grid.pdfExport();
    }
    // if (args == 'excel') {
    //   grid.excelExport();
    // }
  };
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Orders" />
      <GridComponent
        id="gridcomp"
        dataSource={ordersData}
        allowPaging
        allowFiltering
        allowSorting
        allowExcelExport
        toolbar={toolbar}
        allowPdfExport={true}
        toolbarClick={() => toolbarClick('pdf', 'excel')}
        ref={(g) => (grid = g)}
        allowResizing
        contextMenuItems={contextMenuItems}
        editSettings={{ allowDeleting: true, allowEditing: true }}
      >
        <ColumnsDirective>
          {ordersGrid.map((item, idx) => (
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

export default Orders;
