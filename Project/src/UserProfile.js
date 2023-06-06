import React from 'react';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: JSON.parse(localStorage.getItem('user')) || {}
    };
  }

  render() {
    const { firstName, lastName, email } = this.state.user;

    return (
        <div className="profile-container">
          <div className="profile-card">
            <h1>Welcome {firstName} {lastName}</h1>
            <table className="profile-table">
              <tbody>
                <tr>
                  <th>First Name</th>
                  <td>{firstName}</td>
                </tr>
                <tr>
                  <th>Last Name</th>
                  <td>{lastName}</td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>{email}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );
    }
  }
  
  export default UserProfile;