import ReactDOM from 'react-dom';
import faker from '@faker-js/faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';


const App = () => {
    return (
        <div className="ui container comments">

            <ApprovalCard>

                <CommentDetail 
                avatar={faker.image.avatar()} 
                content="I like the subject!" 
                timeAgo="Today at 4:45PM" 
                author="Sam"
                />

            </ApprovalCard>

            <ApprovalCard>

                <CommentDetail 
                avatar={faker.image.avatar()} 
                content="Nice blog post!" 
                timeAgo="Today at 2:00AM" 
                author="Alex"
                />

            </ApprovalCard>

            <ApprovalCard>

                <CommentDetail 
                avatar={faker.image.avatar()} 
                content="Fantastic blog post! I love the writing!" 
                timeAgo="Yesterday at 5:00PM" 
                author="Jane"
                />
                
            </ApprovalCard>


        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));