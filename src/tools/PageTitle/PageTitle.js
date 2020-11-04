import React, { PureComponent } from 'react'
import { Helmet } from 'react-helmet'


export default class PageTitle extends PureComponent {
  render() {
    return (
      <div>
        <Helmet >
          <title>{'PapeliStore '+ this.props.title}</title>
        </Helmet>
      </div>
    )
  }
}
