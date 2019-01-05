/* eslint-disable no-console */

import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Paper from "@material-ui/core/Paper";
import { AutoSizer, Column, SortDirection, Table } from "react-virtualized";
import { Redirect } from "react-router-dom";
const styles = theme => ({
  table: {
    fontFamily: theme.typography.fontFamily
  },
  flexContainer: {
    display: "flex",
    alignItems: "center",
    boxSizing: "border-box"
  },
  tableRow: {
    cursor: "pointer"
  },
  tableRowHover: {
    "&:hover": {
      backgroundColor: theme.palette.grey[200]
    }
  },
  tableCell: {
    flex: 1
  },
  noClick: {
    cursor: "initial"
  }
});

class MuiVirtualizedTable extends React.PureComponent {
  getRowClassName = ({ index }) => {
    const { classes, rowClassName, onRowClick } = this.props;

    return classNames(classes.tableRow, classes.flexContainer, rowClassName, {
      [classes.tableRowHover]: index !== -1 && onRowClick != null
    });
  };

  cellRenderer = ({ cellData, columnIndex = null }) => {
    const { columns, classes, rowHeight, onRowClick } = this.props;
    return (
      <TableCell
        component="div"
        className={classNames(classes.tableCell, classes.flexContainer, {
          [classes.noClick]: onRowClick == null
        })}
        variant="body"
        style={{ height: rowHeight }}
        align={
          (columnIndex != null && columns[columnIndex].numeric) || false
            ? "right"
            : "left"
        }
      >
        {cellData}
      </TableCell>
    );
  };

  headerRenderer = ({ label, columnIndex, dataKey, sortBy, sortDirection }) => {
    const { headerHeight, columns, classes, sort } = this.props;
    const direction = {
      [SortDirection.ASC]: "asc",
      [SortDirection.DESC]: "desc"
    };

    const inner =
      !columns[columnIndex].disableSort && sort != null ? (
        <TableSortLabel
          active={dataKey === sortBy}
          direction={direction[sortDirection]}
        >
          {label}
        </TableSortLabel>
      ) : (
        label
      );

    return (
      <TableCell
        component="div"
        className={classNames(
          classes.tableCell,
          classes.flexContainer,
          classes.noClick
        )}
        variant="head"
        style={{ height: headerHeight }}
        align={columns[columnIndex].numeric || false ? "right" : "left"}
      >
        {inner}
      </TableCell>
    );
  };

  render() {
    const { classes, columns, ...tableProps } = this.props;
    return (
      <AutoSizer>
        {({ height, width }) => (
          <Table
            className={classes.table}
            height={height}
            width={width}
            {...tableProps}
            rowClassName={this.getRowClassName}
          >
            {columns.map(
              (
                { cellContentRenderer = null, className, dataKey, ...other },
                index
              ) => {
                let renderer;
                if (cellContentRenderer != null) {
                  renderer = cellRendererProps =>
                    this.cellRenderer({
                      cellData: cellContentRenderer(cellRendererProps),
                      columnIndex: index
                    });
                } else {
                  renderer = this.cellRenderer;
                }

                return (
                  <Column
                    key={dataKey}
                    headerRenderer={headerProps =>
                      this.headerRenderer({
                        ...headerProps,
                        columnIndex: index
                      })
                    }
                    className={classNames(classes.flexContainer, className)}
                    cellRenderer={renderer}
                    dataKey={dataKey}
                    {...other}
                  />
                );
              }
            )}
          </Table>
        )}
      </AutoSizer>
    );
  }
}

MuiVirtualizedTable.propTypes = {
  classes: PropTypes.object.isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      cellContentRenderer: PropTypes.func,
      dataKey: PropTypes.string.isRequired,
      width: PropTypes.number.isRequired
    })
  ).isRequired,
  headerHeight: PropTypes.number,
  onRowClick: PropTypes.func,
  rowClassName: PropTypes.string,
  rowHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
  sort: PropTypes.func
};

MuiVirtualizedTable.defaultProps = {
  headerHeight: 56,
  rowHeight: 56
};

const WrappedVirtualizedTable = withStyles(styles)(MuiVirtualizedTable);

// const data = [
//   ["Zohaib Ahmad", "510-292-1457", "Yes", 13.67, "No", "12/10/2012"],
//   ["Sarmad Farooq", 237, 9.0, 37, 4.3],
//   ["Awais Raza", 262, 16.0, 24, 6.0],
//   ["Hisham Riaz", 305, 3.7, 67, 4.3],
//   ["Waleed Khalid", 356, 16.0, 49, 3.9],
//   ["Uzair Farooq", 262, 16.0, 24, 6.0],
//   ["Ahmed Almahbashi", 305, 3.7, 67, 4.3],
//   ["Tim Song", 356, 16.0, 49, 3.9]
// ];

// const colName = ["id", "name", "phone", "active", "hours", "paid", "start"];

let id = 0;
function createData(name, phone, active, hours, paid, start) {
  id += 1;
  return { id, name, phone, active, hours, paid, start };
}

function createData1(
  name,
  clockin,
  lunchout,
  lunchin,
  clockout,
  onclock,
  hours
) {
  return { name, clockin, lunchout, lunchin, clockout, onclock, hours };
}

class ReactVirtualizedTable extends Component {
  state = {
    redirect: false
  };

  render() {
    if (this.state.redirect) {
      return (
        <Redirect
          to={{
            pathname: "/viewemployee",
            state: { referrer: this.state.data }
          }}
        />
      );
    }
    const rows = [];
    const { data, colName, req } = this.props;
    let height = 400;
    for (let i = 0; i < data.length; i += 1) {
      if (req === "office") {
        rows.push(createData(...data[i]));
        height = 430;
      } else {
        rows.push(createData1(...data[i]));
      }
    }
    id = 0;
    return (
      <Paper style={{ height: height, width: "90%", margin: 10 }}>
        <WrappedVirtualizedTable
          rowCount={rows.length}
          rowGetter={({ index }) => rows[index]}
          onRowClick={event =>
            this.setState({ data: event.rowData, redirect: true })
          }
          columns={[
            {
              width: 140,
              flexGrow: 1.0,
              label: colName[0].toUpperCase(),
              dataKey: colName[0]
            },
            {
              width: 140,
              flexGrow: 1.0,
              label: colName[1].toUpperCase(),
              dataKey: colName[1]
            },
            {
              width: 140,
              flexGrow: 1.0,
              label: colName[2].toUpperCase(),
              dataKey: colName[2]
            },
            {
              width: 140,
              flexGrow: 1.0,
              label: colName[3].toUpperCase(),
              dataKey: colName[3]
            },
            {
              width: 140,
              flexGrow: 1.0,
              label: colName[4].toUpperCase(),
              dataKey: colName[4]
            },
            {
              width: 140,
              flexGrow: 1.0,
              label: colName[5].toUpperCase(),
              dataKey: colName[5]
            },
            {
              width: 140,
              flexGrow: 1.0,
              label: colName[6].toUpperCase(),
              dataKey: colName[6]
            }
          ]}
        />
      </Paper>
    );
  }
}

export default ReactVirtualizedTable;
