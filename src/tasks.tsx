import { Dispatch, SetStateAction, useState } from "react";
import Checkbox from "./checkbox";

const Tasks = ({
  data,
  setData,
}: {
  data: { id: number; status: boolean; task: string }[];
  setData: Dispatch<
    SetStateAction<{ status: boolean; task: string; id: number }[]>
  >;
}) => {
  return (
    <div className="tasks">
      {data.map((item) => (
        <Task item={item} data={data} setData={setData} key={item.id} />
      ))}
    </div>
  );
};

type idk = {
  item: {
    id: number;
    status: boolean;
    task: string;
  };
  data: {
    id: number;
    status: boolean;
    task: string;
  }[];
  setData: Dispatch<
    SetStateAction<
      {
        status: boolean;
        task: string;
        id: number;
      }[]
    >
  >;
};

const Task = ({ item, data, setData }: idk) => {
  const [vis, setVis] = useState(false);

  const delItem = () => {
    let oldData = data.filter((task) => task.id !== item.id);
    oldData.sort((item1, item2) => item1.id - item2.id);
    setData([...oldData]);
  };

  const check = (currentTask: {
    task: string;
    id: number;
    status: boolean;
  }) => {
    const { id, status, task } = currentTask;
    const oldData = data.filter((item) => item.id !== id);
    let newData = [...oldData, { id, status: !status, task }];
    newData.sort((item1, item2) => item2.id - item1.id);
    setData([...newData]);
  };

  return (
    <div
      className="task"
      key={item.id}
      onMouseMove={() => setVis(true)}
      onMouseOut={() => setVis(false)}
    >
      <Checkbox checked={item.status} onChange={() => check(item)} />
      <p
        style={
          item.status ? { textDecoration: "line-through", color: "gray" } : {}
        }
      >
        {item.task}
      </p>
      {vis && <input type="button" value="X" onClick={delItem} />}
    </div>
  );
};

export default Tasks;
