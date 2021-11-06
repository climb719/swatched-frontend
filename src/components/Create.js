import React from 'react'
// import { connect } from 'react-redux'
import { ColorExtractor } from 'react-color-extractor'
// import { test } from '../redux/actionCreators'

class Create extends React.Component {

    state = {
        image: "",
        colors: []
    }

    handleClick = (e) => {
        e.preventDefault()
        // this.props.test()
        console.log(this.state.image)
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
      }

    getColors = colors =>
    this.setState(state => ({ colors: [...state.colors, ...colors] }))
       
    renderSwatches = () => {
        const { colors } = this.state
        console.log(colors)
    }

 

    render() {
    return (
        <div>
         
            
            <ColorExtractor getColors={this.getColors}  >
           { (this.state.image === "") ?
           <img className="image_field" src="https://www.kenyons.com/wp-content/uploads/2017/04/default-image-620x600.jpg" alt="default"/>
            : <img className="image_field"
              src={this.state.image}  alt="your input"
            />
            }
            </ColorExtractor>
            <form>
              <input type="text" name="image" placeholder="drop a url here..." size="50" onChange={this.onChange} value={this.state.image} />&nbsp;
              <input type="submit" value="Submit"  onClick={this.handleClick}/>
            </form>
           
            <div>
                {this.renderSwatches()}
            </div>
        
        </div>
        )
    }

}

export default Create 

// const mapStateToProps = (state) => {
//     return {
       
//         colors: state.colors
//     }
// }


// export default connect(mapStateToProps, {test})(Create)