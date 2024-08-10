
// app/components/Button.js/
// from app/components/Button.js/ how to pass className
// from Button component in app/page.js/

// this next js code is Button component, how to pass
// className from parent
const Button = ({ children, onClick, className }) => {
  return (
    <div className="my-1">
    <button className={className} onClick={onClick}>
      {children}
    </button>
    </div>
  );
};

export default Button;
