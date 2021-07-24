import RouteType from '../../shared/types/RouteType'
import { PageContainer } from '../../shared/styles/Container'

type Props = {

}

const Reports = ({ name }: RouteType & Props) => (
  <PageContainer>
    {name}
  </PageContainer>
)

export default Reports

