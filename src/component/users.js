import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getBooks} from '../store/actions/usersAction';
import Title from './Title/title';
import ListItems from './list';
import Paginate from './paginate'

class users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 0,
            data: []
        };
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
        this.props.getBooks()
        this.setState({data: this.props.users})
    }

    // Update the currentPage state everytime a button is triggered
    handleClick({selected: selectedPage}){
        this.setState({currentPage: selectedPage})
            // this.props.history.push({
            //     pathname: "/",
            //     search: "?page=" + selectedPage
            // });
    }

    render() {
        // calculates number of elements to be rendered
        const PER_PAGE = 6;
        const {users} = this.props.users;
        const offset = this.state.currentPage * PER_PAGE;
        const pageCount = Math.ceil(users.length / PER_PAGE);

        // function that Iterates through the array and renders the list by book_title
        const currentPageData = users.slice(offset, offset + PER_PAGE).map(index =>
            <React.Fragment key={index.id}>
                <ListItems id={index.book_pages} name={index.book_title}/>
            </React.Fragment>);

        return (
            <div>
                <Title title="BOOKS"/>
                <Paginate pageCount={pageCount} handleClick={this.handleClick}/>
                {currentPageData}
            </div>
        )
    }
}

const mapStateToProps  = (state) => ({users:state.users})

export default connect(mapStateToProps, {getBooks})(users)