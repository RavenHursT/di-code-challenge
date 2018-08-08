import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  search
} from './store/modules/user-search'

const Home = props => <p className="App-intro">
    To get started, edit <code>src/App.js</code> and save to reload.
    <br/>
    <button {...{
      onClick: () => props.search(`matias`)
    }}>Search</button>
</p>

export default connect(
  ({userSearch}) => ({
    users: userSearch.users,
    isSearching: userSearch.isSearching
  }),
  (dispatch) => bindActionCreators({
    search
  }, dispatch)
)(Home)