import React, { Component } from 'react'

import AppHeaderMenu from '../../Layout/AppHeaderMenu';
export default function withHeaderWrapper(WrappedComponent) {
    class withHeaderWrapper extends Component {
        render() {
            return (
                <React.Fragment>
                    <AppHeaderMenu>
                        <WrappedComponent {...this.props} />
                    </AppHeaderMenu>
                </React.Fragment>
            )
        }
    }
    return withHeaderWrapper;
}
