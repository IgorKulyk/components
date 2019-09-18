import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker'
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'


const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail author="Sam" timeAgo="Today at 8:00PM" avatar={faker.image.avatar()} text="Nice blog!" />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Jane" timeAgo="Today at 5:40PM" avatar={faker.image.avatar()} text="Wow! I like it!" />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Tom" timeAgo="Yesterday at 10:00AM" avatar={faker.image.avatar()} text="Keep going like that!" />
            </ApprovalCard>
        </div>
    )
};


ReactDOM.render(<App />, document.querySelector('#root'));