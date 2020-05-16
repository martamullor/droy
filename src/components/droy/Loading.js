import React from 'react'
import { Spring, animated } from 'react-spring/renderprops'
import { interpolate } from 'flubber'
import '../../styles/loading.css'

const paths = [
    'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z',
    'M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z',
    'M7 2v11h3v9l7-12h-4l4-8z',
]

const interpolators = []
for (let i = 0; i < paths.length; i++) {
    interpolators.push(
        interpolate(paths[i], paths[i + 1] || paths[0], { maxSegmentLength: 0.1 })
    )
}

export default class Loading extends React.Component {
    state = { interpolators, index: 0 }
    goNext = () =>
        this.setState(({ index, interpolators }) => ({
            index: index + 1 >= interpolators.length ? 0 : index + 1,
        }))
    render() {
        const { interpolators, index } = this.state
        const interpolator = interpolators[index]
        return (
            <div className='loading-container'
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <svg width="50" viewBox="0 0 22 22">
                    <g fill="#00c77f">
                        <Spring
                            reset
                            native
                            from={{ t: 0 }}
                            to={{ t: 1 }}
                            onRest={this.goNext}>
                            {({ t }) => <animated.path d={t.interpolate(interpolator)} />}
                        </Spring>
                    </g>
                </svg>
                <h1 className='loading-text' >LOADING</h1>
            </div>
        )
    }
}