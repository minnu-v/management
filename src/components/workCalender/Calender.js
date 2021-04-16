import * as React from "react";
import Paper from "@material-ui/core/Paper";
import TableCell from "@material-ui/core/TableCell";
import {
  darken,
  fade,
  lighten,
} from "@material-ui/core/styles/colorManipulator";
import { ViewState, EditingState } from "@devexpress/dx-react-scheduler";
import classNames from "clsx";
import {
  Scheduler,
  MonthView,
  Appointments,
  Toolbar,
  DateNavigator,
  AppointmentTooltip,
  AppointmentForm,
  EditRecurrenceMenu,
  Resources,
  DragDropProvider,
} from "@devexpress/dx-react-scheduler-material-ui";
import { withStyles } from "@material-ui/core/styles";

const owners = [
  {
    text: "Minnu Varghese",
    id: 1,
    color: "#ffa199",
  },
  {
    text: "Akhila Sulthana",
    id: 2,
    color: "#ff99bb",
  },
  {
    text: "Aneena Anil",
    id: 3,
    color: "#c579d2",
  },
];
const appointments = [
  {
    id: 0,
    title: "Republic Day",
    startDate: "2021-01-26T00:00",
    endDate: "2021-01-26T23:59",
    ownerId: 1,
  },
  {
    id: 1,
    title: "Good Friday",
    startDate: "2021-04-02T00:00",
    endDate: "2021-04-02T23:59",
    ownerId: 2,
  },
  {
    id: 2,
    title: "Vishu",
    startDate: "2021-04-14T00:00",
    endDate: "2021-04-14T23:59",
    ownerId: 1,
  },
  {
    id: 3,
    title: "May Day",
    startDate: "2021-05-01T00:00",
    endDate: "2021-05-01T23:59",
    ownerId: 2,
  },
  {
    id: 4,
    title: "Eid al-Fitr",
    startDate: "2021-05-13T00:00",
    endDate: "2021-05-13T23:59",
    ownerId: 1,
  },
  {
    id: 5,
    title: "Bakrid",
    startDate: "2021-07-20T00:00",
    endDate: "2021-07-20T23:59",
    ownerId: 2,
  },
  {
    id: 6,
    title: "Independence Day",
    startDate: "2021-08-15T00:00",
    endDate: "2021-08-15T23:59",
    ownerId: 1,
  },
  {
    id: 7,
    title: "First Onam",
    startDate: "2021-08-20T00:00",
    endDate: "2021-08-20T23:59",
    ownerId: 3,
  },
  {
    id: 8,
    title: "Thiruvonam",
    startDate: "2021-08-21T00:00",
    endDate: "2021-08-21T23:59",
    ownerId: 2,
  },
  {
    id: 9,
    title: "Gandhi Jayanthi",
    startDate: "2021-10-02T00:00",
    endDate: "2021-10-02T23:59",
    ownerId: 2,
  },
  {
    id: 10,
    title: "Mahanavami",
    startDate: "2021-10-14T00:00",
    endDate: "2021-10-14T23:59",
    ownerId: 1,
  },
  {
    id: 10,
    title: "Christmas",
    startDate: "2021-12-25T00:00",
    endDate: "2021-12-25T23:59",
    ownerId: 1,
  },
];

const resources = [
  {
    fieldName: "ownerId",
    title: "Owners",
    instances: owners,
  },
];

const getBorder = (theme) =>
  `1px solid ${
    theme.palette.type === "light"
      ? lighten(fade(theme.palette.divider, 1), 0.88)
      : darken(fade(theme.palette.divider, 1), 0.68)
  }`;

const DayScaleCell = (props) => (
  <MonthView.DayScaleCell
    {...props}
    style={{ textAlign: "center", fontWeight: "bold" }}
  />
);

const styles = (theme) => ({
  cell: {
    color: "#78909C!important",
    position: "relative",
    userSelect: "none",
    verticalAlign: "top",
    padding: 0,
    height: 100,
    borderLeft: getBorder(theme),
    "&:first-child": {
      borderLeft: "none",
    },
    "&:last-child": {
      paddingRight: 0,
    },
    "tr:last-child &": {
      borderBottom: "none",
    },
    "&:hover": {
      backgroundColor: "white",
    },
    "&:focus": {
      backgroundColor: fade(theme.palette.primary.main, 0.15),
      outline: 0,
    },
  },
  content: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    position: "absolute",
    alignItems: "center",
  },
  text: {
    padding: "0.5em",
    textAlign: "center",
  },
  sunBack: {
    backgroundColor: "#FDFAD6",
  },
  cloudBack: {
    backgroundColor: "#E4E7E9",
  },
  rainBack: {
    backgroundColor: "#D5EFFB",
  },
  opacity: {
    opacity: "0.3",
  },
  appointment: {
    borderRadius: "10px",
    "&:hover": {
      opacity: 0.6,
    },
  },
  apptContent: {
    "&>div>div": {
      whiteSpace: "normal !important",
      lineHeight: 1.2,
    },
  },
  flexibleSpace: {
    flex: "none",
  },
  flexContainer: {
    display: "flex",
    alignItems: "center",
  },
  tooltipContent: {
    padding: theme.spacing(3, 1),
    paddingTop: 0,
    backgroundColor: theme.palette.background.paper,
    boxSizing: "border-box",
    width: "400px",
  },
  tooltipText: {
    ...theme.typography.body2,
    display: "inline-block",
  },
  title: {
    ...theme.typography.h6,
    color: theme.palette.text.secondary,
    fontWeight: theme.typography.fontWeightBold,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  icon: {
    color: theme.palette.action.active,
    verticalAlign: "middle",
  },
  circle: {
    width: theme.spacing(4.5),
    height: theme.spacing(4.5),
    verticalAlign: "super",
  },
  textCenter: {
    textAlign: "center",
  },
  dateAndTitle: {
    lineHeight: 1.1,
  },
  titleContainer: {
    paddingBottom: theme.spacing(2),
  },
  container: {
    paddingBottom: theme.spacing(1.5),
  },
});

// #FOLD_BLOCK
const CellBase = React.memo(
  ({
    classes,
    startDate,
    formatDate,
    otherMonth,
    // #FOLD_BLOCK
  }) => {
    const iconId = Math.abs(Math.floor(Math.sin(startDate.getDate()) * 10) % 3);
    const isFirstMonthDay = startDate.getDate() === 1;
    const formatOptions = isFirstMonthDay
      ? { day: "numeric", month: "long" }
      : { day: "numeric" };
    return (
      <TableCell
        tabIndex={0}
        className={classNames({
          [classes.cell]: true,
          [classes.rainBack]: iconId === 0,
          [classes.sunBack]: iconId === 1,
          [classes.cloudBack]: iconId === 2,
          [classes.opacity]: otherMonth,
        })}
      >
        <div className={classes.text}>
          {formatDate(startDate, formatOptions)}
        </div>
      </TableCell>
    );
  }
);

const TimeTableCell = withStyles(styles, { name: "Cell" })(CellBase);

const Appointment = withStyles(styles, {
  name: "Appointment",
})(({ classes, ...restProps }) => (
  <Appointments.Appointment {...restProps} className={classes.appointment} />
));

const AppointmentContent = withStyles(styles, {
  name: "AppointmentContent",
})(({ classes, ...restProps }) => (
  <Appointments.AppointmentContent
    {...restProps}
    className={classes.apptContent}
  />
));

const FlexibleSpace = withStyles(styles, {
  name: "ToolbarRoot",
})(({ classes, ...restProps }) => (
  <Toolbar.FlexibleSpace
    {...restProps}
    className={classes.flexibleSpace}
  ></Toolbar.FlexibleSpace>
));

export default class Demo extends React.PureComponent {
  // #FOLD_BLOCK
  constructor(props) {
    super(props);
    var today = new Date(),
      date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();

    this.state = {
      data: appointments,
      date: date,
    };

    this.commitChanges = this.commitChanges.bind(this);
  }

  // #FOLD_BLOCK
  commitChanges({ added, changed, deleted }) {
    this.setState((state) => {
      let { data } = state;
      if (added) {
        const startingAddedId =
          data.length > 0 ? data[data.length - 1].id + 1 : 0;
        data = [...data, { id: startingAddedId, ...added }];
      }
      if (changed) {
        data = data.map((appointment) =>
          changed[appointment.id]
            ? { ...appointment, ...changed[appointment.id] }
            : appointment
        );
      }
      if (deleted !== undefined) {
        data = data.filter((appointment) => appointment.id !== deleted);
      }
      return { data };
    });
  }

  render() {
    const { data } = this.state;

    return (
      <Paper>
        <Scheduler data={data}>
          <EditingState onCommitChanges={this.commitChanges} />
          <ViewState defaultCurrentDate={this.state.date} />

          <MonthView
            timeTableCellComponent={TimeTableCell}
            dayScaleCellComponent={DayScaleCell}
          />

          <Appointments
            appointmentComponent={Appointment}
            appointmentContentComponent={AppointmentContent}
          />
          <Resources data={resources} />

          <Toolbar flexibleSpaceComponent={FlexibleSpace} />
          <DateNavigator />

          <EditRecurrenceMenu />
          <AppointmentTooltip showCloseButton showDeleteButton showOpenButton />
          <AppointmentForm />
          <DragDropProvider />
        </Scheduler>
      </Paper>
    );
  }
}
