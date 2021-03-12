import { useState } from "react";
import { useTable, useFilters, useSortBy, useGlobalFilter } from "react-table";
import styled from "styled-components";
import { FaPlus } from "react-icons/fa";
import { Row } from "react-bootstrap";
import { motion } from "framer-motion";

// custom
// import Modal from "./Modal";
// import Add from "./Add";

export const Amount = ({ value }) => {
  return (
    <>
      ${value} <span style={{ color: "grey", marginLeft: 5 }}>IQD</span>
      {/* <Genre>{value}</Genre>; */}
    </>
  );
};

export default function Table({ columns, data }) {
  const [showModal, setShowModal] = useState(false);
  const [showRowModal, setShowRowModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState([]);

  const {
    getTableProps, // table props from react-table
    getTableBodyProps, // table body props from react-table
    headerGroups, // headerGroups, if your table has groupings
    rows, // rows for the table based on the data passed
    prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
    // setFilter,
    // setAllFilters,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useFilters,
    useSortBy
  );

  const [filterInput, setFilterInput] = useState("");

  // Update the state when input changes
  const handleFilterChange = (e) => {
    const value = e.target.value || undefined;
    setGlobalFilter(value);
    // setAllFilters([{ id: "id", value: value }]);
    // setFilter("id", value); // Update the show.name filter. Now our table will filter and show only the rows which have a matching value
    setFilterInput(value);
  };

  /* 
    Render the UI for your table
    - react-table doesn't have UI, it's headless. We just need to put the react-table props from the Hooks, and it will do its magic automatically
  */
  return (
    <>
      <ReservationsContainer>
        <SearchBox
          placeholder="Search name, room, or id"
          value={filterInput}
          onChange={handleFilterChange}
        />
      </ReservationsContainer>

      <table style={{ width: "100%" }} {...getTableProps()}>
        <THead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </THead>
        <TBody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <TRow
                onClick={() => {
                  setSelectedRow(row.values);
                  setShowRowModal(true);
                }}
                {...row.getRowProps()}
              >
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </TRow>
            );
          })}
        </TBody>
      </table>
      {/* <Modal showModal={showModal} setShowModal={setShowModal}>
        <Add setShowModal={setShowModal} />
      </Modal>
      <Modal showModal={showRowModal} setShowModal={setShowRowModal}>
        <div>
          <h3>{selectedRow.id}</h3>
          <h3>{selectedRow.guest}</h3>
          <h3>{selectedRow.room}</h3>
          <h3>{selectedRow.date}</h3>
        </div>
      </Modal> */}
    </>
  );
}

const THead = styled.thead`
  font-size: 14px;
  color: ${({ theme }) => (theme.mode == "light" ? "grey" : "#abadaf")};
  width: 100%;
  /* border-left: 2px solid
    ${({ theme }) => (theme.mode == "light" ? "#fff" : "#000")}; */

  tr {
    /* border: 1px solid; */
    border-left: none;
    border-right: none;
    border-color: ${({ theme }) =>
      theme.mode == "light" ? "#dfdfde" : "#4d5153"};
  }

  th {
    padding: 8px;
    font-weight: bold;
    /* border-left: 1px solid
      ${({ theme }) => (theme.mode == "light" ? "#dfdfde" : "#4d5153")}; */

    :hover {
      background-color: rgba(128, 128, 128, 0.3);
    }
  }
`;

const TBody = styled.tbody`
  /* font-size: 14px; */
  border-left: 2px solid
    ${({ theme }) => (theme.mode == "light" ? "#fff" : "#000")};
`;

const TRow = styled.tr`
  border: 1px solid;
  border-left: none;
  border-right: none;
  border-color: ${({ theme }) =>
    theme.mode == "light" ? "#dfdfde" : "#4d5153"};

  td {
    padding: 8px;
    /* border-left: 1px solid
      ${({ theme }) => (theme.mode == "light" ? "#dfdfde" : "#4d5153")}; */

    :hover {
      cursor: pointer;
      background-color: rgba(128, 128, 128, 0.3);
    }
  }
`;

const Genre = styled.span`
  margin: 5px 20px;
  padding: 5px;
  border-radius: 20px;
  background-color: #9ae6b4;
`;

const ReservationsContainer = styled(Row)`
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const Button = styled(motion.button)`
  border: 2px solid;
  border-color: ${({ theme }) => (theme.mode == "light" ? "#fff" : "#000")};
  padding: 5px 20px;
  background-color: #536dfe;
  /* background-color: #5469d4; */
  /* background-color: #1899ff; */
  /* background-color: #000; */
  color: #fff;
  border-radius: 5px;
  display: flex;
  align-items: center;
`;

const SearchBox = styled.input`
  width: 30vw;
  border-width: 0px;
  border-radius: 5px;
  padding: 10px;
  border: solid ${({ theme }) => theme.text};
  border-width: 2px;
  background-color: ${({ theme }) => (theme.mode == "light" ? "#fff" : "#000")};
  color: ${({ theme }) => theme.text};
  /* box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.4);
  -webkit-box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.4); */
`;

const StyledFaPlus = styled(FaPlus)`
  padding-right: 5px;
`;
