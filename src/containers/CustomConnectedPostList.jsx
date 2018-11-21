import React, { Component } from 'react';
import PostList from '../components/PostList.jsx';

class CustomConnectedPostList extends Component {

    constructor(props) {
        super(props);
        this.state = props.store.getState();
    }

    componentDidMount() {
        const { store } = this.props;
        this.unsbscribe = store.subscribe(() =>{
            this.setState({ ...store.getState()})
        })
    }

    componentWillUnmount() {
        this.unsbscribe();
    }

    render(){
       return <PostList {...this.state}/>
    }
}

export default CustomConnectedPostList;