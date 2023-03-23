import React from 'react';
import PropTypes from 'prop-types';

const test = ({id}) => {
    return (
        <div>
            {id}
        </div>
    );
};

const nyoba = props => {
    return (
        <div>
            <test id="7"></test>
        </div>
    );
};

export default nyoba;