import React, { Component } from 'react';
import { connect } from "react-redux";
import './Main.styles.scss';
import { CardList } from '../card-list/Card-list.component';
import { fetchPosts, fetchUsers } from '../../redux/ActionCreators';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Header from '../header/Header.component';


class Main extends Component {
    constructor(props) {
      super (props);
    }

    componentDidMount() {
        this.props.fetchPosts();
        this.props.fetchUsers();
    }


    render() {
        const UsersPage = () => {
            const {users, isLoading, errMess} = this.props.users;
            return (
                <React.Fragment>
                <div className="header">
                    <div className="header-title-text">Users</div>
                </div>
                <div className="container">
                    <CardList list={users} isLoading={isLoading} errMess={errMess}/>
                </div>
            </React.Fragment>
            );
        }
        const HomePage = () => {
            const {posts, isLoading, errMess} = this.props.posts;
            return (
                <React.Fragment>
                <div className="header">
                    <div className="header-title-text">Posts</div>
                </div>
                <div className="container">
                    <CardList list={posts} isLoading={isLoading} errMess={errMess}/>
                </div>
            </React.Fragment>
            );
        }

        return(
            <React.Fragment>
                <Header />
                 <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/users' component={() => <UsersPage/>} />
                    <Redirect to='/home' />
                </Switch>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts,
        users: state.users,
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchPosts: () => {dispatch(fetchPosts())},
    fetchUsers: () => {dispatch(fetchUsers())},

});

export default connect(mapStateToProps, mapDispatchToProps)(Main);