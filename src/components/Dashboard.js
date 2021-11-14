import { connect } from 'react-redux'
import { PaletteCard } from '../components/index'

const Dashboard = props => {
    console.log(props)

  return (
  
    <div className="App-Main">
    
      <div className="dashboard">
        <h2 className="my_palettes">My Palettes</h2>
        <div className="filtered-container">
               
               
        </div>
  
        <p className="my_info"> View My Profile </p>
  
    </div>
    </div>
  )

}

const mapStateToProps = state => {
  return {
    userPalettes: state.userPalettes
    
  }
}

export default connect(mapStateToProps)(Dashboard)

// {props.userPalettes.map(palette => <PaletteCard key={palette.id} id={palette.id} colors={palette.colors} /> )}