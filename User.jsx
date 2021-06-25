// import * as axios from 'axios';
// import React from 'react';
// import classes from './Users.module.css';
// import usersPhoto from '../../img/photo.jpg';

// class UsersAPIComponent extends React.Component {

// componentDidMount() {
//     axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}& count${ this.props.pageSize} `).then(response => {

//                 this.props.setUsers(response.data.items);

//             });
//         }
//         onPageChanged = (pageNumber) => {
//             this.props.setCurrentPage(pageNumber);
//             axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}& count${ this.props.pageSize} `).then(response => {

//                 this.props.setUsers(response.data.items);
//                 this.props.setTotalUsersCount(response.data.totalCount)

//             });
//         }

//     render() {

//         let pagesCount = Math.ceil( this.props.totalUsersCount / this.props.pageSize);

//         let pages = []; 
//         for (let i = 1; i <= pagesCount; i++) {
//             pages.push(i);
//         }

//         return 
//     }
// }        


// export default UsersAPIComponent;