import React, { Component } from 'react'
import { withData } from '../../contexts/dataContext'
import '../../styles/components-selectorBar.css'


class ComponentsSelectorBar extends Component {

  constructor(props) {
    super(props)
    this.state = { styleComponents: [] }
  }

  componentDidMount = () => {
    // Peticion a BBDD para conseguir todos los componentes de eses estilo.
    let styleComponents = [
      {
        code: 'ClassicHeading1',
        defaultInfo: { text1: 'Link', text2: 'Link' },
        image: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg'
      },
      {
        code: 'ClassicHeading2',
        defaultInfo: { text1: 'Link', text2: 'Link' },
        image: 'https://interactive-examples.mdn.mozilla.net/media/examples/grapefruit-slice-332-332.jpg'
      },
      {
        code: 'ClassicHome1',
        defaultInfo: { text1: 'Full screen intro', text2: 'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' }
      }
    ]
    this.setState({ styleComponents })
  }

  showComponents = () => {
    const usedCompIds = this.props.userLayoutObj.map(c=>c.code)
    const { styleComponents } = this.state
    return styleComponents.map(c => {
      if (!usedCompIds.includes(c.code)) {
        return (
          <div key={c.code} style={{ margin: '20px', backgroundColor: 'yellow', height: '50px', color: 'black' }}>
            <button data-code={c.code} onClick={this.handleAddComponent}>Add</button>
            {c.code}
          </div>)
      }
      return false
    })
  }

  handleAddComponent = (e) => {
    const { addComponent } = this.props
    const code = e.target.attributes['data-code'].value
    const defaultInfo = this.state.styleComponents.filter(c => c.code === code)[0].defaultInfo
    addComponent(code, defaultInfo)
  }
  
  render() {
    return (
      <div className='components-bar'>
        <h2 className= 'title-component-bar'>Components:</h2>
        {this.showComponents()}
      </div>
    )
  }
}

export default withData(ComponentsSelectorBar)