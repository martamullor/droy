import React, { Component } from 'react'

export default class LinkEditable extends Component {

  goToLink = () => {
    const { info, mode } = this.props
    if(mode !== "view") return
    if(info.toNewPage) window.open(info.href)
    else window.location = info.href
  }

  render () {
    const { info, style, onDoubleClick } = this.props
    const dataId = this.props['data-id']
    return <button type="button" onClick={this.goToLink} data-id={dataId} onDoubleClick={onDoubleClick} style={style}>{info.text}</button>
  }
}
