import React from "react";
import SubTable from "./SubTable";
import {
  Circle,
  Alarm,
  BuildOutlined,
  FolderCopy,
  Check,
  EventAvailable,
  KeyboardArrowDown,
  KeyboardArrowUp,
  AddOutlined,
} from "@mui/icons-material";
import { IconButton, TableCell, TableRow, Chip } from "@mui/material";

const Row = (props) => {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  
  const handleStatusIcon = (status) => {
    if (status === "Finished") {
      return <FolderCopy />;
    } else if (status === "Ready to start") {
      return <EventAvailable />;
    } else if (status === "In Progress") {
      return <Check />;
    }
  };

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell style={{ border: "none" }}>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
          {row.storeId}
        </TableCell>
        <TableCell style={{ border: "none" }} component="th" scope="row">
          {row.project}
        </TableCell>
        <TableCell style={{ border: "none" }} align="left">
          <Chip
            label={row.tasks}
            icon={<BuildOutlined />}
            color="success"
            variant="outlined"
          />
        </TableCell>
        <TableCell style={{ border: "none" }} align="left">
          <span className="chatCol">
            <IconButton aria-label="expand row" size="small">
              {row.chat !== "" ? (
                <Circle sx={{ color: "#0E9384", fontSize: "12px" }} />
              ) : (
                <AddOutlined sx={{ fontSize: "15px" }} />
              )}
            </IconButton>
            {row.chat}
          </span>
        </TableCell>
        <TableCell style={{ border: "none" }} align="left">
          <Chip
            label={row.status}
            color="success"
            variant="outlined"
            icon={handleStatusIcon(row.status)}
          />
        </TableCell>
        <TableCell
          style={{ border: "none" }}
          align="left"
          sx={{ display: "flex", alignItems: "center" }}
        >
          <IconButton aria-label="expand row" size="small">
            <Alarm />
          </IconButton>
          {row.instalDuration}
        </TableCell>
        <TableCell style={{ border: "none" }} align="left">
          {row.scheduledTime}
        </TableCell>
        <TableCell style={{ border: "none" }} align="left">
          {row.storeOwner}
        </TableCell>
      </TableRow>
      <SubTable row={row} open={open} />
      {/* <InnerTable row={row} open={open} /> */}
    </React.Fragment>
  );
};

export default Row;
