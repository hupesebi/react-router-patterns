import React, { useState} from "react";
import { useHistory } from "react-router-dom";

const ColorForm = ({addColor}) => {

    const [form, setForm] = useState({name:"white", color: "#ffffff"})
    const history = useHistory()

    const handleChange = (e) =>{
        setForm((form) => ({...form, [e.target.name]: e.target.value}))
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        addColor({ [form.name]: form.color });
        history.push("/colors")
    }

    return(
        <div>
        <h2>Add new color</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="color">Select a color</label>
          <br />
          <input
            name="color"
            id="color"
            value={form.color}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="name">Color name</label>
          <br />
          <input
            name="name"
            id="name"
            value={form.name}
            onChange={handleChange}
          />
          <br />
          <button>Submit</button>
        </form>
      </div>
    );
    

}

export default ColorForm