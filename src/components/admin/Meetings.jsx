import { Paper } from '@mui/material';
import MeetingStore from '../../stores/MeetingStore';
import { observer } from 'mobx-react-lite';
import dayjs from 'dayjs';

const Meetings = observer(() => {
    const currentDate = new Date();
    const weekAfterNow = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate() + 7
    );

    return (
        <>
            <h2>Meetings</h2>
            {MeetingStore.meetingList.slice().sort((x, y) => new Date(x.dateTime) - new Date(y.dateTime))
                .map((x, i) => <ShowMeeting key={i} meeting={x}
                    color={new Date(x.dateTime) - 24 <= new Date() ? "#f44336" : x.dateTime <= weekAfterNow ? "#ffb74d" : "#9ccc65"} />)}
        </>
    );
});

export default Meetings;

export function ShowMeeting(props) {
    const { color, meeting } = props;
    const formattedDate = dayjs(meeting.dateTime).format('YYYY-MM-DD HH:mm:ss');

    return (
        <Paper
            elevation={3}
            sx={{
                width: 320,
                '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
            }}
        >
            <p><strong>Service Type:</strong> {meeting.serviceName}</p>
            <p><strong>Client Name:</strong> {meeting.clientName}</p>
            <p><strong>Client Phone:</strong> {meeting.clientPhone}</p>
            <p><strong>Client Email:</strong> {meeting.clientEmail}</p>
            <p><strong>Date:<span style={{ color: color }}>{formattedDate}</span></strong> </p>
        </Paper>
    );
}



