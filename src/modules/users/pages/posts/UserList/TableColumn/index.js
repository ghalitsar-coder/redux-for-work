import { Info } from "react-feather";
import { Button } from "reactstrap";

const priceFormatter = (column, colIndex, { text }) => {
  return (
    <h5>
      <strong>$$ {text} $$</strong>
    </h5>
  );
};

const rowClasses = (row, rowIndex) => {
  let classes = "row-class";

  if (rowIndex > 2) {
    classes = "row-class-bigger-2";
  }
  return classes;
};

const rowEvents = {
  onClick: (e, row, rowIndex) => {
    console.log(row);
    console.log(`clicked on row with index: ${rowIndex}`);
  },
  // onMouseEnter: (e, row, rowIndex) => {
  //   console.log(`enter on row with index: ${rowIndex}`);
  // }
};

export const TableColumn = ({ handleViewUser, offset }) => [
  {
    dataField: "no",
    text: "No",
    formatter: (_, __, rowIndex) => {
      return <div className="w-100 text-center">{offset + (rowIndex + 1)}</div>;
    },
    headerStyle: () => {
      return { width: "5%", verticalAlign: "middle", textAlign: "center" };
    },
  },

  {
    dataField: "id",
    text: "Detail",
    formatter: (row, cell) => {
      console.log("ROW -> ", row);
      return (
        <Button
          color="neutral-first"
          className="mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center"
          onClick={() => handleViewUser(row)}
        >
          <Info color="#662b81" />
        </Button>
      );
    },
    headerStyle: () => {
      return {
        width: "10%",
        verticalAlign: "middle",
        textAlign: "center",
      };
    },
  },
  {
    dataField: "name",
    text: "User Name",
  },
  {
    dataField: "email",
    text: "User email",
    // formatter: (params) => {},
  },
  {
    dataField: "address.city",
    text: "User Address",
    formatter: (cell, row) => {
      if (row.address.city === "Lebsackbury") {
        return (
          <span>
            <strong style={{ color: "red" }}>{cell}</strong>
          </span>
        );
      }
      return <span>{cell}</span>;
    },
    headerStyle: () => {
      return { width: "15%", verticalAlign: "middle", textAlign: "center" };
    },
  },
];
// export const TableColumn = [
//   {
//     dataField: "id",
//     text: "User ID ",
//     // * HEADER ALIGN
//     headerAlign: (column, colIndex) => "right",
// * HEADER FORMATTER
// headerFormatter: (column, colIndex) => {
//   console.log(colIndex);
//   return (
//     <h5>
//       <strong>$$ {column.text} $$ </strong>{" "}
//     </h5>
//   );
// },
// * HEADER CLASSESS
// headerClasses: "row-odd",
// headerClasses: (column, colIndex) => {
//   if (colIndex % 2 === 0) return "demo-row-even";
//   return "demo-row-odd";
// },
// * HEADER STYLE
//     headerStyle: {
//       backgroundColor: "#c8e6c9",
//     },
//     // headerStyle: (column, colIndex) => {
//     //   if (colIndex % 2 === 0) {
//     //     return {
//     //       backgroundColor: '#81c784'
//     //     };
//     //   }
//     //   return {
//     //     backgroundColor: '#c8e6c9'
//     //   };
//     // }
//     footer: "Footer 1",
//   },
//   {
//     dataField: "name",
//     text: "User Name",
//     sort: true,
//     // *  ==== CLASSESS

//     classes: (cell, row, rowIndex, colIndex) => {
//       if (rowIndex % 2 === 0) return "row-even";
//       return "row-odd";
//     },
//     // *  ==== STYLE
//     //   style: (cell, row, rowIndex, colIndex) => {
//     //     if (rowIndex % 2 === 0) {
//     //       return {
//     //         backgroundColor: '#81c784'
//     //       };
//     //     }
//     //     return {
//     //       backgroundColor: '#c8e6c9'
//     //     };
//     footer: "Footer 2",
//   },
//   {
//     dataField: "email",
//     text: "User Email",
//     sort: true,
//     // *  ==== ALIGN

//     align: (cell, row, rowIndex, colIndex) => {
//       if (rowIndex % 2 === 0) return "right";
//       return "left";
//     },
//     footer: "Footer 3",
//   },
//   {
//     dataField: "address.city",
//     text: "User Live",
//     sort: true,
//     // *  ==== FORMATTER
//     formatter: (cell, row) => {
//       console.log("THIS IS CELL ->", cell);
//       console.log("THIS IS ROW ->", row);
//       if (row.address.city === "Lebsackbury") {
//         return (
//           <span>
//             <strong style={{ color: "red" }}>{cell}</strong>
//           </span>
//         );
//       }
//       return <span>{cell}</span>;
//     },
//     // *  ==== EVENT

//     events: {
//       onClick: (e, column, columnIndex, row, rowIndex) =>
//         console.log(row.address.city),
//     },
//     footer: "Footer 4",
//     // footer: columnData => columnData.reduce((acc, item) => acc + item, 0)
//     // footerFormatter: priceFormatter,
//   },
// ];
