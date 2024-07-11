import * as React from "react";
import "./TableDisplay.css";
import tableData from "../Tabledata.json";
import subData from "../subTable.json";
import Row from "./Row";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  IconButton,
} from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

// function Row(props) {
//   const { row } = props;
//   const [open, setOpen] = React.useState(false);
//   const handleStatusIcon=(status)=>{
//     if(status==='Finished'){
//       return <FolderCopyIcon/>
//     }else if (status==='Ready to start'){
//       return <EventAvailableIcon/>
//     }else if (status==='In Progress'){
//       return <CheckIcon/>
//     }
//   }

//   return (
//     <React.Fragment>
//       <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
//         <TableCell style={{ border: "none" }}>
//           <IconButton
//             aria-label="expand row"
//             size="small"
//             onClick={() => setOpen(!open)}
//           >
//             {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
//           </IconButton>
//           {row.storeId}
//         </TableCell>
//         <TableCell style={{ border: "none" }} component="th" scope="row">
//           {row.project}
//         </TableCell>
//         <TableCell style={{ border: "none" }} align="left">
//           <Chip
//             label={row.tasks}
//             icon={<BuildOutlinedIcon />}
//             color="success"
//             variant="outlined"
//           />
//         </TableCell>
//         <TableCell style={{ border: "none" }} align="left">
//         <span className="chatCol"><IconButton aria-label="expand row" size="small">
//            {row.chat!=="" ?<Circle sx={{color:"#0E9384", fontSize:"12px"}}/>:<AddOutlinedIcon sx={{fontSize:"15px"}}/>}
//           </IconButton>
//           {row.chat}</span>
//         </TableCell>
//         <TableCell style={{ border: "none" }} align="left">
//           <Chip label={row.status} color="success" variant="outlined" icon={handleStatusIcon(row.status)}/>
//         </TableCell>
//         <TableCell
//           style={{ border: "none" }}
//           align="left"
//           sx={{ display: "flex", alignItems: "center" }}
//         >
//           <IconButton aria-label="expand row" size="small">
//             <AlarmIcon />
//           </IconButton>
//           {row.instalDuration}
//         </TableCell>
//         <TableCell style={{ border: "none" }} align="left">
//           {row.scheduledTime}
//         </TableCell>
//       </TableRow>
//       <SubTable row={row} open={open} />
//       {/* <InnerTable row={row} open={open} /> */}
//     </React.Fragment>
//   );
// }

export default function TableDisplay() {
  function createData() {
    let newObj = tableData;
    newObj = newObj.map((obj) => {
      const entry = subData?.find((val) => obj.id === val.projectId);
      return { ...obj, subTableData: entry?.data || "" };
    });
    console.log("row", newObj);
    return newObj;
  }

  const rows = createData();
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <TableContainer
      component={Paper}
      sx={{ width: "95%", margin: "auto", marginTop: "40px" }}
    >
      <Table aria-label="collapsible table">
        <TableHead sx={{ background: "#f0efef" }}>
          <TableRow>
            <TableCell sx={{ display: "flex", alignItems: "center" }}>
              <Checkbox {...label} />
              Store
              <IconButton>
                <ArrowDownwardIcon />
              </IconButton>
            </TableCell>
            <TableCell align="left">Project</TableCell>
            <TableCell align="left">Tasks</TableCell>
            <TableCell align="left">Chat</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="left">Install Duration</TableCell>
            <TableCell align="left">Scheduled Date</TableCell>
            <TableCell align="left" style={{width:"30%", }}><p style={{width: "5px"}}>Store Owner</p>Store Owner</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.storeId} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
