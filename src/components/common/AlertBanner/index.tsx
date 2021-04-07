import * as S from './styled'
import Alert from 'react-bootstrap/Alert'

interface PropsTypes {
  message?: string
  variant?: string
}

const AlertBanner: React.FC<PropsTypes> = ({
  message,
  variant
}): JSX.Element => {
  const alertMessage =
    message || 'An unexpected error ocurred. Please try again later.'
  const alertVariant = variant || 'danger'

  return (
    <Alert variant={alertVariant} style={{ backgroundColor: 'red' }}>
      {alertMessage}
    </Alert>
  )
}

export default AlertBanner
