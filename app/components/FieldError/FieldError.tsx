import { ErrorMessage } from '@hookform/error-message'
import { FieldErrors } from 'react-hook-form'

export default function FieldError(
  p: Readonly<{ errors: FieldErrors; name: string }>,
) {
  return (
    <div className="text-red-500">
      {' '}
      <ErrorMessage errors={p.errors} name={p.name} />
    </div>
  )
}
