import React, { Component } from 'react'

export default class ModalDelete extends Component {
  constructor(props) {
    super(props)
    this.state = {
      info: this.props.info, 
      error: ''
    }
  }

  handleChange = (e) => {
    const infoCopy = {...this.state.info}
    infoCopy[e.target.name] = e.target.name === "toNewPage" ? e.target.checked : e.target.value
    this.setState({
      info: infoCopy
    });
  }

  handleChangeInfo = (e) => {
    e.preventDefault()
    const { changeInfo } = this.props
    const { info } = this.state
    changeInfo(info)
  }

  render() {
    const { onClose, deleteLink } = this.props
    const { info } = this.state
    return (
      <div className='modal-container'>
        <div className='modal-style'>
          <button className='close-modal' onClick={onClose}>
            <img className='close-modal-image' src="/img/close-icon.png" alt='delete-project'></img>
          </button>
          <form className='form-create-project' onSubmit={this.handleChangeInfo}>
            <div className="modal-field-group">
              <label className="label-modal" htmlFor="display-text">Display text:</label>
              <input required="required" className='input-modal' type="text"
                name="text"
                value={info.text}
                onChange={this.handleChange} />
            </div>
            {info.type === 'link' &&
              <div className="modal-field-group">
                <label className="label-modal" htmlFor="link-to">Link destination:</label>
                <input id="link-to" required="required" className='input-modal' type="text"
                name="href"
                value={info.href}
                onChange={this.handleChange} />
                <label className="label-modal" htmlFor="link-to">Open in new window?</label>
                <input className="checkbox" onChange={this.handleChange} checked={info.toNewPage} type="checkbox" name="toNewPage" id="toNewPage"/>
              </div>
            }
            <button className='button-modal' type='submit'>Update info</button>
          </form>
          {info.type === 'link' && <p onClick={deleteLink} className='button-modal-red' type='submit'>Delete link</p>}
        </div>
      </div>
    )
  }
}
