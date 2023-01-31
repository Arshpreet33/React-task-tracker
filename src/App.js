import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";

function App() {
    const URL = "http://localhost:5000/tasks/";
    const [tasks, setTasks] = useState([]);

    const [btnName, setBtnName] = useState("Add Task");

    useEffect(() => {
        const getTasks = async () => {
            const data = await fetchTasks();
            setTasks(data);
        };
        getTasks();
    }, []);

    //Fetch Tasks from server
    const fetchTasks = async () => {
        const result = await fetch(URL);

        const data = await result.json();
        return data;
    };

    //Delete a Task
    const deleteTask = async (id) => {
        await fetch(URL + id, { method: "DELETE" });
        setTasks((tasks) => tasks.filter((task) => task.id !== id));
        // refreshTasks();
    };

    //Toggle Task Reminder
    const toggleReminder = async (id, reminder) => {
        await fetch(URL + id, {
            method: "PATCH",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({ reminder: !reminder }),
        });
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, reminder: !task.reminder } : task
            )
        );
    };

    //Add Task Button clicked
    const addTaskClick = (btnText) => {
        setBtnName(btnText === "Add Task" ? "Back" : "Add Task");
    };

    //Save a Task
    const saveTask = async (task) => {
        const result = await fetch(URL, {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(task),
        });
        const newTaskAdded = await result.json();

        setTasks([...tasks, newTaskAdded]);

        // setTasks((tasks) => [
        //     ...tasks,
        //     {
        //         id: tasks.length + 1,
        //         ...task,
        //     },
        // ]);
        setBtnName("Add Task");
    };

    //reset id's of all tasks
    // const refreshTasks = () => {
    //     setTasks((tasks) =>
    //         tasks.map((task, index) =>
    //             task.id === index + 1 ? task : { ...task, id: index + 1 }
    //         )
    //     );
    // };

    return (
        <div className="container">
            <Header btnName={btnName} onBtnClick={addTaskClick} />
            {btnName === "Back" ? (
                <AddTask onSubmit={saveTask} />
            ) : tasks.length === 0 ? (
                <h3>No Tasks</h3>
            ) : (
                <Tasks
                    tasks={tasks}
                    onDelete={deleteTask}
                    onToggle={toggleReminder}
                />
            )}
            <Footer />
        </div>
    );
}

export default App;
