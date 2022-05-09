import React from 'react';
import ReactDOM from 'react-dom';
import faker from '@faker-js/faker';
import CommentDetail from './CommentDetail';


const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail avatar={faker.image.avatar()} content="I like the subject!" timeAgo="Today at 4:45PM" author="Sam"/>
            <CommentDetail avatar={faker.image.avatar()} content="Nice blog post!" timeAgo="Today at 2:00AM" author="Alex"/>
            <CommentDetail avatar={faker.image.avatar()} content="Fantastic blog post! I love the writing!" timeAgo="Yesterday at 5:00PM" author="Jane"/>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));