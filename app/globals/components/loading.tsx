const Loading: React.FC<{ message: string }> = ({ message }) => (
  <main className="flex items-center justify-center flex flex-col">
    <section className="flex items-center justify-center flex flex-col">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      <h1 className="m-4">{message}</h1>
    </section>
  </main>
)
export default Loading
