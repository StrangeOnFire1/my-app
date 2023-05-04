import React from 'react'

export default function Alerts({alert}) {
  return (
    alert && <div className="alert alert-success alert-dismissible fade show" role="alert">
        <strong>{alert}</strong>
    </div>
  )
}
