import { useState } from "react";

const AddTask = ({ onSubmit }) => {
    const [text, setText] = useState("");
    const [day, setDay] = useState("");
    const [reminder, setReminder] = useState(false);
    const saveTask = (e) => {
        e.preventDefault();
        if (!text) {
            alert("Task Name is required!");
            return;
        }
        onSubmit({ text: text, day: day, reminder: reminder });
    };
    return (
        <form className="react-form" onSubmit={saveTask}>
            <div className="form-control">
                <label>Task</label>
                <input
                    type="text"
                    placeholder="Add Task"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
            <div className="form-control">
                <label>Day & Time</label>
                <input
                    type="text"
                    placeholder="Add Day & Time"
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                />
            </div>
            <div className="form-control form-control-check">
                <label>Reminder</label>
                <input
                    type="checkbox"
                    value={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)}
                />
            </div>
            <input type="submit" value="save" className="btn btn-block" />
        </form>
    );
};
export default AddTask;
