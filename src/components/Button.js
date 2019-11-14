import React, { Component } from "react";
import LanguageContext from "../context/LanguageContext";

class Button extends Component {
  //this.context type
  //static contextType = LanguageContext;

  renderSubmit(value) {
    return value === "english" ? "Submit" : "Voorleggen";
  }
  render() {
    //const text = this.context === "english" ? "Submit" : "Voorleggen";
    return (
      <button className="ui button primary">
        <LanguageContext.Consumer>
          {value => this.renderSubmit(value)}
        </LanguageContext.Consumer>
      </button>
    );
  }
}

export default Button;
