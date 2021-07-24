import React from 'react'

import RouteType from '../../shared/types/RouteType'
import { PageContainer } from '../../shared/styles/Container'

type Props = {

}

const Settings = ({ name }: RouteType & Props) => (
  <PageContainer>
    {name}
  </PageContainer>
)

export default Settings
