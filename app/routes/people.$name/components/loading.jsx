function Loading() {
  return (
    <>
      <div className="flex items-center justify-center h-screen flex flex-col">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
        <h1 className="m-4">Wait a second Jedi, we are getting the data!</h1>
      </div>
    </>
  );
}
export default Loading;
