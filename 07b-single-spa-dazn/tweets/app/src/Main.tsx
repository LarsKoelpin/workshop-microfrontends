import React from 'react';
import styled from 'styled-components';
import {getCurrentUser} from './domain/user/user.service';
import TweetView from './application/tweets/TweetView';

interface Props {
}

interface State {
    currentUser: string;
    hasError: boolean;
}

class Main extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {currentUser: getCurrentUser(), hasError: false};
    }

    componentDidCatch() {
        this.setState({hasError: true});
    }

    render() {
        const {currentUser, hasError} = this.state;

        if (hasError) {
            return <Error>Oooops. Sth. went wrong :(</Error>;
        }
        return <TweetView currentUser={currentUser}/>;
    }
}

const Error = styled.div`
  color: red;
`;

export default Main;
