import React from "react";
import Hero from "../components/Heros";
import Content from "../components/Contents";


import Form from "react-bootstrap/Form";

class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            Massage: "",
            disabled: false,
            emailSent: null,
        }
    }

    handleChange = (event) => {

        const target = event.target;
        const value = target.type === `checkbox` | target.Checked | target.value;
        const name = target.name

        this.setState ({
            [name]: value
        })

    }

    hadleSubmit = (event) => {
        event.preventDefault();

        this.setState({
            disabled: true,
        });
    }

    render() {

        return (
            <div>
                <Hero title={this.props.title} />

                <Content>
                    <Form onSubmit={this.hadleSubmit} >
                        <Form.Group>
                            <Form.Label htmlFor="full name" >Full Name</Form.Label>
                            <Form.Control id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor="email" >Email</Form.Label>
                            <Form.Control id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor="message" >Message</Form.Label>
                            <Form.Control id="message" name="message" as="textarea" rows="4" value={this.state.name} onChange={this.handleChange} />
                        </Form.Group>

                        <button className="d-inline-block" variant="primary" type="submit" disabled={this.state.disabled} >
                            Send
                        </button>


                        {this.state.emailSent === true && <p className="d-inline success-msg"  >Email Sent</p>}
                        {this.state.emailSent === false && <p className="d-inline err-msg"  >Email Not Sent</p>}
                    </Form>
                </Content>
            </div>

        );
    }

}

export default Contact;