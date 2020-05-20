import React, { Component } from 'react'

export default class ModalDelete extends Component {
  constructor(props) {
    super(props)
    this.state = {
      info: this.props.info, 
      style: this.props.style,
      error: ''
    }
  }

  handleChangeNormal = (e) => {
    const infoCopy = {...this.state.info}
    infoCopy[e.target.name] = e.target.name === "toNewPage" ? e.target.checked : e.target.value
    this.setState({
      info: infoCopy
    });
  }

  handleChangeStyle = (e) => {
    const infoCopy = {...this.state.style}
    infoCopy[e.target.name] = e.target.value
    this.setState({
      style: infoCopy
    });
  }

  handleChangeInfo = (e) => {
    e.preventDefault()
    const { changeInfo } = this.props
    const { info, style } = this.state
    console.log(666, style)
    changeInfo({...info, style})
  }

  render() {
    const { onClose, deleteLink } = this.props
    const { info, style } = this.state
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
                onChange={this.handleChangeNormal} />
            </div>
            {info.type === 'link' &&
              <div className="modal-field-group">
                <label className="label-modal" htmlFor="link-to">Link destination:</label>
                <input id="link-to" required="required" className='input-modal' type="text"
                name="href"
                value={info.href}
                onChange={this.handleChangeNormal} />
                <label className="label-modal" htmlFor="link-to">Open in new window?</label>
                <input className="checkbox" onChange={this.handleChangeNormal} checked={info.toNewPage} type="checkbox" name="toNewPage" id="toNewPage"/>
              </div>
            }
             <div className="modal-field-group">
                <label className="label-modal" htmlFor="fontSize">Text size:</label>
                <input id="fontSize" required="required" className='input-modal' type="text"
                name="fontSize"
                data-type="style"
                value={style.fontSize}
                onChange={this.handleChangeStyle} />
              </div>
            <button className='button-modal' type='submit'>Update info</button>
          </form>
          {info.type === 'link' && <p onClick={deleteLink} className='button-modal-red' type='submit'>Delete link</p>}
        </div>
      </div>
    )
  }
}
