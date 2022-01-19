import React,{useState} from 'react';
import { useHistory } from 'react-router-dom';

const Form = (props) => {
    const [data, setData] = useState({
        title: "",
        id: ""
    })
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`/${data.title}/${data.id}`)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Search for: </label>
                <select name="title" onChange={(e) => setData({ ...data, title: e.target.value })}>
                    <option value="planets">planets</option>
                    <option value="people">people</option>
                </select>
            </div>
            <div>
                <label>ID: </label>
                <input type="number" name="id" onChange={(e) => setData({ ...data, id: e.target.value })}/>
            </div>
            <button>Search</button>
        </form>
    )
};

export default Form;
