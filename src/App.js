import {Component} from 'react'

import './App.css'

class App extends Component {
  state = {
    isTrue: false,
    isShow: false,
    websiteName: '',
    username: '',
    password: '',
    listItem: [],
  }

  render() {
    return (
      <div className="app-container">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="app-logo"
          />
          <div className="password-manager-container">
            <div className="web-container">
              <form className="form" onSubmit={this.onAddNewPasswords}>
                <h1 className="main-heading">Add New Passwords</h1>
                <div className="website-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png "
                    alt="websites"
                    className="website-logo"
                  />
                  <input
                    type="text"
                    className="input-text"
                    placeholder="Enter Website"
                    onChange={this.onChangeWebsite}
                  />
                </div>
                <div className="website-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png "
                    alt="websites"
                    className="website-logo"
                  />
                  <input
                    type="username"
                    className="input-text"
                    placeholder="Enter Username"
                    onChange={this.onChangeUsername}
                  />
                </div>
                <div className="website-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png "
                    alt="websites"
                    className="website-logo"
                  />
                  <input
                    type="password"
                    className="input-text"
                    placeholder="Enter Password"
                    onChange={this.onChangePassword}
                  />
                </div>
                <div className="button-container">
                  <button className="button" type="submit">
                    Add
                  </button>
                </div>
              </form>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png "
              alt="password manager"
              className="password-manager-image"
            />
          </div>
        </div>
        <div className="user-details-container">
          <div className="user-list-count-container">
            <div className="password-count">
              <h1 className="your-password">Your Passwords</h1>
              <p className="count">0</p>
            </div>
            <div className="search-engine">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png "
                alt="search"
                className="search-icon"
              />
              <input
                type="search"
                className="search-input"
                onChange={this.searchList}
                placeholder="Search"
              />
            </div>
          </div>
          <hr className="horizontal-line" />
        </div>
      </div>
    )
  }
}
export default App
