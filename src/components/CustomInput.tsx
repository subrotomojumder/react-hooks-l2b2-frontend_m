import { forwardRef } from "react";

type TCustomInputProps = {
  className: string;
};

const CustomInput = forwardRef<HTMLInputElement, TCustomInputProps>( // forward re parameter types
  ({ className }, inputRef) => {
    // forward ref er two parameter
    return (
      <div>
        <input
          ref={inputRef}
          className={className}
          type="text"
          name="name"
          id="name"
        />
      </div>
    );
  }
);

export default CustomInput;
