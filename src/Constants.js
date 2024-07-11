export const mainTableCol = [
    '',
    "Store",
    "Project",
    "Tasks",
    "Chat",
    "Status",
    "Install Duration",
    "Scheduled Dates"
];
<Table
size="medium"
aria-label="purchases"
sx={{
  border: "1px solid grey",
  // width: "98%",
  margin: "auto",
  // marginLeft:"10px",
  // marginRight:"10px"
  // marginTop: "30px",
}}
>
<TableHead>
  <TableRow>
    <TableCell padding="checkbox">
      <Checkbox
        color="primary"
        // indeterminate={numSelected > 0 && numSelected < rowCount}
        // checked={rowCount > 0 && numSelected === rowCount}
        // onChange={onSelectAllClick}
        inputProps={{
          "aria-label": "select all",
        }}
      />
    </TableCell>
    <TableCell>Task</TableCell>
    <TableCell>Chat</TableCell>
    <TableCell align="left">Notes</TableCell>
    <TableCell align="left">Task Duration</TableCell>
  </TableRow>
</TableHead>
<TableBody>
  {row.subTableData.map((val) => (
    <TableRow key={val.task}>
      <Checkbox
        color="primary"
        // checked={isItemSelected}
        // inputProps={{
        //   "aria-labelledby": labelId,
        // }}
      />
      <TableCell
        component="th"
        scope="row"
        // sx={{ border: "1px solid blue" }}
      >
        {val.task}
      </TableCell>
      <TableCell>{val.chat}</TableCell>
      <TableCell
        align="left"
        // sx={{ border: "1px solid blue" }}
      >
        {val.notes}
      </TableCell>
      <TableCell
        align="left"
        sx={{
          display: "flex",
          alignItems: "center",
          // border: "1px solid blue",
        }}
      >
        {/* <AlarmIcon /> */}
        {val.taskDuration}
      </TableCell>
    </TableRow>
  ))}
  
</TableBody>
</Table>