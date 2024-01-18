import { Dispatch, SetStateAction, useState } from "react";
import Checkbox from "./checkbox";

type propsType = {
    data: { id: number; status: boolean; task: string; }[];
    setData: Dispatch<SetStateAction<{status: boolean; task: string; id: number;}[]>>
}

const Form = ({ data, setData }:propsType) => {
    const [id, setId] = useState<number>(0)
    const [value, setValue] = useState({status: false, task: ''});

    const addTask = () => {
        if(value.task === '') return
        setId(prev => prev + 1)
        const currentId = id
        let newData = [...data, {...value, id: currentId}]
        newData.sort((item1, item2) => item2.id - item1.id);
        setData([...newData])
    }
  return (
    <div className="form">
      <Checkbox onChange={(e) => setValue({ ...value, status: e.target.checked })} checked={value.status} />
      <input type="text" placeholder="Enter a task" onChange={(e) => setValue({...value, task: e.target.value})} id="" />
      <input type="button" value="Add" onClick={() => addTask()} />      
    </div>
  );
};

export default Form;
