
// app/components/Button.js/
// from app/components/Button.js/ how to pass className
// from Button component in app/page.js/

// this next js code is Button component, how to pass
// className from parent
const Button = ({ children, onClick, className }) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
