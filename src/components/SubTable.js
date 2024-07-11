import React from "react";
import {
  MoreVert,
  ArrowDownward,
  ArrowForward,
  ArrowForwardIos,
  Circle,
  PictureInPictureAltRounded,
  AccessAlarm,
  AddOutlined
} from "@mui/icons-material";
import CreateIcon from "@mui/icons-material/Create";
import Collapse from "@mui/material/Collapse";
import { IconButton, TableCell, TableRow } from "@mui/material";

const SubTable = ({ row, open }) => {
  return (
    <TableRow>
      <TableCell
        style={{
          paddingBottom: 0,
          paddingTop: 0,
          border: " 1px solid #ddddd",
        }}
        colSpan={8}
      >
        <Collapse in={open} timeout="auto" unmountOnExit>
          <div className="subTable-container">
            <ul className="subTable-tabs">
              <li>Project Info</li>
              <li>Delivery</li>
              <li>Installer Details</li>
              <li>Devices</li>
              <li className="taskSteps">Task Steps</li>
            </ul>
            <div className="Selectedtabs-data">
              <ul
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <li className="Selectedtabs-heading">
                  <div>
                    <PictureInPictureAltRounded />
                  </div>
                  <div>
                    <h4>
                      Preamble Task Steps <CreateIcon />
                    </h4>
                    <h4 style={{ display: "flex", alignItems: "centre" }}>
                      <span>Task Group 1</span>
                      <span>
                        <ArrowForwardIos sx={{ fontSize: "15px" }} />{" "}
                      </span>
                      <span
                        style={{
                          color: "#0E9384",
                          textDecorationLine: "underline",
                          textDecorationStyle: "solid",
                        }}
                      >
                        Task Group 2
                      </span>
                    </h4>
                  </div>
                </li>
              </ul>
              <li className="dateTabs">
                <span>June1, 2024</span>
                <span>
                  <ArrowForward sx={{ fontSize: "15px" }} />
                </span>
                <span>Jun 30, 2024</span>
              </li>
            </div>
            <table>
              <thead className="subTableHead">
              <tr>
                <th>
                {/* <Checkbox  /> */}
                  <input type="checkbox" />
                </th>
                <th>Task<IconButton aria-label="expand row" size="small">
                <ArrowDownward sx={{color:"black",fontSize:"20px"}}/> </IconButton></th>
                <th>Chats</th>
                <th>Notes</th>
                <th>Task Duration</th>
                <th></th>
              </tr>
              </thead>
              {row.subTableData.map((items,ind) => {
                return (
                  <tr key={ind}>
                    <td>
                    {/* <Checkbox  /> */}
                      <input type="checkbox" />
                    </td>
                    <td> {items.task}</td>
                    <td>
                      <span className="chatCol">
                        <IconButton  aria-label="expand row" size="small">
                          {items.chat!== "" ? (
                            <Circle sx={{ color: "#0E9384", fontSize: "12px" }} />
                          ) : (
                            <AddOutlined sx={{ fontSize: "15px" }} />
                          )}
                        </IconButton>
                        {items.chat}
                      </span>
                    </td>
                    <td>{items.notes}</td>
                    <td>
                      <IconButton aria-label="expand row" size="small">
                        <AccessAlarm />
                      </IconButton>
                      {items.taskDuration}
                    </td>
                    <td>
                    <IconButton aria-label="expand row" size="small">
                      <MoreVert />
                      </IconButton>
                    </td>
                  </tr>
                );
              })}
            </table>
            <div
              style={{
                padding: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <ul className="subTable__status">
                <li className="addStep">Add Another Step</li>
                <li className="setUp">Setup Dependency</li>
                <li className="setTask">Set Task Dependency</li>
              </ul>
              <div className="btns">
                <button className="saveTemp">Save Template</button>
                <button className="resetTask">Reset Task List</button>
                <button className="saveTask">Save Task Step</button>
              </div>
            </div>
          </div>
        </Collapse>
      </TableCell>
    </TableRow>
  );
};

export default SubTable;
