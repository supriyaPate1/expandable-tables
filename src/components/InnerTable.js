// import React from "react";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
// import {
//   ArrowForward,
//   ArrowForwardIos,
//   CheckBox,
//   Circle,
//   PictureInPictureAltRounded,

// } from "@mui/icons-material";
// import CreateIcon from "@mui/icons-material/Create";
// import Collapse from "@mui/material/Collapse";
// import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
// import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
// import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
// import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
// import { Checkbox, Chip, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";




// function Row(props) {
//     const { row } = props;
//     // const [open, setOpen] = React.useState(false);
//   console.log("hhgghbhjhjh",row)
//     return (
//       <React.Fragment>
//         <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
//           <TableCell style={{ border: "none" }}>
//             <IconButton
//               aria-label="expand row"
//               size="small"
//             //   onClick={() => setOpen(!open)}
//             >
//               <CheckBox/>
//             </IconButton>
//             {row.task}
//           </TableCell>
//           {/* <TableCell style={{ border: "none" }} component="th" scope="row">
//             {row.chat}
//           </TableCell> */}
//           <TableCell style={{ border: "none" }} align="left">
//             {/* <Chip
//               label={row.notes}
//               icon={<BuildOutlinedIcon />}
//               color="success"
//               variant="outlined"
//             /> */}
//           </TableCell>
//           <TableCell style={{ border: "none" }} align="left">
//           <span className="chatCol"><IconButton aria-label="expand row" size="small">
//              {row.chat!=="" ?<Circle sx={{color:"green", fontSize:"12px"}}/>:<AddOutlinedIcon sx={{fontSize:"15px"}}/>}
//             </IconButton>
//             {row.chat}</span>
//           </TableCell>
//           {/* <TableCell style={{ border: "none" }} align="left">
//             <Chip label={row.status} color="success" variant="outlined" />
//           </TableCell> */}
//           <TableCell
//             style={{ border: "none" }}
//             align="left"
//             sx={{ display: "flex", alignItems: "center" }}
//           >
//             <IconButton aria-label="expand row" size="small">
//               <AccessAlarmIcon />
//             </IconButton>
//             {row.taskDuration}
//           </TableCell>
//           <TableCell style={{ border: "none" }} align="left">
//            <MoreVertIcon/>
//           </TableCell>
//         </TableRow>
//       </React.Fragment>
//     );
//   }
// const InnerTable = ({ row, open }) => {
//   return (
//     <TableRow>
//       <TableCell
//         style={{
//           paddingBottom: 0,
//           paddingTop: 0,
//           border: " 1px solid #ddddd",
//         }}
//         colSpan={7}
//       >
//           <div className="subTable-container">
//             <ul className="subTable-tabs">
//               <li>Project Info</li>
//               <li>Delivery</li>
//               <li>Installer Details</li>
//               <li>Devices</li>
//               <li className="taskSteps">Task Steps</li>
//             </ul>
//             <div className="Selectedtabs-data">
//               <ul
//                 style={{ display: "flex", alignItems: "center", gap: "10px" }}
//               >
//                 <li className="Selectedtabs-heading">
//                   <div>
//                     <PictureInPictureAltRounded />
//                   </div>
//                   <div>
//                     <h4>
//                       Preamble Task Steps <CreateIcon />
//                     </h4>
//                     <h4 style={{ display: "flex", alignItems: "centre" }}>
//                       <span>Task Group 1</span>
//                       <span>
//                         <ArrowForwardIos sx={{ fontSize: "15px" }} />{" "}
//                       </span>
//                       <span
//                         style={{
//                           color: "green",
//                           textDecorationLine: "underline",
//                           textDecorationStyle: "solid",
//                         }}
//                       >
//                         Task Group 2
//                       </span>
//                     </h4>
//                   </div>
//                 </li>
//               </ul>
//               <li className="dateTabs">
//                 <span>June1, 2024</span>
//                 <span>
//                   <ArrowForward sx={{ fontSize: "15px" }} />
//                 </span>
//                 <span>Jun 30, 2024</span>
//               </li>
//             </div>
//             {/* <table>
//               <thead className="subTableHead">
//               <tr>
//                 <th>
//                   <input type="checkbox" />
//                 </th>
//                 <th>Task</th>
//                 <th>Chats</th>
//                 <th>Notes</th>
//                 <th>Task Duration</th>
//                 <th></th>
//               </tr>
//               </thead>
//               {row.subTableData.map((items) => {
//                 return (
//                   <tr>
//                     <td>
//                       <input type="checkbox" />
//                     </td>
//                     <td> {items.task}</td>
//                     <td>
//                       <span className="chatCol">
//                         <IconButton aria-label="expand row" size="small">
//                           {items.chat!== "" ? (
//                             <Circle sx={{ color: "green", fontSize: "12px" }} />
//                           ) : (
//                             <AddOutlinedIcon sx={{ fontSize: "15px" }} />
//                           )}
//                         </IconButton>
//                         {items.chat}
//                       </span>
//                     </td>
//                     <td>{items.notes}</td>
//                     <td>
//                       <IconButton aria-label="expand row" size="small">
//                         <AccessAlarmIcon />
//                       </IconButton>
//                       {items.taskDuration}
//                     </td>
//                     <td>
//                       <MoreVertIcon />
//                     </td>
//                   </tr>
//                 );
//               })}
//             </table> */}
//  <TableContainer
//       component={Paper}
//       sx={{ width: "95%", margin: "auto", marginTop: "40px" }}
//     >
//       <Table aria-label="collapsible table">
//         <TableHead sx={{ background: "#f0efef" }}>
//           <TableRow>
//             <TableCell sx={{ display: "flex", alignItems: "center" }}>
//               <Checkbox  />
//               <ArrowDownwardOutlinedIcon />
//               Store
//             </TableCell>
//             <TableCell align="left">Project</TableCell>
//             <TableCell align="left">Tasks</TableCell>
//             <TableCell align="left">Chat</TableCell>
//             <TableCell align="left">Status</TableCell>
//             <TableCell align="left">Install Duration</TableCell>
//             <TableCell align="left">Scheduled Date</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {row.subTableData.map((rowData) => (
//             <Row key={row.name} row={rowData} />
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//             <div
//               style={{
//                 padding: "10px",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "space-between",
//               }}
//             >
//               <ul className="subTable__status">
//                 <li className="addStep">Add Another Step</li>
//                 <li className="setUp">Setup Dependency</li>
//                 <li className="setTask">Set Task Dependency</li>
//               </ul>
//               <div className="btns">
//                 <button className="saveTemp">Save Template</button>
//                 <button className="resetTask">Reset Task List</button>
//                 <button className="saveTask">Save Task Step</button>
//               </div>
//             </div>
//           </div>
//       </TableCell>
//     </TableRow>
//   );
// };

// export default InnerTable;
import React from 'react'

const InnerTable = () => {
  return (
    <div style={{width:"30%", height:"50px", border:"1px solid red"}}>InnerTable</div>
  )
}

export default InnerTable