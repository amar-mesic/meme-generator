import React from "react"

export default class Form extends React.Component {
    constructor(props) {
        super(props)
        // this.state = {...props.functionality}
        this.functionality = props.functionality
    }

    render() {
        return(
            <form className='meme-form' onSubmit={this.functionality.handleOnSubmit}>
                <div className='form-text'>
                    <input type='text' placeholder='top text'
                        // ref={this.state.topRef}
                        onChange={this.functionality.handleChange}
                        name='top'>
                    </input>
                    <input type='text' placeholder='bottom text'
                        // ref={this.state.bottomRef}
                        onChange={this.functionality.handleChange}
                        name='bottom'>
                    </input>
                </div>
                <input type='submit' className='submit-button' value='Generate new Meme'></input>
            </form>
        )
    }
}