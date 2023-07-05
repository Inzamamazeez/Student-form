import React, { useState } from 'react';
import style from './Student.module.css';

function Student() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    grade: '',
    address: '',
  });
  const [submittedData, setSubmittedData] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedData((prevData) => [...prevData, formData]);
    setFormData({
      name: '',
      age: '',
      grade: '',
      address: '',
    });
  };

  return (
    <>
    <h1>Enter Student Details below:</h1>
    <div className={style.main_container}>
      <form onSubmit={handleSubmit} className={style.form_container}>
        <div className={style.first_input}>
          <label>
            Name
            &nbsp;
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Age
            &nbsp;
            &nbsp;
            &nbsp;
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Grade
            &nbsp;
            <input
              type="text"
              name="grade"
              value={formData.grade}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Addrs
            &nbsp;
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>

      <table className={style.table_container}>
        <thead>
          <tr>
            <th>Name|</th>
           
            <th>Age|</th>
        
            <th>Grade|</th>
            
            <th>Address|</th>
          </tr>
        </thead>
        <tbody>
          {submittedData.map((data, index) => (
            <tr key={index}>
              <td>{data.name}</td>
              <td>{data.age}</td>
              <td>{data.grade}</td>
              <td>{data.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
}

export default Student;