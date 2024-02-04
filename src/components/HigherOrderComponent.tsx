const HigherOrderComponent = (WrappedComponent) => {
  return (props) => (
    <div className="border-4 border-purple-500 rounded-full p-0.5">
      <WrappedComponent {...props} />
    </div>
  );
};

export default HigherOrderComponent;
