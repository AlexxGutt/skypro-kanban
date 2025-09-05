import axios from "axios";

const API_URL = "https://wedev-api.sky.pro/api/kanban";
const getToken = () => {
  try {
    const userInfo = localStorage.getItem("userInfo");
    return userInfo ? JSON.parse(userInfo).token : null;
  } catch {
    return null;
  }
};

export async function fetchTasks() {
  const token = getToken();
  try {
    const data = await axios.get(API_URL, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return data.data.tasks;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function addTask({ title, topic, status, description, date }) {
  const token = getToken();
  try {
    const response = await axios.post(
      API_URL,
      {
        title,
        topic,
        status,
        description,
        date,
      },
      {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "",
        },
      }
    );
    return response.data.tasks;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function deleteTask(taskId) {
  const token = getToken();
  try {
    const response = await axios.delete(`${API_URL}/${taskId}`, {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "",
      },
    });
    return response.data.tasks;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function editTask(
  taskId,
  title,
  description,
  newStatus,
  topic,
  date
) {
  const token = getToken();
  try {
    const response = await axios.put(
      `${API_URL}/${taskId}`,
      {
        description,
        status: newStatus,
        title,
        topic,
        date,
      },
      {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "",
        },
      }
    );
    return response.data.tasks;
  } catch (error) {
    throw new Error(error.message);
  }
}
