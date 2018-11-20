import React from 'react';
import axios from 'axios';

function listCoursesWrapper(Component, apiUrl) {
    class ListCoursesWrapper extends React.Component {
        state = {
            data: []
        }

        componentDidMount() {
            this.getAll();
        }

        getAll = () => {
            axios.get(`${apiUrl}`)
                .then(response => response.data)
                .then(data => this.setState({
                    data
                }));
        }

        remove = id => {
            axios.delete(`${apiUrl}/${id}`)
                .then(response => response.data)
                .then(() => {
                    const data = this.state.data.filter(item =>
                        item.id !== id
                    );
                    this.setState({
                        data
                    });
                });
        }

        render() {
            return <Component data={this.state.data}
                remove={this.remove}
                {...this.props} />
        }
    }
    return ListCoursesWrapper;
}
export default listCoursesWrapper;