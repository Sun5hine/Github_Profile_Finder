import React from 'react';

const UserForm = (props) => {
  return (
    <form onSubmit={props.getUser}>
      <input className="form" type="text" name="username"/>
      <button style={{margin:"auto", display:"block" }}> Submit </button>
    </form>

  );
}



export default UserForm;
