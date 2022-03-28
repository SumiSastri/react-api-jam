import React, { Component } from "react";
import ReactModal from "react-modal";

import { contentUrl } from "../../../constants/listOfURLs";
import { PopUpModal } from "../../../components/PopUpModal";
import { FormInput } from "../../../components/FormInput";

ReactModal.setAppElement("body");
export class CreateBlogModal extends Component {
  constructor() {
    super();

    this.state = {
      data: {
        title: "",
        body: "",
        modalIsOpen: false,
      },
    };
    this.initialState = this.state;
  }
  // handle inputs changed by user
  handleChange = ({ target: { name, value } }) => {
    const data = { ...this.state.data, [name]: value };
    this.setState({ data });
  };

  // this submit does not send the form to a back-end database
  handleFormSubmit = (event) => {
    event.preventDefault();
    const addContent = {
      title: this.state.title,
      body: this.state.body,
    };
    console.log(
      `TITLE ${this.state.title} 
			BODY ${this.state.body} 
		`
    );
    fetch(contentUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(addContent),
    })
      .then((response) => response.json())
      .then((json) => console.log("check submission", json));
  };
  // opens and closes modal
  openModal = () => {
    console.log("this is:", this);
    this.setState((state) => ({
      // set state to the opposite of false which is true
      modalIsOpen: !state.modalIsOpen,
    }));
    console.log("OPEN:", this.state);
  };

  render() {
    const { title, body } = this.state;
    return (
      <section>
        <button
          className="f6 link dim br-pill ba bw2 ph3 pv2 mb2 dib dark-green"
          onClick={() => this.openModal()}
          type="button"
        >
          Add content
        </button>
        <PopUpModal
          isOpen={this.state.modalIsOpen}
          disableCloseOnOverlay={false}
          closeOnRequest={() => this.openModal(false)}
          children={
            <div>
              <form
                className="bg-light-red mw7 center pa4 br2-ns ba b--black-10"
                onSubmit={this.handleSubmit}
              >
                <div>
                  <FormInput
                    className=" input-reset mw7 center pa4 br2-ns ba b--black-10"
                    label="Add title"
                    onChange={this.handleChange}
                    type="text"
                    value={title}
                  />
                </div>
                <br />
                <div>
                  <FormInput
                    className="input-reset ba bg-light-yellow mt2 b--black-20 pa4 db w-90"
                    label="Add text"
                    onChange={this.handleChange}
                    type="text-area"
                    value={body}
                  />
                </div>
                <br />
                <section>
                  <button
                    className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-purple"
                    onSubmit={() => this.handleSubmit}
                    type="submit"
                  >
                    Save
                  </button>
                </section>
              </form>
              <br />
              <button
                className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-hot-pink"
                onClick={() => this.openModal(false)}
                type="button"
              >
                Cancel
              </button>
            </div>
          }
        />
      </section>
    );
  }
}
export default CreateBlogModal;
