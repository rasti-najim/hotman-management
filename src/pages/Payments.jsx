import { useEffect, useState, useMemo, useContext } from "react";
import { Row } from "react-bootstrap";
import styled from "styled-components";
import { FaPlus } from "react-icons/fa";
import { Frame, Page, Stack, useCycle } from "framer";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { format } from "date-fns";
import faker from "faker";

// custom
import Table, { Amount } from "../components/Table";

export default function Payments() {
  const columns = useMemo(
    () => [
      {
        Header: "AMOUNT",
        // accessor: "show.language",
        accessor: "amount",
        Cell: ({ cell: { value } }) => <Amount value={value} />,
      },
      {
        Header: "ID",
        // accessor: "show.language",
        accessor: "id",
      },
      {
        Header: "GUEST",
        // accessor: "show.genres",
        accessor: "guest",
        // Cell: ({ cell: { value } }) => <Genres values={value} />,
      },
      {
        Header: "ROOM",
        // accessor: "show.runtime",
        accessor: "room",
        // Cell: ({ cell: { value } }) => {
        //   const hour = Math.floor(value / 60);
        //   const min = Math.floor(value % 60);
        //   return (
        //     <>
        //       {hour > 0 ? `${hour} hr${hour > 1 ? "s" : ""} ` : ""}
        //       {min > 0 ? `${min} min${min > 1 ? "s" : ""}` : ""}
        //     </>
        //   );
        // },
      },
      {
        Header: "DATE",
        // accessor: "show.status",
        accessor: "date",
      },
    ],
    []
  );

  // useEffect(() => {
  //   fetch("https://api.tvmaze.com/search/shows?q=snow")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => setData(data));
  // }, []);

  const data = new Array(100).fill(true).map(() => ({
    amount: faker.finance.amount(),
    id: faker.random.number(),
    guest: faker.name.findName(),
    room: faker.random.number(),
    // date: faker.date.past(),
    date: format(new Date(), "MMM dd, yyyy, h:m a"),
  }));

  return (
    <Container>
      <h1>Payments</h1>
      <Table columns={columns} data={data} />
    </Container>
  );
}

const Container = styled(motion.div)`
  height: 90vh;
  width: 80vw;
  padding-left: 30px;
  /* background: ${({ theme }) => theme.background}; */
  overflow-y: scroll;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */

  ::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
`;
