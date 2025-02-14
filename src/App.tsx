import './App.scss';

const App: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className = "main__container">
      {children}
    </div>
  )
}

export default App;
