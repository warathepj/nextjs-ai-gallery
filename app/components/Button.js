// app/components/Button.js/

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
