import React, { useState } from "react";

const ControlComponentForm = () => {
  const [user, setUser] = useState({ name: "", email: "" });

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(user);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setUser({ ...user, [inputName]: inputValue });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          className="border mx-1 p-2"
          type="name"
          name="name"
          id="name"
        />
        <input
          onChange={handleChange}
          className="border mx-1 p-2"
          type="email"
          name="email"
          id="email"
        />
        <button className="border mx-1 p-2" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ControlComponentForm;
