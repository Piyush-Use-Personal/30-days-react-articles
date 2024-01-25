import './App.css'
import { ErrorBoundary } from './errorBoundary/ErrorBoundary'
import ComponentThatWillNotThrowError from './components/ComponentThatWillNotThrowError'
import ComponentThatWillThrowError from './components/ComponentThatWillThrowError'
import { ErrorBoundaryWithDynamicComponent } from './errorBoundary/ErrorBoundaryWithDynamicComponent'

function App() {

  return (
   <div>
    <ErrorBoundary>
      <ComponentThatWillNotThrowError />
    </ErrorBoundary>
    <ErrorBoundary>
      <ComponentThatWillThrowError />
    </ErrorBoundary>

    <ErrorBoundaryWithDynamicComponent>
      <ComponentThatWillNotThrowError />
    </ErrorBoundaryWithDynamicComponent>
    
    <ErrorBoundaryWithDynamicComponent>
      <ComponentThatWillThrowError />
    </ErrorBoundaryWithDynamicComponent>

    
    <ErrorBoundaryWithDynamicComponent fallback={() => <p>Custom fallback component</p>}>
      <ComponentThatWillThrowError />
    </ErrorBoundaryWithDynamicComponent>
   </div>
  )
}

export default App
