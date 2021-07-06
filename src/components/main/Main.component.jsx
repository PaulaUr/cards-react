import React, { Component } from 'react';
import { connect } from "react-redux";
import './Main.styles.scss';
import { CardList } from '../card-list/Card-list.component';
import { fetchPosts } from '../../redux/ActionCreators';

class Main extends Component {
    constructor(props) {
      super (props);
    }

    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        return(
            <React.Fragment>
                <div className="header">
                    <div className="header-title-text">Prueba técnica</div>
                </div>
                <div className="container">
                    <CardList postList={this.props.posts} />
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts,
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchPosts: () => {dispatch(fetchPosts())},

});

export default connect(mapStateToProps, mapDispatchToProps)(Main);