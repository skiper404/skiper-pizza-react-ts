const Wrapper = ({ children }) => (
  <div className="flex min-h-dvh flex-col bg-emerald-400 p-2 sm:p-10">
    <div className="flex-1 rounded-xl bg-white p-4 shadow-2xl sm:p-8">
      {children}
    </div>
  </div>
);

export default Wrapper;
